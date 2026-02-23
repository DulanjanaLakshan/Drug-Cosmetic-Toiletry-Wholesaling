import React from 'react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';

export default function NotFound() {
  return (
    <Layout>
      <div className="min-h-[60vh] flex items-center justify-center bg-gray-50 px-4">
        <div className="max-w-2xl w-full text-center">
          <div className="mb-8 relative inline-block">
             {/* Simple illustration of empty shelf */}
             <div className="w-64 h-40 border-b-4 border-gray-300 mx-auto relative">
                <div className="absolute bottom-0 left-10 w-12 h-20 bg-gray-200 rounded-sm"></div>
                <div className="absolute bottom-0 right-20 w-16 h-12 bg-gray-200 rounded-sm"></div>
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white p-4 rounded-full shadow-lg border border-gray-100">
                   <span className="text-4xl">📦</span>
                </div>
             </div>
          </div>
          
          <h1 className="font-display font-bold text-6xl text-indigo-900 mb-4">404</h1>
          <h2 className="font-display font-bold text-2xl text-gray-700 mb-4">Product Not Found</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto">
            The SKU you're looking for isn't in our current catalog. But we have 50,000+ others.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-lg mx-auto">
            <Link to="/products" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all group text-left">
              <div className="font-bold text-indigo-900 group-hover:text-teal-600 mb-1">Browse Categories</div>
              <div className="text-sm text-gray-500">Explore our full catalog</div>
            </Link>
            <Link to="/contact" className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 hover:shadow-md transition-all group text-left">
              <div className="font-bold text-indigo-900 group-hover:text-teal-600 mb-1">Contact Support</div>
              <div className="text-sm text-gray-500">Let us help you find it</div>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
