import { useState } from 'react';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Account } from './components/Account';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { OrderingDetails } from './components/OrderingDetails';
import { Header } from './components/Header';

export type Product = {
  id: string;
  name: string;
  nameJa: string;
  description: string;
  price: number;
  image: string;
  category: string;
  images?: string[];
  ingredients?: string[];
  weight?: string;
  featured?: boolean;
};

export type CartItem = {
  product: Product;
  quantity: number;
};

type Page = 'home' | 'shop' | 'cart' | 'checkout' | 'confirmation' | 'privacy' | 'terms' | 'ordering';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.product.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { product, quantity: 1 }];
    });
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.product.id === productId ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.product.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleCheckout = (deliveryAddress: string, deliveryTime: string) => {
    // Clear cart and show confirmation
    clearCart();
    setCurrentPage('confirmation');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-stone-50">
      <Header
        currentPage={currentPage}
        onNavigate={setCurrentPage}
        cartItemCount={cartItemCount}
      />

      {currentPage === 'home' && <Shop onAddToCart={addToCart} onNavigate={setCurrentPage} />}
      {currentPage === 'shop' && <Shop onAddToCart={addToCart} onNavigate={setCurrentPage} />}
      {currentPage === 'cart' && (
        <Cart
          cart={cart}
          onUpdateQuantity={updateCartQuantity}
          onRemove={removeFromCart}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === 'checkout' && (
        <Checkout
          cart={cart}
          onCheckout={handleCheckout}
          onNavigate={setCurrentPage}
        />
      )}
      {currentPage === 'confirmation' && (
        <Account onNavigate={setCurrentPage} />
      )}
      {currentPage === 'privacy' && (
        <PrivacyPolicy onNavigate={setCurrentPage} />
      )}
      {currentPage === 'terms' && (
        <TermsOfService onNavigate={setCurrentPage} />
      )}
      {currentPage === 'ordering' && (
        <OrderingDetails onNavigate={setCurrentPage} />
      )}
    </div>
  );
}