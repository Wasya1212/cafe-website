import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import type { CartItem } from '../App';

type CartProps = {
  cart: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
  onNavigate: (page: 'shop' | 'checkout') => void;
};

export function Cart({ cart, onUpdateQuantity, onRemove, onNavigate }: CartProps) {
  const subtotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="min-h-[600px] flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-24 h-24 text-gray-300 mb-6" />
        <h2 className="text-3xl mb-3 text-gray-900">Ваш кошик порожній</h2>
        <p className="text-xl text-gray-600 mb-8">カートに商品がありません</p>
        <button
          onClick={() => onNavigate('shop')}
          className="px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Продовжити покупки
        </button>
      </div>
    );
  }

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl mb-2 text-gray-900">Кошик</h1>
          <p className="text-xl text-gray-600">ショッピングカート</p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          {cart.map(item => (
            <div
              key={item.product.id}
              className="flex gap-6 py-6 border-b border-gray-200 last:border-b-0"
            >
              <div className="w-32 h-32 rounded-lg overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={item.product.image}
                  alt={item.product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1">
                <h3 className="text-xl mb-1 text-gray-900">{item.product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{item.product.nameJa}</p>
                <p className="text-lg text-red-600 mb-4">
                  ¥{item.product.price.toLocaleString()}
                </p>

                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-3 py-2">
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                      className="text-gray-600 hover:text-red-600 transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={() => onRemove(item.product.id)}
                    className="text-gray-400 hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="text-right">
                <p className="text-xl text-gray-900">
                  ¥{(item.product.price * item.quantity).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between text-2xl mb-6">
            <span className="text-gray-900">Всього</span>
            <span className="text-red-600">¥{subtotal.toLocaleString()}</span>
          </div>

          <button
            onClick={() => onNavigate('checkout')}
            className="w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-lg"
          >
            Оформити замовлення
          </button>
        </div>
      </div>
    </div>
  );
}