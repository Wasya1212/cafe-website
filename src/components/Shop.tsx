import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Minus, Eye, Sparkles, Cake, Flower2, Gift, Coffee } from 'lucide-react';
import type { Product } from '../App';
import { OfferBanner } from './OfferBanner';
import { FoodCarouselReusable } from './FoodCarouselReusable';
import { ProductModal } from './ProductModal';
import { ProductCard } from './ProductCard';
import { Footer } from './Footer';
import { DeliveryLocations } from './DeliveryLocations';
import { DeliveryProcess } from './DeliveryProcess';

type ShopProps = {
  onAddToCart: (product: Product) => void;
  onNavigate?: (page: 'privacy' | 'terms' | 'ordering') => void;
};

const products: Product[] = [
  {
    id: '1',
    name: 'Matcha Roll Cake',
    nameJa: '抹茶ロールケーキ',
    description: 'Light and fluffy sponge cake filled with premium matcha cream',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1597334131807-b7031c30e2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hdGNoYSUyMGNha2V8ZW58MXx8fHwxNzYzOTA2MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '400g',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1597334131807-b7031c30e2fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hdGNoYSUyMGNha2V8ZW58MXx8fHwxNzYzOTA2MzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1582716401301-b2407dc7563d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxtYXRjaGElMjBjYWtlfGVufDB8fHx8MTczMTc4NzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
      'https://images.unsplash.com/photo-1563805042-7684c019e1cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwzfHxtYXRjaGElMjBjYWtlfGVufDB8fHx8MTczMTc4NzAwMXww&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Premium matcha powder', 'Fresh eggs', 'Flour', 'Sugar', 'Fresh cream', 'Milk'],
  },
  {
    id: '2',
    name: 'Strawberry Shortcake',
    nameJa: 'いちごショートケーキ',
    description: 'Classic Japanese-style shortcake with fresh strawberries and whipped cream',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc2hvcnRjYWtlfGVufDF8fHx8MTc2MzgyMTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '350g',
    images: [
      'https://images.unsplash.com/photo-1627308595171-d1b5d67129c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwc2hvcnRjYWtlfGVufDF8fHx8MTc2MzgyMTg2N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      'https://images.unsplash.com/photo-1565958011703-44f9829ba187?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxzdHJhd2JlcnJ5JTIwY2FrZXxlbnwwfHx8fDE3MzE3ODcwMDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    ],
    ingredients: ['Fresh strawberries', 'Sponge cake', 'Whipped cream', 'Sugar', 'Vanilla extract'],
  },
  {
    id: '3',
    name: 'Fluffy Cheesecake',
    nameJa: 'スフレチーズケーキ',
    description: 'Jiggly Japanese soufflé cheesecake with a delicate texture',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1614610555838-e20ebc8f3fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNoZWVzZWNha2V8ZW58MXx8fHwxNzYzOTA2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '500g',
    images: [
      'https://images.unsplash.com/photo-1614610555838-e20ebc8f3fd4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNoZWVzZWNha2V8ZW58MXx8fHwxNzYzOTA2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Cream cheese', 'Eggs', 'Sugar', 'Heavy cream', 'Lemon juice', 'Vanilla'],
  },
  {
    id: '4',
    name: 'Mochi Selection Box',
    nameJa: 'もち詰め合わせ',
    description: 'Assorted premium mochi with various seasonal fillings',
    price: 2400,
    image: 'https://images.unsplash.com/photo-1724052526175-4a7332bd10e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoaSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTA2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '300g (6 pieces)',
    images: [
      'https://images.unsplash.com/photo-1724052526175-4a7332bd10e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NoaSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTA2MzgyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Glutinous rice', 'Red bean paste', 'Matcha', 'Strawberry', 'Black sesame', 'Sugar'],
  },
  {
    id: '5',
    name: 'Dorayaki',
    nameJa: 'どら焼き',
    description: 'Traditional Japanese red bean pancake sandwich',
    price: 1800,
    image: 'https://images.unsplash.com/photo-1507010119292-e2f6d75e6903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGRvcmF5YWtpfGVufDF8fHx8MTc2MzkwNjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '200g (4 pieces)',
    images: [
      'https://images.unsplash.com/photo-1507010119292-e2f6d75e6903?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGRvcmF5YWtpfGVufDF8fHx8MTc2MzkwNjM4M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Flour', 'Eggs', 'Honey', 'Red bean paste', 'Baking powder', 'Mirin'],
  },
  {
    id: '6',
    name: 'Castella Cake',
    nameJa: 'カステラ',
    description: 'Honey-flavored Japanese sponge cake with a moist texture',
    price: 2600,
    image: 'https://images.unsplash.com/photo-1675956813348-3a10fcdaf4ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNhc3RlbGxhJTIwY2FrZXxlbnwxfHx8fDE3NjM5MDYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '450g',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1675956813348-3a10fcdaf4ed?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNhc3RlbGxhJTIwY2FrZXxlbnwxfHx8fDE3NjM5MDYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Eggs', 'Sugar', 'Flour', 'Honey', 'Mizuame syrup'],
  },
  {
    id: '7',
    name: 'Taiyaki',
    nameJa: 'たい焼き',
    description: 'Fish-shaped cake filled with sweet red bean paste',
    price: 1500,
    image: 'https://images.unsplash.com/photo-1758767055219-35755e2d76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWl5YWtpJTIwZmlzaCUyMGNha2V8ZW58MXx8fHwxNzYzOTA2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '150g (3 pieces)',
    images: [
      'https://images.unsplash.com/photo-1758767055219-35755e2d76bf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0YWl5YWtpJTIwZmlzaCUyMGNha2V8ZW58MXx8fHwxNzYzOTA2Mzg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Flour', 'Red bean paste', 'Eggs', 'Sugar', 'Baking powder'],
  },
  {
    id: '8',
    name: 'Fruit Tart',
    nameJa: 'フルーツタルト',
    description: 'Elegant tart topped with seasonal Japanese fruits',
    price: 3800,
    image: 'https://images.unsplash.com/photo-1743294856703-b8d4ec96454e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZydWl0JTIwdGFydHxlbnwxfHx8fDE3NjM5MDYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'seasonal',
    weight: '380g',
    images: [
      'https://images.unsplash.com/photo-1743294856703-b8d4ec96454e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGZydWl0JTIwdGFydHxlbnwxfHx8fDE3NjM5MDYzODZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Tart shell', 'Custard cream', 'Fresh strawberries', 'Kiwi', 'Grapes', 'Peaches', 'Apricot glaze'],
  },
  {
    id: '9',
    name: 'Premium Gift Box',
    nameJa: 'プレミアムギフト',
    description: 'Luxury assortment of our finest Japanese sweets',
    price: 5800,
    image: 'https://images.unsplash.com/photo-1708861619016-25ed5586687b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGdpZnQlMjBib3glMjBzd2VldHN8ZW58MXx8fHwxNzYzOTE3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'gifts',
    weight: '800g',
    images: [
      'https://images.unsplash.com/photo-1708861619016-25ed5586687b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGdpZnQlMjBib3glMjBzd2VldHN8ZW58MXx8fHwxNzYzOTE3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Assorted mochi', 'Traditional wagashi', 'Dorayaki', 'Castella', 'Seasonal sweets'],
  },
  {
    id: '10',
    name: 'Matcha Latte',
    nameJa: '抹茶ラテ',
    description: 'Premium ceremonial matcha with steamed milk',
    price: 680,
    image: 'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZXxlbnwxfHx8fDE3NjM5MDk4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'drinks',
    weight: '350ml',
    images: [
      'https://images.unsplash.com/photo-1515823064-d6e0c04616a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjBsYXR0ZXxlbnwxfHx8fDE3NjM5MDk4MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Ceremonial grade matcha', 'Steamed milk', 'Sugar (optional)'],
  },
  {
    id: '11',
    name: 'Mont Blanc',
    nameJa: 'モンブラン',
    description: 'Delicate chestnut cream dessert topped with whipped cream',
    price: 3400,
    image: 'https://images.unsplash.com/photo-1759503262428-f4ab8a0ddd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1vbnQlMjBibGFuYyUyMGNha2V8ZW58MXx8fHwxNzYzOTExNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '320g',
    images: [
      'https://images.unsplash.com/photo-1759503262428-f4ab8a0ddd60?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1vbnQlMjBibGFuYyUyMGNha2V8ZW58MXx8fHwxNzYzOTExNTI2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Chestnut cream', 'Meringue', 'Whipped cream', 'Sponge cake', 'Sugar', 'Rum'],
  },
  {
    id: '12',
    name: 'Mille Crepe Cake',
    nameJa: 'ミルクレープ',
    description: 'Twenty layers of delicate crepes with fresh cream filling',
    price: 4200,
    image: 'https://images.unsplash.com/photo-1722191713510-8dc43416ffac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1pbGxlJTIwY3JlcGUlMjBjYWtlfGVufDF8fHx8MTc2MzkxMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '550g',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1722191713510-8dc43416ffac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1pbGxlJTIwY3JlcGUlMjBjYWtlfGVufDF8fHx8MTc2MzkxMTUyN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Crepe batter', 'Fresh cream', 'Eggs', 'Milk', 'Sugar', 'Vanilla', 'Butter'],
  },
  {
    id: '13',
    name: 'Cream Puff',
    nameJa: 'シュークリーム',
    description: 'Light choux pastry filled with smooth vanilla custard cream',
    price: 1200,
    image: 'https://images.unsplash.com/photo-1723301121031-93a3e841b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNyZWFtJTIwcHVmZiUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTExNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '180g (4 pieces)',
    images: [
      'https://images.unsplash.com/photo-1723301121031-93a3e841b805?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNyZWFtJTIwcHVmZiUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTExNTI4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Choux pastry', 'Custard cream', 'Eggs', 'Milk', 'Vanilla', 'Sugar', 'Butter'],
  },
  {
    id: '14',
    name: 'Dark Chocolate Cake',
    nameJa: 'ダークチョコレートケーキ',
    description: 'Rich Belgian chocolate cake with velvety ganache and a hint of espresso for depth',
    price: 4500,
    image: 'https://images.unsplash.com/photo-1646797419118-105060f61434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNob2NvbGF0ZSUyMGNha2V8ZW58MXx8fHwxNzYzOTExNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '600g',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1646797419118-105060f61434?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGNob2NvbGF0ZSUyMGNha2V8ZW58MXx8fHwxNzYzOTExNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Dark chocolate', 'Cocoa powder', 'Eggs', 'Sugar', 'Butter', 'Espresso', 'Heavy cream'],
  },
  {
    id: '15',
    name: 'Matcha Tiramisu',
    nameJa: '抹茶ティラミス',
    description: 'Japanese twist on classic tiramisu with layers of matcha-soaked ladyfingers and mascarpone',
    price: 3900,
    image: 'https://images.unsplash.com/photo-1706350091276-ba994c35cd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRpcmFtaXN1JTIwZGVzc2VydHxlbnwxfHx8fDE3NjM5MTE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
    weight: '520g',
    featured: true,
    images: [
      'https://images.unsplash.com/photo-1706350091276-ba994c35cd99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHRpcmFtaXN1JTIwZGVzc2VydHxlbnwxfHx8fDE3NjM5MTE2MDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Mascarpone cheese', 'Ladyfinger cookies', 'Matcha powder', 'Eggs', 'Sugar', 'Heavy cream'],
  },
  {
    id: '16',
    name: 'Anmitsu',
    nameJa: 'あんみつ',
    description: 'Traditional Japanese dessert with agar jelly, sweet red bean paste, and seasonal fruits',
    price: 1900,
    image: 'https://images.unsplash.com/photo-1758779527956-0da4cd6ca77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFubWl0c3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzkxMjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '280g',
    images: [
      'https://images.unsplash.com/photo-1758779527956-0da4cd6ca77d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGFubWl0c3UlMjBkZXNzZXJ0fGVufDF8fHx8MTc2MzkxMjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Agar jelly', 'Red bean paste', 'Shiratama mochi', 'Fresh fruits', 'Brown sugar syrup', 'Matcha ice cream'],
  },
  {
    id: '17',
    name: 'Hojicha Latte',
    nameJa: 'ほうじ茶ラテ',
    description: 'Roasted green tea latte with a warm, nutty flavor and creamy milk',
    price: 720,
    image: 'https://images.unsplash.com/photo-1729259586624-fbff74362a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGhvamljaGElMjB0ZWF8ZW58MXx8fHwxNzYzOTEyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'drinks',
    weight: '350ml',
    images: [
      'https://images.unsplash.com/photo-1729259586624-fbff74362a5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGhvamljaGElMjB0ZWF8ZW58MXx8fHwxNzYzOTEyNTU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Roasted hojicha tea', 'Steamed milk', 'Sugar (optional)'],
  },
  {
    id: '18',
    name: 'Melon Pan',
    nameJa: 'メロンパン',
    description: 'Sweet bread with a crispy cookie crust resembling a melon',
    price: 950,
    image: 'https://images.unsplash.com/photo-1763469866616-2d7d7198c46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1lbG9uJTIwYnJlYWR8ZW58MXx8fHwxNzYzOTEyNTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '120g',
    images: [
      'https://images.unsplash.com/photo-1763469866616-2d7d7198c46c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1lbG9uJTIwYnJlYWR8ZW58MXx8fHwxNzYzOTEyNTU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Bread dough', 'Cookie crust', 'Sugar', 'Butter', 'Eggs', 'Vanilla extract'],
  },
  {
    id: '19',
    name: 'Zenzai',
    nameJa: '善哉',
    description: 'Warm red bean soup with chewy mochi, perfect for cold days',
    price: 1600,
    image: 'https://images.unsplash.com/photo-1669484113431-afe24c770ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJlZCUyMGJlYW4lMjBzb3VwfGVufDF8fHx8MTc2MzkxMjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
    weight: '300ml',
    images: [
      'https://images.unsplash.com/photo-1669484113431-afe24c770ad6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHJlZCUyMGJlYW4lMjBzb3VwfGVufDF8fHx8MTc2MzkxMjU1Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    ],
    ingredients: ['Sweet red beans', 'Mochi', 'Sugar', 'Salt', 'Water'],
  },
];

