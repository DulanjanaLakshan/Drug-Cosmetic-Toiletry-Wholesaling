import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';

// Mock Data (Subset of Category data)
const BRAND_PRODUCTS = [
  {
    id: '1',
    name: 'La Roche-Posay Toleriane Double Repair Face Moisturizer',
    brand: 'La Roche-Posay',
    sku: 'LRP-33821',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 78.00,
    unitPrice: 13.00,
    msrp: 24.99,
    stock: 2450,
    moq: 2,
    packSize: 'Case of 6',
    badges: ['Bestseller', 'Dermatologist Favorite']
  },
  {
    id: '7',
    name: 'La Roche-Posay Anthelios Melt-in Milk Sunscreen SPF 60',
    brand: 'La Roche-Posay',
    sku: 'LRP-55219',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 165.00,
    unitPrice: 27.50,
    msrp: 36.99,
    stock: 1200,
    moq: 2,
    packSize: 'Case of 6',
    badges: ['Top Rated']
  },
  {
    id: '8',
    name: 'La Roche-Posay Effaclar Duo Dual Action Acne Treatment',
    brand: 'La Roche-Posay',
    sku: 'LRP-88210',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 138.00,
    unitPrice: 23.00,
    msrp: 30.99,
    stock: 850,
    moq: 2,
    packSize: 'Case of 6',
    badges: []
  }
];

export default function Brand() {
  return (
    <Layout>
      {/* Brand Hero */}
      <div className="relative bg-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center opacity-20" />
        <div className="container mx-auto px-4 py-24 relative z-10 text-center">
          <h1 className="font-display font-bold text-5xl md:text-7xl mb-6">La Roche-Posay</h1>
          <p className="font-subhead text-xl text-gray-200 max-w-2xl mx-auto mb-8">
            Recommended by 90,000 dermatologists worldwide, La Roche-Posay offers unique daily skincare developed using a strict formulation charter and stringent clinical testing.
          </p>
          <div className="flex justify-center gap-8 text-sm font-mono text-teal-400">
            <span>267 Products</span>
            <span>•</span>
            <span>Exclusive Distributor</span>
            <span>•</span>
            <span>French Formulation</span>
          </div>
        </div>
      </div>

      {/* Brand Nav */}
      <div className="border-b border-gray-200 bg-white sticky top-16 z-30">
        <div className="container mx-auto px-4 overflow-x-auto">
          <nav className="flex space-x-8 whitespace-nowrap">
            {['All Products', 'Face Care', 'Body Care', 'Sunscreen', 'Kids', 'Professional Sizes'].map((item, i) => (
              <button 
                key={item} 
                className={`py-4 text-sm font-medium border-b-2 transition-colors ${i === 0 ? 'border-teal-600 text-teal-600' : 'border-transparent text-gray-600 hover:text-indigo-900'}`}
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="font-display font-bold text-xl text-indigo-900 mb-4">Brand Story</h3>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              Founded in 1975, La Roche-Posay partners with dermatologists to deliver the most effective yet gentle skincare solutions for sensitive skin.
            </p>
            <Link to="#" className="text-teal-600 text-sm font-medium hover:underline">Read full story</Link>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
            <h3 className="font-display font-bold text-xl text-indigo-900 mb-4">Key Ingredients</h3>
            <ul className="text-gray-600 text-sm space-y-2">
              <li>• Thermal Spring Water</li>
              <li>• Selenium</li>
              <li>• Niacinamide</li>
              <li>• Shea Butter</li>
            </ul>
          </div>
          <div className="bg-indigo-900 p-8 rounded-xl text-white">
             <h3 className="font-display font-bold text-xl mb-4">Professional Exclusives</h3>
             <p className="text-indigo-200 text-sm mb-6">
               Access professional-size backbar products available only to licensed spas and dermatologists.
             </p>
             <Button variant="outline" className="border-white text-white hover:bg-white hover:text-indigo-900 w-full">View Pro Catalog</Button>
          </div>
        </div>

        <h2 className="font-display font-bold text-3xl text-indigo-900 mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BRAND_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
}
