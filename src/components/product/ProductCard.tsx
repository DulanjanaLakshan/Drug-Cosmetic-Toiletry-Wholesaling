import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye, Heart, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface Product {
  id: string;
  name: string;
  brand: string;
  sku: string;
  image: string;
  price: number;
  unitPrice: number;
  msrp: number;
  stock: number;
  moq: number;
  packSize: string;
  badges?: string[];
}

interface ProductCardProps {
  product: Product;
  viewMode?: 'grid' | 'list';
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, viewMode = 'grid' }) => {
  const {
    id,
    name,
    brand,
    sku,
    image,
    price,
    unitPrice,
    msrp,
    stock,
    moq,
    packSize,
    badges,
  } = product;

  if (viewMode === 'list') {
    return (
      <div className="group bg-white rounded-xl border border-gray-100 hover:border-teal-100 hover:shadow-md transition-all duration-300 p-4 flex items-center gap-6">
        <div className="relative w-24 h-24 flex-shrink-0 bg-gray-50 rounded-lg overflow-hidden">
          <img src={image} alt={name} className="w-full h-full object-contain p-2 mix-blend-multiply" />
        </div>
        
        <div className="flex-grow min-w-0">
          <div className="text-xs text-gray-500 mb-1">{brand}</div>
          <Link to={`/product/${id}`} className="font-medium text-indigo-900 hover:text-teal-600 transition-colors line-clamp-1 mb-1">
            {name}
          </Link>
          <div className="text-xs text-gray-500 font-mono">SKU: {sku} • {packSize}</div>
        </div>

        <div className="text-right min-w-[120px]">
          <div className="font-mono font-bold text-lg text-indigo-900">${price.toFixed(2)}</div>
          <div className="text-xs text-gray-500">${unitPrice.toFixed(2)}/unit</div>
        </div>

        <div className="min-w-[100px] text-sm">
          {stock > 0 ? (
            <div className="flex items-center text-green-600">
              <Check className="w-4 h-4 mr-1" />
              {stock.toLocaleString()} cases
            </div>
          ) : (
            <span className="text-red-500">Out of Stock</span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <Button variant="primary" size="sm" className="h-10 px-4">
            Add to Quote
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="group bg-white rounded-2xl border border-gray-100 hover:border-teal-100 hover:shadow-xl transition-all duration-300 flex flex-col h-full overflow-hidden relative">
      {/* Badges */}
      <div className="absolute top-3 left-3 z-10 flex flex-col gap-1">
        {badges?.map((badge) => (
          <span key={badge} className="px-2 py-1 bg-teal-50 text-teal-700 text-[10px] font-bold uppercase tracking-wider rounded-sm">
            {badge}
          </span>
        ))}
      </div>

      {/* Image */}
      <div className="relative h-64 bg-white p-6 flex items-center justify-center overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-105" 
        />
        
        {/* Quick Actions Overlay */}
        <div className="absolute inset-0 bg-indigo-900/0 group-hover:bg-indigo-900/5 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="flex gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-teal-600 hover:scale-110 transition-all">
              <Eye className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-700 hover:text-red-500 hover:scale-110 transition-all">
              <Heart className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-grow flex flex-col">
        <div className="text-xs font-medium text-gray-400 mb-1 uppercase tracking-wider">{brand}</div>
        <Link to={`/product/${id}`} className="font-subhead font-semibold text-indigo-900 hover:text-teal-600 transition-colors mb-2 line-clamp-2 min-h-[3rem]">
          {name}
        </Link>
        
        <div className="flex items-center justify-between text-xs text-gray-500 font-mono mb-4">
          <span>SKU: {sku}</span>
          <span>{packSize}</span>
        </div>

        <div className="mt-auto pt-4 border-t border-gray-50">
          <div className="flex items-end justify-between mb-3">
            <div>
              <div className="text-xs text-gray-400 line-through">MSRP: ${msrp.toFixed(2)}</div>
              <div className="font-mono font-bold text-xl text-indigo-900">${price.toFixed(2)}<span className="text-xs font-normal text-gray-500 ml-1">/case</span></div>
            </div>
            <div className="text-right">
              <div className="text-xs font-medium text-teal-600 bg-teal-50 px-2 py-1 rounded">
                ${unitPrice.toFixed(2)}/unit
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between gap-3">
            <div className="text-xs text-gray-500 flex items-center">
              <div className={`w-2 h-2 rounded-full mr-2 ${stock > 100 ? 'bg-green-500' : 'bg-orange-500'}`}></div>
              {stock > 100 ? 'In Stock' : 'Low Stock'}
            </div>
            <button className="flex-1 bg-indigo-900 text-white h-10 rounded-lg text-sm font-medium hover:bg-teal-600 transition-colors flex items-center justify-center gap-2 shadow-sm hover:shadow-md">
              <ShoppingCart className="w-4 h-4" />
              Add to Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
