import { ArrowLeft, FileText } from 'lucide-react';

type TermsOfServiceProps = {
  onNavigate: (page: 'home') => void;
};

export function TermsOfService({ onNavigate }: TermsOfServiceProps) {
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
            <FileText className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Terms of Service</h1>
            <p className="text-xl text-gray-600">利用規約</p>
            <p className="text-sm text-gray-500 mt-4">Last Updated: November 23, 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Agreement to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              By accessing and using Crème & Cloud (クレーム&クラウド) website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Service Description</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Crème & Cloud provides online ordering and delivery services for Japanese-style cakes and confections. Our services include:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Online product browsing and ordering</li>
              <li>Scheduled delivery to Shibuya and Shinjuku areas</li>
              <li>Three daily delivery time slots: 9:00, 13:00, and 19:00</li>
              <li>Shopping cart and checkout functionality</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Ordering and Payment</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Order Placement</h3>
                <p className="leading-relaxed">
                  When you place an order through our website, you are making an offer to purchase products. We reserve the right to accept or decline any order at our discretion.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Pricing</h3>
                <p className="leading-relaxed">
                  All prices are listed in Japanese Yen (¥) and are inclusive of applicable taxes. We reserve the right to modify prices at any time without prior notice.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Payment</h3>
                <p className="leading-relaxed">
                  Payment is required at the time of order placement. We accept various payment methods as indicated during checkout.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Delivery Terms</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Delivery Areas</h3>
                <p className="leading-relaxed">
                  We currently deliver only to designated areas within Shibuya (渋谷区) and Shinjuku (新宿区), Tokyo. Orders to addresses outside these areas cannot be fulfilled.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Delivery Times</h3>
                <p className="leading-relaxed">
                  Deliveries are scheduled for three time slots: 9:00 AM, 1:00 PM, and 7:00 PM. While we strive to deliver within your selected time slot, delays may occur due to unforeseen circumstances.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Delivery Responsibility</h3>
                <p className="leading-relaxed">
                  You must provide accurate delivery information. We are not responsible for failed deliveries due to incorrect addresses or unavailability at the delivery location.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Product Quality and Freshness</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              We take pride in the quality and freshness of our products. All cakes and confections are prepared with care using premium ingredients. Due to the nature of fresh bakery products:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Products should be consumed within the recommended timeframe</li>
              <li>Proper refrigeration may be required for certain items</li>
              <li>We are not responsible for product quality after delivery</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Cancellations and Refunds</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Order Cancellation</h3>
                <p className="leading-relaxed">
                  Orders may be cancelled within 2 hours of placement. After this period, orders are prepared for delivery and cannot be cancelled.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Refund Policy</h3>
                <p className="leading-relaxed">
                  Refunds are issued for cancelled orders within the cancellation period, or in cases where products are damaged or do not meet quality standards upon delivery.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Allergies and Dietary Restrictions</h2>
            <p className="text-gray-700 leading-relaxed">
              While we provide ingredient information for our products, we cannot guarantee that our products are free from allergens. Customers with food allergies or dietary restrictions should exercise caution and contact us before ordering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Intellectual Property</h2>
            <p className="text-gray-700 leading-relaxed">
              All content on the Crème & Cloud website, including images, text, logos, and designs, is the property of Crème & Cloud and is protected by copyright and trademark laws. Unauthorized use is prohibited.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Limitation of Liability</h2>
            <p className="text-gray-700 leading-relaxed">
              Crème & Cloud shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services or products. Our liability is limited to the amount paid for the order in question.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Changes to Terms</h2>
            <p className="text-gray-700 leading-relaxed">
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting. Your continued use of our services constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Governing Law</h2>
            <p className="text-gray-700 leading-relaxed">
              These Terms of Service are governed by the laws of Japan. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Tokyo.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Contact Information</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Phone:</strong> +81-3-1234-5678
              </p>
              <p className="text-gray-700">
                <strong>Email:</strong> info@cremecloud.jp
              </p>
              <p className="text-gray-700">
                <strong>Delivery Areas:</strong> Shibuya & Shinjuku, Tokyo
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}