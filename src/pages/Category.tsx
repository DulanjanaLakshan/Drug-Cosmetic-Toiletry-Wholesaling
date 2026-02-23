import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, ChevronDown, Grid, List, X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { ProductCard } from '@/components/product/ProductCard';
import { Button } from '@/components/ui/Button';

// Mock Data
const PRODUCTS = [
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
    id: '2',
    name: 'CeraVe Hydrating Facial Cleanser',
    brand: 'CeraVe',
    sku: 'CRV-22418',
    image: 'https://images.unsplash.com/photo-1556228720-19de77d79e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 52.00,
    unitPrice: 8.66,
    msrp: 16.99,
    stock: 1890,
    moq: 2,
    packSize: 'Case of 6',
    badges: ['Top Rated']
  },
  {
    id: '3',
    name: 'Neutrogena Hydro Boost Water Gel',
    brand: 'Neutrogena',
    sku: 'NG-47382',
    image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 48.60,
    unitPrice: 4.05,
    msrp: 8.99,
    stock: 1240,
    moq: 2,
    packSize: 'Case of 12',
    badges: ['New']
  },
  {
    id: '4',
    name: 'Olay Regenerist Micro-Sculpting Cream',
    brand: 'Olay',
    sku: 'OLY-99821',
    image: 'https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80',
    price: 145.00,
    unitPrice: 24.16,
    msrp: 38.99,
    stock: 560,
    moq: 1,
    packSize: 'Case of 6',
    badges: []
  },
  {
    id: '5',
    name: 'Vichy Minéral 89 Hyaluronic Acid Serum',
    brand: 'Vichy',
    sku: 'VIC-11234',
    image: 'https://images.unsplash.com/photo-1629198688000-71f23e745b6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1760&q=80',
    price: 89.00,
    unitPrice: 14.83,
    msrp: 29.99,
    stock: 890,
    moq: 2,
    packSize: 'Case of 6',
    badges: ['Luxury']
  },
  {
    id: '6',
    name: 'The Ordinary Niacinamide 10% + Zinc 1%',
    brand: 'The Ordinary',
    sku: 'ORD-55432',
    image: 'https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
    price: 36.00,
    unitPrice: 3.00,
    msrp: 6.00,
    stock: 5400,
    moq: 5,
    packSize: 'Case of 12',
    badges: ['Viral']
  }
];

