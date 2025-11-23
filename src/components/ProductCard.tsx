import { useState } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Plus, Minus, Eye, ShoppingBag } from 'lucide-react';
import type { Product } from '../App';

type ProductCardProps = {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
  onPreview: (product: Product) => void;
};

export function ProductCard({ product, onAddToCart, onPreview }: ProductCardProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => Math.max(1, prev - 1));

  const handleBuy = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 group">
      {/* Image Container with Preview Button */}
      <div
        className={`relative overflow-hidden cursor-pointer ${
          product.featured ? 'h-[356px] w-full' : 'h-[276px] w-full'
        }`}
        onClick={() => onPreview(product)}
      >
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />

        {/* Gradient Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Card Content */}
      <div className="p-5 relative">
        {/* Title and Japanese Name with Preview Button for Featured Items */}
        <div className="flex items-start justify-between mb-1">
          <div className="flex-1">
            <h3 className="text-lg text-gray-900 group-hover:text-black transition-colors">
              {product.name}
            </h3>
          </div>
          {product.featured && (
            <button
              onClick={() => onPreview(product)}
              className="w-[100px] ml-3 bg-gray-100 text-gray-900 py-2 px-3 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-1 group/preview flex-shrink-0"
            >
              <Eye className="w-4 h-4 group-hover/preview:scale-110 transition-transform" />
              <span className="text-sm">Перегляд</span>
            </button>
          )}
        </div>
        <p className="text-sm text-gray-500 mb-3">{product.nameJa}</p>

        {/* Weight */}
        {product.weight && (
          <div className="text-sm text-gray-600 mb-3">
            {product.weight}
          </div>
        )}

        {/* Description */}
        <p className={`text-sm text-gray-600 mb-4 line-clamp-2 leading-relaxed overflow-hidden ${
          product.featured ? 'h-[80px]' : 'h-[50px]'
        }`}>
          {product.description}
        </p>

        {/* Price */}
        <div className="mb-4 flex items-center justify-between">
          <div className="text-2xl text-red-600">
            ¥{product.price.toLocaleString()}
          </div>
          {quantity > 1 && (
            <div className="text-xl text-red-700">
              Всього: ¥{(product.price * quantity).toLocaleString()}
            </div>
          )}
        </div>

        {/* Quantity Selector and Buy Button - Layout depends on featured */}
        {product.featured ? (
          /* Featured Layout: Quantity and Buy in one row */
          <div className="flex items-center gap-3 mb-0">
            <div className="flex items-center gap-2">
              <button
                onClick={handleDecrement}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <div className="w-12 text-center text-lg">{quantity}</div>
              <button
                onClick={handleIncrement}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>
            <button
              onClick={handleBuy}
              className="flex-1 bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg"
            >
              <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              <span>Купити зараз</span>
            </button>
          </div>
        ) : (
          /* Regular Layout: Quantity, Buy, and Preview stacked */
          <>
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={handleDecrement}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Minus className="w-4 h-4 text-gray-700" />
              </button>
              <div className="flex-1 text-center text-lg">{quantity}</div>
              <button
                onClick={handleIncrement}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
              >
                <Plus className="w-4 h-4 text-gray-700" />
              </button>
            </div>

            <button
              onClick={handleBuy}
              className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition-all duration-300 flex items-center justify-center gap-2 group/btn shadow-md hover:shadow-lg mb-3"
            >
              <ShoppingBag className="w-5 h-5 group-hover/btn:scale-110 transition-transform" />
              <span>Купити зараз</span>
            </button>

            <button
              onClick={() => onPreview(product)}
              className="w-full bg-gray-100 text-gray-900 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2 group/preview"
            >
              <Eye className="w-5 h-5 group-hover/preview:scale-110 transition-transform" />
              <span>Перегляд</span>
            </button>
          </>
        )}
      </div>
    </div>
  );
}