import { Phone, Mail, MapPin } from 'lucide-react';
import { MapWithMarkers } from './MapWithMarkers';

type FooterProps = {
  onNavigate?: (page: 'privacy' | 'terms' | 'ordering') => void;
};

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl mb-4">Contact Us</h3>
              <p className="text-lg text-gray-400 mb-6">お問い合わせ</p>
            </div>

            <div className="space-y-4">
              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Phone</p>
                  <a href="tel:+81-3-1234-5678" className="text-lg hover:text-red-400 transition-colors">
                    +81-3-1234-5678
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-400 flex-shrink-0" />
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <a href="mailto:info@cremecloud.jp" className="text-lg hover:text-red-400 transition-colors">
                    info@cremecloud.jp
                  </a>
                </div>
              </div>

              {/* Delivery Locations */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-400 flex-shrink-0 mt-1" />
                <div>
                  <p className="text-sm text-gray-400">Delivery Areas</p>
                  <p className="text-lg">Shibuya & Shinjuku</p>
                  <p className="text-sm text-gray-500">渋谷区・新宿区</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div>
            <p className="text-center mb-4 text-lg text-white">
              Reminder we are delivering to :)
            </p>
            <div className="relative h-[300px] rounded-xl overflow-hidden shadow-lg">
              <MapWithMarkers className="w-full h-full" />
            </div>
          </div>
        </div>

        {/* Bottom Section - Links & Copyright */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Links */}
            <div className="flex gap-6">
              <a 
                href="#privacy" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
                onClick={() => onNavigate?.('privacy')}
              >
                Privacy Policy
              </a>
              <a 
                href="#terms" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
                onClick={() => onNavigate?.('terms')}
              >
                Terms of Service
              </a>
              <a 
                href="#ordering" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
                onClick={() => onNavigate?.('ordering')}
              >
                Ordering Details
              </a>
            </div>

            {/* Copyright */}
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} Crème & Cloud. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}