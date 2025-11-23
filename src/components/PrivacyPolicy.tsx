import { ArrowLeft, Shield } from 'lucide-react';

type PrivacyPolicyProps = {
  onNavigate: (page: 'home') => void;
};

export function PrivacyPolicy({ onNavigate }: PrivacyPolicyProps) {
  return (
    <div className="py-12 px-4 bg-stone-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 text-gray-600 hover:text-red-600 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Privacy Policy</h1>
            <p className="text-xl text-gray-600">プライバシーポリシー</p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: November 23, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              At Crème & Cloud (クレーム&クラウド), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your information when you use our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Information We Collect</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Order Information</h3>
                <p className="leading-relaxed">
                  When you place an order, we collect your delivery address (limited to Shibuya and Shinjuku areas), preferred delivery time, and order details. This information is used solely to fulfill your order and provide our delivery services.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Contact Information</h3>
                <p className="leading-relaxed">
                  If you contact us via phone or email, we may retain your contact information and correspondence to better serve you and improve our customer service.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">How We Use Your Information</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>To process and deliver your orders</li>
              <li>To communicate with you about your orders</li>
              <li>To improve our products and services</li>
              <li>To ensure the quality of our Japanese cakes and customer experience</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Delivery Information</h2>
            <p className="text-gray-700 leading-relaxed">
              We currently deliver to selected areas in Shibuya and Shinjuku, Tokyo. Your delivery address will be used exclusively for order fulfillment and will not be shared with third parties except as necessary to complete the delivery.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Cookies and Tracking</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies to enhance your browsing experience. These cookies help us remember your preferences and improve our service. You can choose to disable cookies through your browser settings.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Your Rights</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              You have the right to:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Request access to your personal information</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Contact Us</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about this Privacy Policy or how we handle your personal information, please contact us:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Phone:</strong> +81-3-1234-5678
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@cremecloud.jp
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}