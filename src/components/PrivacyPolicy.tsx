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
            На головну
          </button>
          
          <div className="text-center mb-8">
            <Shield className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Політика конфіденційності</h1>
            <p className="text-xl text-gray-600">プライバシーポリシー</p>
            <p className="text-sm text-gray-500 mt-4">Останнє оновлення: 23 листопада 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Вступ</h2>
            <p className="text-gray-700 leading-relaxed">
              У Crème & Cloud (クレーム&クラウド) ми прагнемо захистити вашу конфіденційність та забезпечити безпеку вашої особистої інформації. Ця Політика конфіденційності пояснює, як ми збираємо, використовуємо та захищаємо вашу інформацію під час використання нашого веб-сайту та послуг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Інформація, яку ми збираємо</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Інформація про замовлення</h3>
                <p className="leading-relaxed">
                  Під час оформлення замовлення ми збираємо вашу адресу доставки (обмежено районами Шібуя та Шінджуку), бажаний час доставки та деталі замовлення. Ця інформація використовується виключно для виконання вашого замовлення та надання наших послуг доставки.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Контактна інформація</h3>
                <p className="leading-relaxed">
                  Якщо ви зв'язуєтеся з нами по телефону або електронній пошті, ми можемо зберігати вашу контактну інформацію та листування, щоб краще обслуговувати вас та покращити наш сервіс обслуговування клієнтів.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Як ми використовуємо вашу інформацію</h2>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Для обробки та доставки ваших замовлень</li>
              <li>Для спілкування з вами щодо ваших замовлень</li>
              <li>Для покращення наших продуктів та послуг</li>
              <li>Для забезпечення якості наших японських тортів та досвіду клієнтів</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Безпека даних</h2>
            <p className="text-gray-700 leading-relaxed">
              Ми впроваджуємо відповідні технічні та організаційні заходи для захисту вашої особистої інформації від несанкціонованого доступу, зміни, розкриття або знищення. Однак жоден метод передачі через інтернет не є на 100% безпечним.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Інформація про доставку</h2>
            <p className="text-gray-700 leading-relaxed">
              Наразі ми доставляємо до вибраних районів Шібуя та Шінджуку, Токіо. Ваша адреса доставки буде використовуватися виключно для виконання замовлення та не буде передаватися третім особам, окрім необхідного для завершення доставки.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Файли cookie та відстеження</h2>
            <p className="text-gray-700 leading-relaxed">
              Наш веб-сайт може використовувати файли cookie для покращення вашого досвіду перегляду. Ці файли cookie допомагають нам запам'ятовувати ваші налаштування та покращувати наш сервіс. Ви можете вимкнути файли cookie через налаштування вашого браузера.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Ваші права</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ви маєте право:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Запросити доступ до вашої особистої інформації</li>
              <li>Запросити виправлення неточної інформації</li>
              <li>Запросити видалення вашої інформації</li>
              <li>Відмовитися від маркетингових повідомлень</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Зв'яжіться з нами</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Якщо у вас є питання щодо цієї Політики конфіденційності або того, як ми обробляємо вашу особисту інформацію, будь ласка, зв'яжіться з нами:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Телефон:</strong> +81-3-1234-5678
              </p>
              <p className="text-gray-700">
                <strong>Електронна пошта:</strong> info@cremecloud.jp
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Зміни до цієї політики</h2>
            <p className="text-gray-700 leading-relaxed">
              Ми можемо час від часу оновлювати цю Політику конфіденційності. Будь-які зміни будуть опубліковані на цій сторінці з оновленою датою ревізії. Ми рекомендуємо вам періодично переглядати цю політику.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}