const carouselItemsLeft: (Product & { bgImage: string })[] = [
  {
    id: '1',
    name: 'Matcha Delight',
    nameJa: '抹茶の喜び',
    description: 'Premium matcha dessert made with finest Uji matcha powder. Perfectly balanced sweetness with rich, earthy flavors that melt in your mouth.',
    price: 3200,
    image: 'https://images.unsplash.com/photo-1763469024755-a19c6a13ef11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hdGNoYSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTA3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1763469024755-a19c6a13ef11?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1hdGNoYSUyMGRlc3NlcnR8ZW58MXx8fHwxNzYzOTA3Njg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
  },
  {
    id: '4',
    name: 'Premium Mochi Collection',
    nameJa: 'プレミアムもち',
    description: 'Handcrafted traditional mochi filled with seasonal ingredients. Soft, chewy texture with authentic Japanese flavors passed down through generations.',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1759928255044-0996087c10ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1vY2hpJTIwc3dlZXRzfGVufDF8fHx8MTc2MzkwNzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1759928255044-0996087c10ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMG1vY2hpJTIwc3dlZXRzfGVufDF8fHx8MTc2MzkwNzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'traditional',
  },
  {
    id: '2',
    name: 'Strawberry Dream Cake',
    nameJa: 'いちごドリームケーキ',
    description: 'Delicate layers of fluffy sponge cake with fresh strawberries and silky cream. A perfect harmony of sweetness and elegance in every bite.',
    price: 3500,
    image: 'https://images.unsplash.com/photo-1722191713510-8dc43416ffac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0cmF3YmVycnklMjBjYWtlfGVufDF8fHx8MTc2MzkwNzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    bgImage: 'https://images.unsplash.com/photo-1722191713510-8dc43416ffac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0cmF3YmVycnklMjBjYWtlfGVufDF8fHx8MTc2MzkwNzY4Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    category: 'cakes',
  },
];

