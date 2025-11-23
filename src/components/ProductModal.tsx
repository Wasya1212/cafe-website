import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Plus, Minus, ShoppingCart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import type { Product } from '../App';

type ProductModalProps = {
  product: Product & { images?: string[]; ingredients?: string[] };
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
};

export function ProductModal({ product, onClose, onAddToCart }: ProductModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images || [product.image];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleAddToCart = () => {
    onAddToCart(product, quantity);
    setQuantity(1);
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1));

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Carousel */}
        <div className="relative aspect-video bg-gray-100 rounded-t-2xl overflow-hidden">
          <ImageWithFallback
            src={images[currentImageIndex]}
            alt={product.name}
            className="w-full h-full object-cover"
          />

          {images.length > 1 && (
            <>
              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all hover:scale-110"
              >
                <ChevronRight className="w-6 h-6" />
              </button>

              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex
                        ? 'bg-white w-6'
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-3xl mb-1 text-gray-900">{product.name}</h2>
          <p className="text-xl text-gray-500 mb-4">{product.nameJa}</p>

          {/* Weight */}
          {product.weight && (
            <div className="text-lg text-gray-600 mb-4">
              {product.weight}
            </div>
          )}

          {/* Price */}
          <div className="mb-6">
            <div className="text-3xl text-red-600">¥{product.price.toLocaleString()}</div>
            {quantity > 1 && (
              <div className="text-2xl text-red-700 mt-2">
                Total: ¥{(product.price * quantity).toLocaleString()}
              </div>
            )}
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg mb-2 text-gray-900">Description</h3>
            <p className="text-gray-700 leading-relaxed">{product.description}</p>
          </div>

          {/* Ingredients */}
          {product.ingredients && product.ingredients.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg mb-3 text-gray-900">Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Quantity and Add to Cart */}
          <div className="flex items-center gap-4 pt-4 border-t border-gray-200">
            {/* Quantity Selector */}
            <div className="flex items-center gap-3 bg-gray-100 rounded-lg px-4 py-2">
              <button
                onClick={decrementQuantity}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="text-xl w-8 text-center">{quantity}</span>
              <button
                onClick={incrementQuantity}
                className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white transition-colors"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="flex-1 bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-5 h-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}