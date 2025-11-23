import { ArrowLeft, ShoppingBag, MapPin, Clock, CreditCard, Package, CheckCircle } from 'lucide-react';

type OrderingDetailsProps = {
  onNavigate: (page: 'home') => void;
};

export function OrderingDetails({ onNavigate }: OrderingDetailsProps) {
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
            <ShoppingBag className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Ordering Details</h1>
            <p className="text-xl text-gray-600">ご注文について</p>
            <p className="text-sm text-gray-500 mt-4">Everything you need to know about ordering from Crème & Cloud</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* How to Order Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <ShoppingBag className="w-7 h-7 text-red-600" />
              How to Order
              <span className="text-xl text-gray-600 ml-2">ご注文方法</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">1</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Browse Our Menu</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Explore our selection of authentic Japanese cakes and sweets. Each product includes detailed descriptions, ingredients, and pricing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Add to Cart</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Click the "Add to Cart" button on any product. You can adjust quantities directly from the cart page.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">3</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Select Delivery Details</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Choose your delivery area (Shibuya or Shinjuku) and preferred time slot (9:00 AM, 1:00 PM, or 7:00 PM).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">4</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Complete Your Order</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Review your order and proceed to checkout. You'll receive a confirmation immediately after placing your order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-red-600" />
              Delivery Areas
              <span className="text-xl text-gray-600 ml-2">配達エリア</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gray-900">Shibuya</h3>
                <p className="text-lg text-gray-600 mb-2">渋谷区</p>
                <p className="text-gray-700 leading-relaxed">
                  We deliver to all areas within Shibuya Ward, including Harajuku, Ebisu, Daikanyama, and surrounding neighborhoods.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gray-900">Shinjuku</h3>
                <p className="text-lg text-gray-600 mb-2">新宿区</p>
                <p className="text-gray-700 leading-relaxed">
                  We deliver to all areas within Shinjuku Ward, including Takadanobaba, Yotsuya, Ichigaya, and surrounding neighborhoods.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Note:</strong> Delivery is currently limited to these two wards. If you're located outside these areas, please contact us to discuss alternative arrangements.
              </p>
            </div>
          </div>

          {/* Delivery Times */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <Clock className="w-7 h-7 text-red-600" />
              Delivery Times
              <span className="text-xl text-gray-600 ml-2">配達時間</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">9:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Morning Delivery</h3>
                  <p className="text-gray-600 mb-2">朝の配達</p>
                  <p className="text-gray-700">Perfect for breakfast treats or early afternoon gatherings. Deliveries between 9:00 AM - 10:00 AM.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">13:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Afternoon Delivery</h3>
                  <p className="text-gray-600 mb-2">昼の配達</p>
                  <p className="text-gray-700">Ideal for lunch desserts or afternoon tea. Deliveries between 1:00 PM - 2:00 PM.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">19:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Evening Delivery</h3>
                  <p className="text-gray-600 mb-2">夜の配達</p>
                  <p className="text-gray-700">Great for dinner parties or evening celebrations. Deliveries between 7:00 PM - 8:00 PM.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Order Cut-off Times:</strong> Please place your order at least 3 hours before your desired delivery time to ensure availability.
              </p>
            </div>
          </div>

          {/* Payment & Pricing */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <CreditCard className="w-7 h-7 text-red-600" />
              Payment & Pricing
              <span className="text-xl text-gray-600 ml-2">お支払い・料金</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Payment Methods</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  We accept various payment methods for your convenience:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                  <li>Credit Cards (Visa, Mastercard, JCB, American Express)</li>
                  <li>Debit Cards</li>
                  <li>Digital Wallets (PayPay, Line Pay)</li>
                  <li>Cash on Delivery (COD available for orders over ¥2,000)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg mb-3 text-gray-900">Pricing Information</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">All prices include tax</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">Free delivery to Shibuya & Shinjuku</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">No hidden fees or service charges</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <Package className="w-7 h-7 text-red-600" />
              Product Care
              <span className="text-xl text-gray-600 ml-2">商品の取り扱い</span>
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Freshness Guarantee</h3>
                <p className="leading-relaxed">
                  All our products are made fresh daily using premium ingredients. We recommend consuming within 24-48 hours of delivery for optimal taste and texture.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2 text-gray-900">Storage Instructions</h3>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Cakes and cream-based items should be refrigerated immediately upon delivery</li>
                  <li>Traditional wagashi can be stored at room temperature in a cool, dry place</li>
                  <li>Drinks should be consumed fresh or refrigerated</li>
                  <li>Keep products away from direct sunlight and heat</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2 text-gray-900">Allergen Information</h3>
                <p className="leading-relaxed">
                  Each product listing includes ingredient information. Common allergens include eggs, dairy, wheat, and nuts. Please review product details carefully before ordering.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-md p-8 border border-red-100">
            <h2 className="text-2xl mb-4 text-gray-900">Need Help?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our team is here to assist you with any questions about ordering, delivery, or our products.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a href="tel:+81-3-1234-5678" className="text-lg hover:text-red-600 transition-colors">
                    +81-3-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a href="mailto:info@cremecloud.jp" className="text-lg hover:text-red-600 transition-colors">
                    info@cremecloud.jp
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  🕐
                </div>
                <div>
                  <p className="text-sm text-gray-500">Business Hours</p>
                  <p className="text-lg">9:00 AM - 8:00 PM (Daily)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}