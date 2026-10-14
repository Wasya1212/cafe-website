const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const token = process.env.CREATOR_USER_TOKEN;
if (!token) {
  console.error("CREATOR_USER_TOKEN is required for deployment");
  process.exit(1);
}

const apiUrl = (process.env.CREATOR_API_URL || "").replace(/\/+$/, "");
const projectId = process.env.CREATOR_PROJECT_ID;
if (!projectId) {
  console.error("CREATOR_PROJECT_ID is required for deployment");
  process.exit(1);
}

const buildDir = "build";
if (!fs.existsSync(path.join(buildDir, "index.html"))) {
  console.error("Deployment requires index.html at the root of the build directory (" + buildDir + ").");
  process.exit(1);
}

const versionId = crypto.randomUUID();
const commitSha = process.env.COMMIT_SHA || "";

const mimeTypes = {
  ".html": "text/html",
  ".htm": "text/html",
  ".js": "application/javascript",
  ".mjs": "application/javascript",
  ".cjs": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".txt": "text/plain",
  ".xml": "application/xml",
  ".wasm": "application/wasm",
  ".map": "application/json",
};

function getFiles(dir) {
  let files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name === "node_modules" || entry.name === ".git") continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getFiles(full));
    } else if (entry.isFile()) {
      files.push(full);
    }
  }
  return files;
}

(async () => {
  const files = getFiles(buildDir);

  // Fetch project versions and resolve next version name
  const listRes = await fetch(apiUrl + "/project/" + projectId, {
    method: "GET",
    headers: {
      "Authorization": token,
    },
  });
  if (!listRes.ok) {
    throw new Error("Failed to fetch project versions: " + listRes.status + " " + (await listRes.text()));
  }
  const versions = await listRes.json();

  const versionName = versions[0]?.name?.replace(/\d+$/, (n) => +n + 1) ?? "1.0.0";

  console.log("Uploading " + files.length + " files for version " + versionName + " (" + versionId + ")...");

  for (const file of files) {
    const relPath = path.relative(buildDir, file).replace(/\\/g, "/");
    const ext = path.extname(relPath).toLowerCase();
    const contentType = mimeTypes[ext] || "application/octet-stream";
    const content = fs.readFileSync(file);

    // 1. Presign upload
    const presignRes = await fetch(apiUrl + "/upload/" + projectId + "/" + versionId + "/presign", {
      method: "POST",
      headers: {
        "Authorization": token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        versionName,
        fileName: relPath,
        contentType,
      }),
    });
    if (!presignRes.ok) {
      throw new Error("Failed to get presigned URL for " + relPath + ": " + presignRes.status + " " + (await presignRes.text()));
    }
    const { uploadUrl, cacheControl } = await presignRes.json();

    // 2. PUT file content to S3
    const putHeaders = { "Content-Type": contentType };
    if (cacheControl) {
      putHeaders["Cache-Control"] = cacheControl;
    }
    const putRes = await fetch(uploadUrl, {
      method: "PUT",
      headers: putHeaders,
      body: content,
    });
    if (!putRes.ok) {
      throw new Error("Failed to upload " + relPath + " to S3: " + putRes.status);
    }
  }

  // 3. Save version metadata
  console.log("Saving version metadata...");
  const saveRes = await fetch(apiUrl + "/save/" + projectId + "/" + versionId, {
    method: "POST",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: versionName,
      meta: {
        ci: true,
        provider: process.env.CREATOR_GIT_PROVIDER || "github",
        commitSha,
      },
    }),
  });
  if (!saveRes.ok) {
    throw new Error("Failed to save version metadata: " + saveRes.status + " " + (await saveRes.text()));
  }

  // 4. Activate version
  console.log("Activating version...");
  const masterRes = await fetch(apiUrl + "/" + versionId + "/master", {
    method: "POST",
    headers: {
      "Authorization": token,
      "Content-Type": "application/json",
    },
  });
  if (!masterRes.ok) {
    throw new Error("Failed to activate version: " + masterRes.status + " " + (await masterRes.text()));
  }

  console.log("✓ Successfully deployed and activated version " + versionName);
})().catch((err) => {
  console.error("Deployment failed:", err);
  process.exit(1);
});
