import { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../App';

type FoodCarouselReusableProps = {
  onAddToCart: (product: Product, quantity: number) => void;
  items: (Product & { bgImage: string })[];
  descriptionPosition?: 'left' | 'right';
};

export function FoodCarouselReusable({ 
  onAddToCart, 
  items,
  descriptionPosition = 'left'
}: FoodCarouselReusableProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>(() => {
    const initial: { [key: string]: number } = {};
    items.forEach(item => {
      initial[item.id] = 1;
    });
    return initial;
  });

  // Auto-play functionality
  useEffect(() => {
    if (isHovered) return; // Don't auto-play when hovered
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [items.length, isHovered]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const handleIncrement = (productId: string) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: (prev[productId] || 1) + 1,
    }));
  };

  const handleDecrement = (productId: string) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: Math.max(1, (prev[productId] || 1) - 1),
    }));
  };

  const handlePurchase = (product: Product) => {
    const quantity = quantities[product.id] || 1;
    onAddToCart(product, quantity);
    // Reset quantity to 1 after adding to cart
    setQuantities(prev => ({
      ...prev,
      [product.id]: 1,
    }));
  };

  const isRight = descriptionPosition === 'right';
  const gradientDirection = isRight 
    ? 'bg-gradient-to-l from-black/60 via-black/40 to-transparent'
    : 'bg-gradient-to-r from-black/60 via-black/40 to-transparent';
  const contentAlignment = isRight ? 'justify-end' : 'justify-start';

  return (
    <div className="relative bg-stone-100" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div className="relative overflow-hidden">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {items.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                >
                  <div className={`absolute inset-0 ${gradientDirection}`}></div>
                </div>

                {/* Content */}
                <div className={`relative h-full flex items-center ${contentAlignment} px-4 sm:px-8 md:px-12`}>
                  <div className="w-full max-w-[450px] bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8">
                    {/* Title */}
                    <div className="mb-4">
                      <h3 className="text-2xl mb-1 text-gray-900">{item.name}</h3>
                      <p className="text-lg text-gray-600">{item.nameJa}</p>
                    </div>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-3">
                        <span className="text-3xl text-red-600">
                          ¥{(item.price * (quantities[item.id] || 1)).toLocaleString()}
                        </span>
                        {(quantities[item.id] || 1) > 1 && (
                          <span className="text-gray-500">
                            (¥{item.price.toLocaleString()} × {quantities[item.id] || 1})
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-gray-700">Кількість:</span>
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleDecrement(item.id)}
                          className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-5 h-5 text-gray-700" />
                        </button>
                        <span className="text-xl w-12 text-center">
                          {quantities[item.id] || 1}
                        </span>
                        <button
                          onClick={() => handleIncrement(item.id)}
                          className="w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-lg transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-5 h-5 text-gray-700" />
                        </button>
                      </div>
                    </div>

                    {/* Purchase Button */}
                    <button
                      onClick={() => handlePurchase(item)}
                      className="w-full group relative px-6 py-4 bg-red-600 hover:bg-red-700 text-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                    >
                      <div className="relative inline-flex items-center justify-center gap-3 w-full">
                        <ShoppingCart className="w-5 h-5 group-hover:scale-110 transition-transform" />
                        <span className="uppercase tracking-wide">Додати до кошика</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Previous"
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110"
          aria-label="Next"
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>

        {/* Dot Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {items.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                currentSlide === index
                  ? 'w-8 h-3 bg-white'
                  : 'w-3 h-3 bg-white/50 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}