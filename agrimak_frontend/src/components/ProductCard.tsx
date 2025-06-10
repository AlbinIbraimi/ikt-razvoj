import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  const getAvailabilityColor = (availability: string) => {
    switch (availability) {
      case 'In Stock':
        return 'text-green-600 bg-green-100';
      case 'Low Stock':
        return 'text-yellow-600 bg-yellow-100';
      case 'Out of Stock':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const handleAddToCart = () => {
    if (product.availability !== 'Out of Stock') {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {product.featured && (
          <div className="absolute top-3 left-3 bg-emerald-600 text-white px-2 py-1 rounded-full text-xs font-medium flex items-center space-x-1">
            <Star className="h-3 w-3" />
            <span>Featured</span>
          </div>
        )}
        <div className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium ${getAvailabilityColor(product.availability)}`}>
          {product.availability}
        </div>
      </div>
      
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
            {product.name}
          </h3>
          <span className="text-sm text-gray-500 font-medium bg-gray-100 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex justify-between items-center">
          <div>
            <span className="text-2xl font-bold text-gray-900">
              ${product.price.toFixed(2)}
            </span>
            <span className="text-gray-500 text-sm ml-1">
              / {product.unit}
            </span>
          </div>
          
          <button
            onClick={handleAddToCart}
            disabled={product.availability === 'Out of Stock'}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
              product.availability === 'Out of Stock'
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-emerald-600 hover:bg-emerald-700 text-white hover:shadow-md'
            }`}
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="text-sm">
              {product.availability === 'Out of Stock' ? 'Unavailable' : 'Add to Cart'}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}