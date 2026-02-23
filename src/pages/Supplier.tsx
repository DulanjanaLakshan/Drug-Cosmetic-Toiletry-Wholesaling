import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';
import { Globe, Truck, BarChart } from 'lucide-react';

export default function Supplier() {
  return (
    <Layout>
      <div className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Bring Your Products to the World</h1>
          <p className="font-subhead text-xl text-gray-200 max-w-3xl mx-auto">
            Join 850+ manufacturers who trust us to distribute their brands to thousands of businesses globally.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-24">
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Globe className="w-8 h-8 text-indigo-900" />
            </div>
            <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Global Reach</h3>
            <p className="text-gray-600 leading-relaxed">Access to 15,000+ business customers across 40 countries.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-indigo-900" />
            </div>
            <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Best-in-Class Logistics</h3>
            <p className="text-gray-600 leading-relaxed">Temperature-controlled storage, real-time inventory, 24hr shipping.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart className="w-8 h-8 text-indigo-900" />
            </div>
            <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Category Expertise</h3>
            <p className="text-gray-600 leading-relaxed">Dedicated category managers who understand your market.</p>
          </div>
        </div>

        <div className="max-w-3xl mx-auto bg-white rounded-xl border border-gray-200 p-8 shadow-sm">
          <h2 className="font-display font-bold text-2xl text-indigo-900 mb-6 text-center">Supplier Application</h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                <input type="url" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Primary Product Category</label>
              <select className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600 bg-white">
                <option>Pharmaceuticals</option>
                <option>Cosmetics & Beauty</option>
                <option>Personal Care</option>
                <option>Medical Supplies</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your products</label>
              <textarea rows={4} className="w-full p-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600"></textarea>
            </div>
            <Button variant="primary" className="w-full">Submit Application</Button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
