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
            На головну
          </button>
          
          <div className="text-center mb-8">
            <ShoppingBag className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Деталі замовлення</h1>
            <p className="text-xl text-gray-600">ご注文について</p>
            <p className="text-sm text-gray-500 mt-4">Все, що потрібно знати про замовлення в Crème & Cloud</p>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-6">
          {/* How to Order Section */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <ShoppingBag className="w-7 h-7 text-red-600" />
              Як замовляти
              <span className="text-xl text-gray-600 ml-2">ご注文方法</span>
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">1</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Перегляньте наше меню</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Ознайомтеся з нашим вибором справжніх японських тортів та солодощів. Кожен продукт включає детальні описи, інгредієнти та ціни.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">2</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Додати до кошика</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Натисніть кнопку "Додати до кошика" на будь-якому продукті. Ви можете змінити кількість безпосередньо зі сторінки кошика.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">3</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Виберіть деталі доставки</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Виберіть район доставки (Шібуя або Шінджуку) та бажаний часовий слот (9:00 ранку, 13:00 дня або 19:00 вечора).
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-red-100 rounded-full flex items-center justify-center">
                  <span className="text-red-600">4</span>
                </div>
                <div>
                  <h3 className="text-lg mb-2 text-gray-900">Завершіть замовлення</h3>
                  <p className="text-gray-700 leading-relaxed">
                    Перевірте ваше замовлення та перейдіть до оформлення. Ви отримаєте підтвердження одразу після оформлення замовлення.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <MapPin className="w-7 h-7 text-red-600" />
              Райони доставки
              <span className="text-xl text-gray-600 ml-2">配達エリア</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gray-900">Shibuya</h3>
                <p className="text-lg text-gray-600 mb-2">渋谷区</p>
                <p className="text-gray-700 leading-relaxed">
                  Ми доставляємо до всіх районів у межах району Шібуя, включаючи Харадзюку, Ебісу, Дайкан'яму та навколишні райони.
                </p>
              </div>

              <div className="bg-stone-50 p-6 rounded-lg">
                <h3 className="text-xl mb-3 text-gray-900">Shinjuku</h3>
                <p className="text-lg text-gray-600 mb-2">新宿区</p>
                <p className="text-gray-700 leading-relaxed">
                  Ми доставляємо до всіх районів у межах району Шінджуку, включаючи Такада-но-бабу, Йоцуя, Ітігая та навколишні райони.
                </p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Примітка:</strong> Доставка наразі обмежена цими двома районами. Якщо ви знаходитесь поза цими районами, будь ласка, зв'яжіться з нами, щоб обговорити альтернативні варіанти.
              </p>
            </div>
          </div>

          {/* Delivery Times */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <Clock className="w-7 h-7 text-red-600" />
              Час доставки
              <span className="text-xl text-gray-600 ml-2">配達時間</span>
            </h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">9:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Ранкова доставка</h3>
                  <p className="text-gray-600 mb-2">朝の配達</p>
                  <p className="text-gray-700">Ідеально для сніданку або ранкових зустрічей. Доставка між 9:00 - 10:00 ранку.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">13:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Денна доставка</h3>
                  <p className="text-gray-600 mb-2">昼の配達</p>
                  <p className="text-gray-700">Ідеально для обідніх десертів або післяобіднього чаю. Доставка між 13:00 - 14:00 дня.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-stone-50 rounded-lg">
                <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-xl">19:00</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg mb-1 text-gray-900">Вечірня доставка</h3>
                  <p className="text-gray-600 mb-2">夜の配達</p>
                  <p className="text-gray-700">Чудово для вечірніх вечірок або святкувань. Доставка між 19:00 - 20:00 вечора.</p>
                </div>
              </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-gray-700">
                <strong>Терміни прийому замовлень:</strong> Будь ласка, оформлюйте замовлення принаймні за 3 години до бажаного часу доставки, щоб забезпечити наявність.
              </p>
            </div>
          </div>

          {/* Payment & Pricing */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h2 className="text-2xl mb-6 text-gray-900 flex items-center gap-3">
              <CreditCard className="w-7 h-7 text-red-600" />
              Оплата та ціни
              <span className="text-xl text-gray-600 ml-2">お支払い・料金</span>
            </h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Способи оплати</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Ми приймаємо різні способи оплати для вашої зручності:
                </p>
                <ul className="space-y-2 text-gray-700 list-disc list-inside ml-4">
                  <li>Кредитні картки (Visa, Mastercard, JCB, American Express)</li>
                  <li>Дебетові картки</li>
                  <li>Цифрові гаманці (PayPay, Line Pay)</li>
                  <li>Оплата готівкою при отриманні (доступно для замовлень понад ¥2,000)</li>
                </ul>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="text-lg mb-3 text-gray-900">Інформація про ціни</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">Всі ціни включають податок</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">Безкоштовна доставка до Шібуя та Шінджуку</span>
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  </div>
                  <div className="flex justify-between items-center p-3 bg-stone-50 rounded">
                    <span className="text-gray-700">Без прихованих комісій або сервісних зборів</span>
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
              Догляд за продуктами
              <span className="text-xl text-gray-600 ml-2">商品の取り扱い</span>
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Гарантія свіжості</h3>
                <p className="leading-relaxed">
                  Всі наші продукти виготовляються щодня з використанням преміальних інгредієнтів. Ми рекомендуємо споживати протягом 24-48 годин після доставки для оптимального смаку та текстури.
                </p>
              </div>

              <div>
                <h3 className="text-lg mb-2 text-gray-900">Інструкції зі зберігання</h3>
                <ul className="space-y-2 list-disc list-inside ml-4">
                  <li>Торти та продукти на основі вершків слід охолодити одразу після доставки</li>
                  <li>Традиційні вагасі можна зберігати при кімнатній температурі в прохолодному, сухому місці</li>
                  <li>Напої слід споживати свіжими або охолодженими</li>
                  <li>Тримайте продукти подалі від прямого сонячного світла та тепла</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg mb-2 text-gray-900">Інформація про алергени</h3>
                <p className="leading-relaxed">
                  Кожен список продуктів включає інформацію про інгредієнти. До поширених алергенів належать яйця, молочні продукти, пшениця та горіхи. Будь ласка, уважно перегляньте деталі продукту перед замовленням.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-lg shadow-md p-8 border border-red-100">
            <h2 className="text-2xl mb-4 text-gray-900">Потрібна допомога?</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Наша команда тут, щоб допомогти вам з будь-якими питаннями про замовлення, доставку або наші продукти.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Телефон</p>
                  <a href="tel:+81-3-1234-5677" className="text-lg hover:text-red-600 transition-colors">
                    +81-3-1234-5677
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Електронна пошта</p>
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
                  <p className="text-sm text-gray-500">Години роботи</p>
                  <p className="text-lg">9:00 - 20:00 (Щодня)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}