const carouselItemsRight: (Product & { bgImage: string })[] = [
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

export function Shop({ onAddToCart, onNavigate }: ShopProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [notification, setNotification] = useState<string>('');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const categories = [
    { id: 'all', name: 'Всі товари', nameJa: 'すべて', icon: Sparkles, color: 'from-purple-400 to-pink-400', image: 'https://images.unsplash.com/photo-1752962640187-cfd373f4f553?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGRlc3NlcnRzJTIwdmFyaWV0eXxlbnwxfHx8fDE3NjM5MDkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 'cakes', name: 'Торти', nameJa: 'ケーキ', icon: Cake, color: 'from-pink-400 to-rose-400', image: 'https://images.unsplash.com/photo-1553739340-4043e61e457a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMGRlc3NlcnRzJTIwY2FrZXN8ZW58MXx8fHwxNzYzOTA5MDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 'traditional', name: 'Традиційні', nameJa: '和菓子', icon: Flower2, color: 'from-amber-400 to-orange-400', image: 'https://images.unsplash.com/photo-1627308593413-3a3e02108920?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmFkaXRpb25hbCUyMGphcGFuZXNlJTIwc3dlZXRzfGVufDF8fHx8MTc2MzkwOTAwOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 'seasonal', name: 'Сезонні', nameJa: '季節限定', icon: Sparkles, color: 'from-green-400 to-teal-400', image: 'https://images.unsplash.com/photo-1677225199893-295877b2d12e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25hbCUyMGZydWl0c3xlbnwxfHx8fDE3NjM5MDkwMTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 'gifts', name: 'Подарунки', nameJa: 'ギフト', icon: Gift, color: 'from-blue-400 to-indigo-400', image: 'https://images.unsplash.com/photo-1759563871375-d5b140f6646e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnaWZ0JTIwYm94JTIwZWxlZ2FudHxlbnwxfHx8fDE3NjM4OTI4MDJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
    { id: 'drinks', name: 'Напої', nameJa: '飲み物', icon: Coffee, color: 'from-emerald-400 to-green-400', image: 'https://images.unsplash.com/photo-1722478347120-9cf07a219d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRjaGElMjB0ZWElMjBkcmlua3xlbnwxfHx8fDE3NjM5MDkwMTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral' },
  ];

  const filteredProducts =
    selectedCategory === 'all'
      ? products
      : products.filter(p => p.category === selectedCategory);

  const handleAddToCart = (product: Product) => {
    onAddToCart(product);
    setNotification(`${product.name} додано до кошика!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleBuyNow = () => {
    // Add first cake to cart when Buy Now is clicked
    const specialOffer = products[0];
    if (specialOffer) {
      handleAddToCart(specialOffer);
    }
  };

  const handleCarouselAddToCart = (product: Product, quantity: number) => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product);
    }
    setNotification(`Додано ${quantity}x ${product.name} до кошика!`);
    setTimeout(() => setNotification(''), 3000);
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const handleModalClose = () => {
    setSelectedProduct(null);
  };

  return (
    <div>
      {/* Special Offers Banner */}
      <OfferBanner onBuyNow={handleBuyNow} />

      {/* Delivery Locations */}
      <DeliveryLocations />

      {/* Food Carousel - Left Aligned */}
      <FoodCarouselReusable 
        items={carouselItemsLeft}
        onAddToCart={handleCarouselAddToCart}
        descriptionPosition="left"
      />

      {/* Shop Content */}
      <div id="products-section" className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl mb-2 text-gray-900">Меню</h1>
            <p className="text-xl text-gray-600">商品一覧</p>
          </div>

          {/* Category Filter */}
          <div className="flex justify-center gap-6 mb-16 flex-wrap px-4">
            {categories.map(category => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="flex flex-col items-center gap-3 group transition-all duration-300 hover:scale-105"
                >
                  {/* Circle with Icon */}
                  <div className="relative">
                    {/* Outer decorative circle */}
                    <div 
                      className={`absolute inset-0 rounded-full transition-all duration-300 ${
                        isSelected 
                          ? 'scale-110 opacity-30' 
                          : 'scale-100 opacity-0 group-hover:opacity-20 group-hover:scale-110'
                      } bg-gradient-to-br ${category.color}`}
                    />
                    
                    {/* Main circle */}
                    <div 
                      className={`relative w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 overflow-hidden ${
                        isSelected
                          ? 'shadow-lg scale-105'
                          : 'bg-white border-2 border-gray-200 group-hover:border-transparent group-hover:bg-gradient-to-br ' + category.color
                      }`}
                    >
                      {/* Background Image for Active State */}
                      {isSelected && (
                        <div 
                          className="absolute inset-0 bg-cover bg-center animate-move-bg"
                          style={{ backgroundImage: `url(${category.image})` }}
                        />
                      )}
                      
                      {/* Dark overlay for active state to make icon visible */}
                      {isSelected && (
                        <div className="absolute inset-0 bg-black/40" />
                      )}
                      
                      <Icon 
                        className={`w-8 h-8 transition-all duration-300 relative z-10 ${
                          isSelected 
                            ? 'text-white drop-shadow-lg' 
                            : 'text-gray-600 group-hover:text-white'
                        }`} 
                      />
                    </div>
                    
                    {/* Animated ring on selection */}
                    {isSelected && (
                      <div className="absolute inset-0 rounded-full border-2 border-transparent animate-ping" 
                        style={{ 
                          borderImage: `linear-gradient(to bottom right, ${category.color}) 1`,
                          animationDuration: '2s'
                        }}
                      />
                    )}
                  </div>
                  
                  {/* Text */}
                  <div className="text-center">
                    <div className={`transition-colors duration-300 ${
                      isSelected ? 'text-gray-900' : 'text-gray-700'
                    }`}>
                      {category.name}
                    </div>
                    <div className={`text-sm transition-colors duration-300 ${
                      isSelected ? 'text-gray-600' : 'text-gray-500'
                    }`}>
                      {category.nameJa}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredProducts.map(product => (
              <div
                key={product.id}
                className={product.featured ? 'md:col-span-2' : 'col-span-1'}
              >
                <ProductCard
                  product={product}
                  onAddToCart={(prod, qty) => {
                    for (let i = 0; i < qty; i++) {
                      onAddToCart(prod);
                    }
                    setNotification(`Додано ${qty}x ${prod.name} до кошика!`);
                    setTimeout(() => setNotification(''), 3000);
                  }}
                  onPreview={handleProductClick}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Notification Toast */}
        {notification && (
          <div className="fixed bottom-8 right-8 bg-green-600 text-white px-6 py-4 rounded-lg shadow-lg animate-fade-in">
            {notification}
          </div>
        )}
      </div>

      {/* Food Carousel - Right Aligned (After Menu) */}
      <FoodCarouselReusable 
        items={carouselItemsRight}
        onAddToCart={handleCarouselAddToCart}
        descriptionPosition="right"
      />

      {/* Delivery Process Section */}
      <DeliveryProcess />

      {/* Product Modal */}
      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onAddToCart={handleAddToCart}
          onClose={handleModalClose}
        />
      )}

      {/* Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}