export default function Category() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <Layout>
      {/* Category Header */}
      <div className="bg-pearl border-b border-gray-200">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <nav className="text-xs text-gray-500 mb-4 font-mono uppercase tracking-wider">
                <Link to="/" className="hover:text-teal-600">Home</Link> / 
                <Link to="/products" className="hover:text-teal-600 mx-1">Products</Link> / 
                <Link to="/products/cosmetics" className="hover:text-teal-600 mx-1">Cosmetics</Link> / 
                <span className="text-indigo-900 mx-1 font-bold">Skincare</span>
              </nav>
              <h1 className="font-display font-bold text-4xl md:text-5xl text-indigo-900 mb-2">Skincare Products</h1>
              <p className="font-subhead text-gray-600 max-w-2xl">
                Moisturizers, cleansers, treatments, and sun care from leading brands.
                Authorized distribution for pharmacy and retail.
              </p>
            </div>
            
            {/* Stats Bar */}
            <div className="flex gap-6 text-sm font-mono text-gray-600 bg-white/50 p-4 rounded-lg backdrop-blur-sm border border-white/60">
              <div>
                <span className="block text-xs text-gray-400 uppercase">Products</span>
                <span className="font-bold text-indigo-900">8,247</span>
              </div>
              <div>
                <span className="block text-xs text-gray-400 uppercase">Brands</span>
                <span className="font-bold text-indigo-900">124</span>
              </div>
              <div>
                <span className="block text-xs text-gray-400 uppercase">New</span>
                <span className="font-bold text-teal-600">143</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <aside className={`lg:w-64 flex-shrink-0 ${isFilterOpen ? 'block' : 'hidden lg:block'}`}>
            <div className="sticky top-24 space-y-8">
              <div className="flex items-center justify-between lg:hidden mb-4">
                <h3 className="font-bold text-lg">Filters</h3>
                <button onClick={() => setIsFilterOpen(false)}><X className="w-6 h-6" /></button>
              </div>

              {/* Filter Group: Brand */}
              <div>
                <h3 className="font-display font-bold text-lg mb-4 flex items-center justify-between">
                  Brand <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {['Neutrogena (845)', 'CeraVe (312)', 'La Roche-Posay (267)', 'Olay (445)', 'Cetaphil (189)'].map((brand) => (
                    <label key={brand} className="flex items-center text-sm text-gray-600 hover:text-teal-600 cursor-pointer group">
                      <input type="checkbox" className="mr-3 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                      <span className="group-hover:translate-x-1 transition-transform">{brand}</span>
                    </label>
                  ))}
                  <button className="text-xs text-teal-600 font-medium hover:underline mt-2">+ Show 50 more</button>
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Filter Group: Product Type */}
              <div>
                <h3 className="font-display font-bold text-lg mb-4 flex items-center justify-between">
                  Product Type <ChevronDown className="w-4 h-4" />
                </h3>
                <div className="space-y-2">
                  {['Moisturizers', 'Cleansers', 'Serums', 'Sunscreen', 'Face Masks'].map((type) => (
                    <label key={type} className="flex items-center text-sm text-gray-600 hover:text-teal-600 cursor-pointer group">
                      <input type="checkbox" className="mr-3 rounded border-gray-300 text-teal-600 focus:ring-teal-500" />
                      <span className="group-hover:translate-x-1 transition-transform">{type}</span>
                    </label>
                  ))}
                </div>
              </div>

              <hr className="border-gray-100" />

              {/* Filter Group: Price */}
              <div>
                <h3 className="font-display font-bold text-lg mb-4">Price Range</h3>
                <div className="space-y-2">
                  {['Under $50', '$50 - $100', '$100 - $250', '$250+'].map((range) => (
                    <label key={range} className="flex items-center text-sm text-gray-600 hover:text-teal-600 cursor-pointer group">
                      <input type="radio" name="price" className="mr-3 border-gray-300 text-teal-600 focus:ring-teal-500" />
                      <span className="group-hover:translate-x-1 transition-transform">{range}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-wrap items-center justify-between mb-6 gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
              <div className="flex items-center gap-4">
                <button 
                  className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-700"
                  onClick={() => setIsFilterOpen(true)}
                >
                  <Filter className="w-4 h-4" /> Filters
                </button>
                <span className="text-sm text-gray-500">Showing 1-6 of 8,247 products</span>
              </div>

              <div className="flex items-center gap-4">
                <select className="text-sm border-none bg-gray-50 rounded-lg px-4 py-2 focus:ring-1 focus:ring-teal-600 cursor-pointer">
                  <option>Sort by: Best Match</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest Arrivals</option>
                </select>

                <div className="flex items-center bg-gray-50 rounded-lg p-1">
                  <button 
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'grid' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow-sm text-teal-600' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Active Filters */}
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-teal-50 text-teal-700 border border-teal-100">
                In Stock Only <button className="ml-2 hover:text-teal-900"><X className="w-3 h-3" /></button>
              </span>
              <button className="text-xs text-gray-500 hover:text-teal-600 underline ml-2">Clear All</button>
            </div>

            {/* Product Grid */}
            <div className={viewMode === 'grid' ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6' : 'flex flex-col gap-4'}>
              {PRODUCTS.map((product) => (
                <ProductCard key={product.id} product={product} viewMode={viewMode} />
              ))}
            </div>

            {/* Pagination */}
            <div className="mt-12 flex justify-center">
              <nav className="flex items-center gap-2">
                <Button variant="outline" size="sm" disabled>Previous</Button>
                <Button variant="primary" size="sm" className="w-10 h-10 p-0">1</Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">2</Button>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">3</Button>
                <span className="text-gray-400">...</span>
                <Button variant="ghost" size="sm" className="w-10 h-10 p-0">344</Button>
                <Button variant="outline" size="sm">Next</Button>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
