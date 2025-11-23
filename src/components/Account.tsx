import { CheckCircle, Home, ShoppingBag } from 'lucide-react';

type AccountProps = {
  onNavigate: (page: 'home' | 'shop') => void;
};

export function Account({ onNavigate }: AccountProps) {
  return (
    <div className="py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
          <h1 className="text-4xl mb-2 text-gray-900">Замовлення підтверджено!</h1>
          <p className="text-xl text-gray-600 mb-4">ご注文ありがとうございます</p>
          <p className="text-lg text-gray-700 mb-8">
            Дякуємо за ваше замовлення. Ваші смачні японські торти будуть доставлені у вибраний час.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-6">
          <h2 className="text-2xl mb-4 text-gray-900 text-center">Що далі?</h2>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <span className="text-red-600 flex-shrink-0">✓</span>
              <span>Ми ретельно підготуємо ваше замовлення та переконаємося, що воно готове до доставки.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-red-600 flex-shrink-0">✓</span>
              <span>Ваші торти прибудуть свіжими у вибраний час доставки.</span>
            </p>
            <p className="flex items-start gap-3">
              <span className="text-red-600 flex-shrink-0">✓</span>
              <span>Насолоджуйтесь справжніми японськими десертами!</span>
            </p>
          </div>
        </div>

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 px-6 py-3 bg-white border-2 border-gray-300 text-gray-700 rounded-lg hover:border-red-600 hover:text-red-600 transition-colors"
          >
            <Home className="w-5 h-5" />
            На головну
          </button>
          <button
            onClick={() => onNavigate('shop')}
            className="flex items-center gap-2 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
          >
            <ShoppingBag className="w-5 h-5" />
            Продовжити покупки
          </button>
        </div>
      </div>
    </div>
  );
}