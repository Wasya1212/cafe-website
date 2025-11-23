import { useState, useEffect } from 'react';
import { Shop } from './components/Shop';
import { Cart } from './components/Cart';
import { Checkout } from './components/Checkout';
import { Account } from './components/Account';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { OrderingDetails } from './components/OrderingDetails';
import { Header } from './components/Header';
import { sendOrderToBot } from './utils/orderBot';
import { loadCartFromStorage, saveCartToStorage, clearCartFromStorage } from './utils/cartStorage';

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
  // Initialize cart from localStorage
  const [cart, setCart] = useState<CartItem[]>(() => loadCartFromStorage());

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = loadCartFromStorage();
    if (savedCart.length > 0) {
      setCart(savedCart);
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (cart.length > 0) {
      saveCartToStorage(cart);
    } else {
      // If cart is empty, clear from storage
      clearCartFromStorage();
    }
  }, [cart]);

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
    clearCartFromStorage();
  };

  const generateOrderId = (): string => {
    const year = new Date().getFullYear();
    const randomNum = Math.floor(Math.random() * 100000).toString().padStart(5, '0');
    return `ORD-${year}-${randomNum}`;
  };

  const formatDateTime = (date: Date, timeSlot: string): string => {
    const [hours, minutes] = timeSlot.split(':');
    const dateTime = new Date(date);
    dateTime.setHours(parseInt(hours), parseInt(minutes || '0'), 0, 0);
    
    // Format as ISO string with timezone offset
    const offset = -dateTime.getTimezoneOffset();
    const sign = offset >= 0 ? '+' : '-';
    const offsetHours = Math.floor(Math.abs(offset) / 60).toString().padStart(2, '0');
    const offsetMinutes = (Math.abs(offset) % 60).toString().padStart(2, '0');
    
    const year = dateTime.getFullYear();
    const month = (dateTime.getMonth() + 1).toString().padStart(2, '0');
    const day = dateTime.getDate().toString().padStart(2, '0');
    const hoursStr = dateTime.getHours().toString().padStart(2, '0');
    const minutesStr = dateTime.getMinutes().toString().padStart(2, '0');
    const secondsStr = dateTime.getSeconds().toString().padStart(2, '0');
    
    return `${year}-${month}-${day}T${hoursStr}:${minutesStr}:${secondsStr}${sign}${offsetHours}:${offsetMinutes}`;
  };

  const handleCheckout = async (orderData: {
    address: string;
    time: string;
    customerName: string;
    phone: string;
    paymentMethod: string;
    comment?: string;
  }) => {
    // Prepare order data for bot
    const orderId = generateOrderId();
    const datetime = formatDateTime(new Date(), orderData.time);
    
    const order = {
      orderId,
      customerName: orderData.customerName,
      phone: orderData.phone,
      address: orderData.address,
      datetime,
      paymentMethod: orderData.paymentMethod,
      items: cart.map((item) => ({
        name: item.product.name,
        count: item.quantity,
        price: item.product.price,
      })),
      totalPrice: cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0),
      ...(orderData.comment && { comment: orderData.comment }),
    };

    // Send order to Telegram bot
    const result = await sendOrderToBot(order);
    
    if (result.success) {
      console.log('✅ Order successfully sent to bot');
    } else {
      console.error('❌ Failed to send order to bot:', result.error);
      // You might want to show an error message to the user here
      // For now, we'll still proceed with the checkout
    }

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