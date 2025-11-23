import { useState } from 'react';
import { Clock, MapPin, User, Phone, CreditCard, MessageSquare } from 'lucide-react';
import type { CartItem } from '../App';

type CheckoutProps = {
  cart: CartItem[];
  onCheckout: (orderData: {
    address: string;
    time: string;
    customerName: string;
    phone: string;
    paymentMethod: string;
    comment?: string;
  }) => void;
  onNavigate: (page: 'cart') => void;
};

const deliveryAreas = [
  'Shibuya, Tokyo',
  'Shinjuku, Tokyo',
];

const timeSlots = [
  '9:00',
  '13:00',
  '19:00',
];

export function Checkout({ cart, onCheckout, onNavigate }: CheckoutProps) {
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryTime, setDeliveryTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [phone, setPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');
  const [comment, setComment] = useState('');

  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (deliveryAddress && deliveryTime && customerName && phone) {
      onCheckout({
        address: deliveryAddress,
        time: deliveryTime,
        customerName,
        phone,
        paymentMethod,
        comment: comment.trim() || undefined,
      });
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-2 text-gray-900">Оформлення замовлення</h1>
          <p className="text-xl text-gray-600">お会計</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Checkout Form */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl mb-6 text-gray-900">Деталі доставки</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Customer Name */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <User className="w-5 h-5 text-red-600" />
                  <span>Ім'я</span>
                </label>
                <input
                  type="text"
                  value={customerName}
                  onChange={e => setCustomerName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  placeholder="Ваше ім'я"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <Phone className="w-5 h-5 text-red-600" />
                  <span>Телефон</span>
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  placeholder="+380501234567"
                  required
                />
              </div>

              {/* Delivery Address */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Район доставки</span>
                </label>
                <select
                  value={deliveryAddress}
                  onChange={e => setDeliveryAddress(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  required
                >
                  <option value="">Виберіть район доставки</option>
                  {deliveryAreas.map(area => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
                <p className="text-sm text-gray-500 mt-2">
                  Наразі ми доставляємо до вибраних районів Токіо
                </p>
              </div>

              {/* Delivery Time */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <Clock className="w-5 h-5 text-red-600" />
                  <span>Час доставки</span>
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {timeSlots.map(slot => (
                    <button
                      key={slot}
                      type="button"
                      onClick={() => setDeliveryTime(slot)}
                      className={`px-4 py-3 rounded-lg border-2 transition-colors ${
                        deliveryTime === slot
                          ? 'bg-red-600 text-white border-red-600'
                          : 'bg-white text-gray-700 border-gray-200 hover:border-red-600'
                      }`}
                    >
                      {slot}
                    </button>
                  ))}
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <CreditCard className="w-5 h-5 text-red-600" />
                  <span>Спосіб оплати</span>
                </label>
                <select
                  value={paymentMethod}
                  onChange={e => setPaymentMethod(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none"
                  required
                >
                  <option value="cash">Готівка</option>
                  <option value="card">Картка</option>
                  <option value="online">Онлайн оплата</option>
                </select>
              </div>

              {/* Comment */}
              <div>
                <label className="flex items-center gap-2 mb-2 text-gray-700">
                  <MessageSquare className="w-5 h-5 text-red-600" />
                  <span>Коментар (необов'язково)</span>
                </label>
                <textarea
                  value={comment}
                  onChange={e => setComment(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:border-red-600 focus:outline-none resize-none"
                  placeholder="Додаткові побажання до замовлення..."
                  rows={3}
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg disabled:bg-gray-300 disabled:cursor-not-allowed"
                disabled={!deliveryAddress || !deliveryTime || !customerName || !phone}
              >
                Оформити замовлення
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-2xl mb-6 text-gray-900">Підсумок замовлення</h2>

              <div className="space-y-4 mb-6">
                {cart.map(item => (
                  <div key={item.product.id} className="flex justify-between text-gray-700">
                    <span>
                      {item.product.name} × {item.quantity}
                    </span>
                    <span>¥{(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-200 pt-4 space-y-3">
                <div className="flex justify-between text-gray-700">
                  <span>Підсумок</span>
                  <span>¥{subtotal.toLocaleString()}</span>
                </div>
                <div className="border-t border-gray-200 pt-3 flex justify-between text-2xl">
                  <span className="text-gray-900">Всього</span>
                  <span className="text-red-600">¥{subtotal.toLocaleString()}</span>
                </div>
              </div>

              {deliveryAddress && deliveryTime && (
                <div className="mt-6 p-4 bg-red-50 rounded-lg">
                  <p className="text-sm mb-2 text-gray-700">
                    <strong>Доставка до:</strong> {deliveryAddress}
                  </p>
                  <p className="text-sm text-gray-700">
                    <strong>Час:</strong> {deliveryTime}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}