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
            На головну
          </button>
          
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-red-600 mx-auto mb-4" />
            <h1 className="text-4xl mb-2 text-gray-900">Умови використання</h1>
            <p className="text-xl text-gray-600">利用規約</p>
            <p className="text-sm text-gray-500 mt-4">Останнє оновлення: 23 листопада 2025</p>
          </div>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Згода з умовами</h2>
            <p className="text-gray-700 leading-relaxed">
              Отримуючи доступ та використовуючи веб-сайт та послуги Crème & Cloud (クレーム&クラウド), ви погоджуєтеся дотримуватися цих Умов використання. Якщо ви не згодні з цими умовами, будь ласка, не використовуйте наші послуги.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Опис послуг</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Crème & Cloud надає послуги онлайн-замовлення та доставки японських тортів та солодощів. Наші послуги включають:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Онлайн-перегляд та замовлення продуктів</li>
              <li>Планова доставка до районів Шібуя та Шінджуку</li>
              <li>Три щоденні часові слоти доставки: 9:00, 13:00 та 19:00</li>
              <li>Функціональність кошика та оформлення замовлення</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Замовлення та оплата</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Оформлення замовлення</h3>
                <p className="leading-relaxed">
                  Коли ви оформлюєте замовлення через наш веб-сайт, ви робите пропозицію на покупку продуктів. Ми залишаємо за собою право прийняти або відхилити будь-яке замовлення на наш розсуд.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Ціноутворення</h3>
                <p className="leading-relaxed">
                  Всі ціни вказані в японських єнах (¥) та включають відповідні податки. Ми залишаємо за собою право змінювати ціни в будь-який час без попереднього повідомлення.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Оплата</h3>
                <p className="leading-relaxed">
                  Оплата потрібна під час оформлення замовлення. Ми приймаємо різні способи оплати, як зазначено під час оформлення замовлення.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Умови доставки</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Райони доставки</h3>
                <p className="leading-relaxed">
                  Наразі ми доставляємо лише до визначених районів у Шібуя (渋谷区) та Шінджуку (新宿区), Токіо. Замовлення на адреси поза цими районами не можуть бути виконані.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Час доставки</h3>
                <p className="leading-relaxed">
                  Доставки заплановані на три часові слоти: 9:00 ранку, 13:00 дня та 19:00 вечора. Хоча ми прагнемо доставити в межах вибраного вами часового слота, можуть виникнути затримки через непередбачені обставини.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Відповідальність за доставку</h3>
                <p className="leading-relaxed">
                  Ви повинні надати точну інформацію про доставку. Ми не несемо відповідальності за невдалі доставки через неправильні адреси або недоступність у місці доставки.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Якість та свіжість продуктів</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Ми пишаємося якістю та свіжістю наших продуктів. Всі торти та солодощі готуються з дбайливістю з використанням преміальних інгредієнтів. Через природу свіжих хлібобулочних виробів:
            </p>
            <ul className="space-y-2 text-gray-700 list-disc list-inside">
              <li>Продукти слід споживати в межах рекомендованого терміну</li>
              <li>Для деяких товарів може знадобитися належне охолодження</li>
              <li>Ми не несемо відповідальності за якість продукту після доставки</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Скасування та повернення коштів</h2>
            <div className="space-y-4 text-gray-700">
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Скасування замовлення</h3>
                <p className="leading-relaxed">
                  Замовлення можуть бути скасовані протягом 2 годин після оформлення. Після цього періоду замовлення готуються до доставки та не можуть бути скасовані.
                </p>
              </div>
              <div>
                <h3 className="text-lg mb-2 text-gray-900">Політика повернення коштів</h3>
                <p className="leading-relaxed">
                  Повернення коштів здійснюється для скасованих замовлень у межах періоду скасування або у випадках, коли продукти пошкоджені або не відповідають стандартам якості при доставці.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Алергії та дієтичні обмеження</h2>
            <p className="text-gray-700 leading-relaxed">
              Хоча ми надаємо інформацію про інгредієнти для наших продуктів, ми не можемо гарантувати, що наші продукти не містять алергенів. Клієнти з алергіями на продукти харчування або дієтичними обмеженнями повинні бути обережними та зв'язатися з нами перед замовленням.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Інтелектуальна власність</h2>
            <p className="text-gray-700 leading-relaxed">
              Весь контент на веб-сайті Crème & Cloud, включаючи зображення, текст, логотипи та дизайн, є власністю Crème & Cloud та захищений законами про авторське право та торгові марки. Несанкціоноване використання заборонено.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Обмеження відповідальності</h2>
            <p className="text-gray-700 leading-relaxed">
              Crème & Cloud не несе відповідальності за будь-які непрямі, випадкові або наслідкові збитки, що виникають від використання наших послуг або продуктів. Наша відповідальність обмежена сумою, сплаченою за відповідне замовлення.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Зміни до умов</h2>
            <p className="text-gray-700 leading-relaxed">
              Ми залишаємо за собою право змінювати ці Умови використання в будь-який час. Зміни набудуть чинності негайно після публікації. Ваше подальше використання наших послуг означає прийняття змінених умов.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Застосовне право</h2>
            <p className="text-gray-700 leading-relaxed">
              Ці Умови використання регулюються законами Японії. Будь-які спори, що виникають з цих умов, підлягають виключній юрисдикції судів Токіо.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-4 text-gray-900">Контактна інформація</h2>
            <p className="text-gray-700 leading-relaxed mb-3">
              Якщо у вас є питання щодо цих Умов використання, будь ласка, зв'яжіться з нами:
            </p>
            <div className="bg-stone-50 p-4 rounded-lg space-y-2">
              <p className="text-gray-700">
                <strong>Телефон:</strong> +81-3-1234-5678
              </p>
              <p className="text-gray-700">
                <strong>Електронна пошта:</strong> info@cremecloud.jp
              </p>
              <p className="text-gray-700">
                <strong>Райони доставки:</strong> Shibuya & Shinjuku, Tokyo
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}