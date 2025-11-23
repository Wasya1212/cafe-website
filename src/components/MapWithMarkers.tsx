import { MapPin } from 'lucide-react';

interface MapWithMarkersProps {
  className?: string;
}

export function MapWithMarkers({ className = '' }: MapWithMarkersProps) {
  return (
    <div className={`relative ${className}`}>
      {/* Map Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/flagged/photo-1580051720305-a944536881fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b2t5byUyMGNpdHklMjBtYXAlMjBhZXJpYWx8ZW58MXx8fHwxNzYzOTEyOTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)',
        }}
      >
      </div>

      {/* Marker 1 - Shibuya */}
      <div 
        className="absolute top-[45%] left-[35%] transform -translate-x-1/2 -translate-y-full z-10"
        style={{ animation: 'bounce 2s infinite' }}
      >
        <div className="relative">
          <MapPin className="w-12 h-12 text-red-600 fill-red-600 drop-shadow-lg" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-lg text-sm text-black">
            Shibuya
          </div>
        </div>
      </div>
      
      {/* Marker 2 - Shinjuku */}
      <div 
        className="absolute top-[35%] left-[55%] transform -translate-x-1/2 -translate-y-full z-10"
        style={{ animation: 'bounce 2s infinite 0.3s' }}
      >
        <div className="relative">
          <MapPin className="w-12 h-12 text-red-600 fill-red-600 drop-shadow-lg" />
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white px-3 py-1 rounded-lg shadow-lg text-sm text-black">
            Shinjuku
          </div>
        </div>
      </div>

      <style>{`
        @keyframes bounce {
          0%, 100% {
            transform: translateY(0) translateX(-50%);
          }
          50% {
            transform: translateY(-10px) translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
}