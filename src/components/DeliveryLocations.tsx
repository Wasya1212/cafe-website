import { MapPin, Clock, Calendar, ArrowDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { MapWithMarkers } from './MapWithMarkers';

const deliveryLocations = [
  {
    id: 1,
    name: 'Shibuya District',
    nameJa: '渋谷区',
    address: '1-2-3 Shibuya, Shibuya-ku, Tokyo',
    times: '10:00 AM - 8:00 PM',
    days: 'Monday - Saturday',
    coordinates: { lat: 35.6595, lng: 139.7004 },
  },
  {
    id: 2,
    name: 'Shinjuku District',
    nameJa: '新宿区',
    address: '2-8-1 Nishi-Shinjuku, Shinjuku-ku, Tokyo',
    times: '11:00 AM - 7:00 PM',
    days: 'Tuesday - Sunday',
    coordinates: { lat: 35.6896, lng: 139.6917 },
  },
];

export function DeliveryLocations() {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const scrollPosition = window.scrollY;
        const elementTop = scrollPosition + rect.top;
        const offset = (scrollPosition - elementTop) * 0.5; // Parallax speed factor
        setScrollOffset(offset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToProducts = () => {
    const productsSection = document.getElementById('products-section');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div ref={sectionRef} className="bg-white py-8 relative overflow-hidden">
      {/* Background Image with Parallax */}
      <div 
        className="absolute inset-0 opacity-10 transition-transform duration-75 ease-out"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1722359546494-8e3a00f88e95?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsaWdodCUyMHRvcG9ncmFwaGljJTIwbWFwfGVufDF8fHx8MTc2MzkwODM4NXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: `translateY(${scrollOffset}px)`,
          top: '-50%',
          bottom: '-50%',
          height: '200%',
        }}
      />
      
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          {/* Map Section - 50% */}
          <div className="relative h-[350px] rounded-xl overflow-hidden shadow-lg">
            <MapWithMarkers className="w-full h-full" />
          </div>

          {/* Delivery Information - 50% */}
          <div className="space-y-4">
            <div>
              <h2 className="text-3xl mb-1 text-gray-900">We Deliver To</h2>
              <p className="text-lg text-gray-600">配達エリア</p>
            </div>

            <div className="space-y-3">
              {deliveryLocations.map((location) => (
                <div 
                  key={location.id}
                  className="bg-stone-50 rounded-xl p-4 hover:shadow-md transition-shadow border border-stone-200"
                >
                  {/* Location Name */}
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-lg text-gray-900">{location.name}</h3>
                      <p className="text-sm text-gray-500">{location.address}</p>
                    </div>
                  </div>

                  {/* Delivery Times & Days */}
                  <div className="flex items-center gap-4 pl-7 text-sm">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{location.times}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">{location.days}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Scroll to Products Button */}
            <button
              onClick={scrollToProducts}
              className="w-full bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-md hover:shadow-lg"
            >
              <span>View Our Menu</span>
              <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}