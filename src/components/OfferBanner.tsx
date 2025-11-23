import { ShoppingBag, Flame } from 'lucide-react';
import { useState, useEffect } from 'react';

type OfferBannerProps = {
  onBuyNow: () => void;
};

export function OfferBanner({ onBuyNow }: OfferBannerProps) {
  const [timeLeft, setTimeLeft] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Reset timer
          return { hours: 23, minutes: 59, seconds: 59 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-[300px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1663870158409-2d3c78ba0a9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGRlc3NlcnQlMjB0YWJsZXxlbnwxfHx8fDE3NjM5MDY3NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative min-h-[300px] max-w-7xl mx-auto px-4 flex items-center py-8">
        <div className="w-full">
          <div className="flex justify-end mb-4">
            <div className="flex items-center gap-3 bg-red-600/90 backdrop-blur-sm px-4 py-2 rounded-full">
              <Flame className="w-5 h-5 text-yellow-300 animate-bounce" />
              <span className="text-white">Обмежена пропозиція</span>
              <div className="flex items-center gap-1 bg-black/30 px-3 py-1 rounded-full">
                <span className="text-white min-w-[2ch] text-center">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="text-white">:</span>
                <span className="text-white min-w-[2ch] text-center">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="text-white">:</span>
                <span className="text-white min-w-[2ch] text-center">{String(timeLeft.seconds).padStart(2, '0')}</span>
              </div>
            </div>
          </div>
          
          <div className="text-center mb-8">
            <h2 className="text-4xl mb-3 text-white uppercase">Весняна спеціальна колекція</h2>
            <p className="text-xl text-gray-200">桜の季節限定コレクション</p>
          </div>

          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center gap-8">
            <div className="text-white">
              <p className="text-lg mb-4 text-gray-300">
                Відсвяткуйте сезон вишневих квітів з нашою ексклюзивною колекцією
              </p>
              <div className="flex items-center gap-6">
                <div>
                  <p className="text-sm text-gray-300 line-through">¥4,500</p>
                  <p className="text-4xl text-red-400">¥3,200</p>
                </div>
                <div className="h-12 w-px bg-white/30"></div>
                <div>
                  <p className="text-sm text-gray-300">Економія</p>
                  <p className="text-2xl text-white">¥1,300</p>
                </div>
              </div>
            </div>

            <button
              onClick={onBuyNow}
              className="group relative px-8 py-4 bg-red-600/80 backdrop-blur-sm text-white rounded-2xl overflow-hidden shadow-2xl hover:shadow-red-600/60 transition-all duration-300 hover:scale-105 hover:bg-red-600/90 border border-white/20"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              <div className="relative inline-flex items-center gap-3">
                <ShoppingBag className="w-5 h-5 text-yellow-300 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                <span className="uppercase tracking-wide">Купити зараз</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}