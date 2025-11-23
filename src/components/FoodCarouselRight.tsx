import { useState, useEffect } from 'react';
import { Plus, Minus, ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';
import type { Product } from '../App';

type FoodCarouselRightProps = {
  onAddToCart: (product: Product, quantity: number) => void;
};

const featuredItems: (Product & { bgImage: string })[] = [
  {
    id: 'cr1',
    name: 'Traditional Wagashi',
    nameJa: '伝統和菓子',
    description: 'Exquisite handcrafted Japanese confections made with time-honored techniques. Each piece is a work of art representing the beauty of nature and seasons.',
    price: 2900,
    image: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHdhZ2FzaGklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjM5MTE4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1753889076214-d888f2326bea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHdhZ2FzaGklMjB0cmFkaXRpb25hbHxlbnwxfHx8fDE3NjM5MTE4MjB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
  },
  {
    id: 'cr2',
    name: 'Yuzu Citrus Cake',
    nameJa: '柚子ケーキ',
    description: 'Refreshing citrus cake infused with aromatic yuzu. Light and fluffy texture with a perfect balance of sweet and tangy flavors that dance on your palate.',
    price: 3300,
    image: 'https://images.unsplash.com/photo-1622941367239-8acd68fa946d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHl1enUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzkxMTgyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1622941367239-8acd68fa946d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHl1enUlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzkxMTgyMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'seasonal',
  },
  {
    id: 'cr3',
    name: 'Sakura Mochi',
    nameJa: '桜餅',
    description: 'Delicate pink mochi wrapped in a salted cherry blossom leaf. A springtime delicacy with sweet red bean paste filling that captures the essence of Japanese sakura season.',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1648968290525-6b6ef05edb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHNha3VyYSUyMG1vY2hpfGVufDF8fHx8MTc2MzkxMTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1648968290525-6b6ef05edb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHNha3VyYSUyMG1vY2hpfGVufDF8fHx8MTc2MzkxMTgyM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
  },
];

export function FoodCarouselRight({ onAddToCart }: FoodCarouselRightProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [quantities, setQuantities] = useState<{ [key: string]: number }>({
    'cr1': 1,
    'cr2': 1,
    'cr3': 1,
  });

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredItems.length) % featuredItems.length);
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
  };

  return (
    <div className="relative bg-stone-100">
      <div className="relative overflow-hidden">
        {/* Slides Container */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {featuredItems.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0">
              <div className="relative h-[500px] overflow-hidden">
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url(${item.bgImage})`,
                  }}
                >
                  <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent"></div>
                </div>

                {/* Content - Positioned on the RIGHT side */}
                <div className="relative h-full flex items-center justify-end px-4 sm:px-8 md:px-12">
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
                      <span className="text-3xl text-red-600">
                        ¥{item.price.toLocaleString()}
                      </span>
                    </div>

                    {/* Quantity Selector */}
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-gray-700">Quantity:</span>
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
                        <span className="uppercase tracking-wide">Add to Cart</span>
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
          {featuredItems.map((_, index) => (
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
