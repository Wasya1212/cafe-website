import { Phone, ShoppingCart } from 'lucide-react';

type Page = 'home' | 'shop' | 'cart' | 'checkout' | 'confirmation' | 'privacy' | 'terms' | 'ordering';

type HeaderProps = {
  currentPage: Page;
  onNavigate: (page: Page) => void;
  cartItemCount: number;
};

export function Header({ onNavigate, cartItemCount }: HeaderProps) {
  return (
    <header className="bg-white border-b-2 border-red-600 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          <button
            onClick={() => onNavigate('home')}
            className="flex items-center gap-2 hover:opacity-80 transition-opacity group"
          >
            <div className="relative w-10 h-10">
              {/* Outer circle with gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-red-600 to-pink-600 rounded-full shadow-lg group-hover:shadow-xl transition-shadow"></div>
              {/* Inner design */}
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white text-lg relative z-10">桜</span>
                {/* Decorative petals */}
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-1 right-2 w-2 h-2 bg-white rounded-full"></div>
                  <div className="absolute bottom-1 left-2 w-1.5 h-1.5 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
            <div>
              <h1 className="text-xl text-gray-900">Crème & Cloud</h1>
              <p className="text-xs text-gray-600">クレーム&クラウド</p>
            </div>
          </button>

          <div className="flex items-center gap-4">
            <a
              href="tel:+81-3-1234-5678"
              className="flex items-center gap-2 text-gray-700 hover:text-red-600 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">03-1234-5678</span>
            </a>

            <button
              onClick={() => onNavigate('cart')}
              className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors"
              aria-label="Cart"
            >
              <ShoppingCart className="w-5 h-5 text-gray-700" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
                  {cartItemCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}