import { X, ShoppingCart, User as UserIcon, LogOut, Package } from 'lucide-react';
import type { User } from '../App';

type Page = 'home' | 'shop' | 'cart' | 'checkout' | 'account';

type SideMenuProps = {
  onClose: () => void;
  onNavigate: (page: Page) => void;
  cartItemCount: number;
  user: User | null;
  onLogout: () => void;
  onAuthRequired: () => void;
};

export function SideMenu({ onClose, onNavigate, cartItemCount, user, onLogout, onAuthRequired }: SideMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-50"
        onClick={onClose}
      />

      {/* Side Menu */}
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-2xl z-50 flex flex-col">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl text-gray-900">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        <nav className="flex-1 p-6 space-y-2">
          <button
            onClick={() => onNavigate('home')}
            className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center gap-3"
          >
            <span>🏠</span>
            <span>Shop / ショップ</span>
          </button>

          <button
            onClick={() => onNavigate('cart')}
            className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center gap-3"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>Cart / カート</span>
            {cartItemCount > 0 && (
              <span className="ml-auto bg-red-600 text-white text-sm w-6 h-6 rounded-full flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>

          {user ? (
            <>
              <button
                onClick={() => onNavigate('account')}
                className="w-full px-4 py-3 text-left text-gray-700 hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors flex items-center gap-3"
              >
                <Package className="w-5 h-5" />
                <span>My Orders / 注文履歴</span>
              </button>

              <div className="pt-4 border-t border-gray-200 mt-4">
                <div className="px-4 py-2 mb-2">
                  <p className="text-sm text-gray-500">Signed in as</p>
                  <p className="text-gray-900">{user.name}</p>
                  <p className="text-sm text-gray-600">{user.email}</p>
                </div>
                <button
                  onClick={onLogout}
                  className="w-full px-4 py-3 text-left text-red-600 hover:bg-red-50 rounded-lg transition-colors flex items-center gap-3"
                >
                  <LogOut className="w-5 h-5" />
                  <span>Sign Out / ログアウト</span>
                </button>
              </div>
            </>
          ) : (
            <div className="pt-4 border-t border-gray-200 mt-4">
              <button
                onClick={onAuthRequired}
                className="w-full px-4 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
              >
                <UserIcon className="w-5 h-5" />
                <span>Sign In / ログイン</span>
              </button>
            </div>
          )}
        </nav>

        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600 mb-2">Contact Us</p>
          <a
            href="tel:+81-3-1234-5678"
            className="text-red-600 hover:text-red-700 transition-colors flex items-center gap-2"
          >
            <span>📞</span>
            <span>03-1234-5678</span>
          </a>
        </div>
      </div>
    </>
  );
}
