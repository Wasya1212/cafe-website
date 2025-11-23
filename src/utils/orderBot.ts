export type OrderData = {
  orderId: string;
  customerName: string;
  phone: string;
  address: string;
  datetime: string;
  paymentMethod: string;
  items: Array<{
    name: string;
    count: number;
    price: number;
  }>;
  totalPrice: number;
  comment?: string;
};

export async function sendOrderToBot(order: OrderData) {
  try {
    const response = await fetch("https://cafee-bot.onrender.com/order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(order)
    });

    const data = await response.json();

    if (!data.ok) {
      console.error("❌ Bot server error:", data.error);
      return { success: false, error: data.error };
    }

    console.log("✅ Order sent to Telegram bot");
    return { success: true };
  } catch (err) {
    console.error("❌ Failed to send order to bot:", err);
    return { success: false, error: err instanceof Error ? err.message : "Unknown error" };
  }
}

