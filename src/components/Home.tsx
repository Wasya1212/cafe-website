import { ImageWithFallback } from './figma/ImageWithFallback';
import { ChevronRight } from 'lucide-react';

type HomeProps = {
  onNavigate: (page: 'shop') => void;
};

export function Home({ onNavigate }: HomeProps) {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1616544567842-573ff1565c54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNoZXJyeSUyMGJsb3Nzb218ZW58MXx8fHwxNzYzOTA2MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Cherry Blossoms"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-6xl mb-4">桜スイーツ</h1>
          <h2 className="text-4xl mb-6">Sakura Sweets</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Традиційні японські солодощі, виготовлені з любов'ю та точністю
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center gap-2 mx-auto"
          >
            <span>Переглянути колекцію</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl text-center mb-16 text-gray-900">
            おもてなしの心
            <span className="block text-xl mt-2 text-gray-600">Дух гостинності</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🍰</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Ручна робота</h3>
              <p className="text-gray-600">
                Кожен торт ретельно готується з використанням традиційних технік, переданих через покоління
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🚚</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Планування доставки</h3>
              <p className="text-gray-600">
                Виберіть бажану дату та час доставки, щоб забезпечити свіжість для ваших особливих моментів
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                <span className="text-3xl">🌸</span>
              </div>
              <h3 className="text-xl mb-3 text-gray-900">Сезонні пропозиції</h3>
              <p className="text-gray-600">
                Відкрийте унікальні смаки, які святкують красу кожного сезону в Японії
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-red-50 to-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl mb-6 text-gray-900">Готові спробувати справжні японські солодощі?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Створіть акаунт, щоб почати замовляти та насолоджуватися доставкою до дверей
          </p>
          <button
            onClick={() => onNavigate('shop')}
            className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors inline-flex items-center gap-2"
          >
            <span>Почати покупки</span>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
