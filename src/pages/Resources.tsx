import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { FileText, Video, Download } from 'lucide-react';

export default function Resources() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl text-indigo-900 mb-4">Industry Insights & Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Stay informed with market trends, regulatory updates, and business tools.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Resource Card 1 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-blue-50 text-blue-600 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-400">PDF Guide</span>
            </div>
            <h3 className="font-bold text-lg text-indigo-900 mb-2 group-hover:text-teal-600">New EU Cosmetic Regulation</h3>
            <p className="text-sm text-gray-500 mb-4">What wholesalers need to know for 2026 compliance updates.</p>
            <div className="flex items-center text-sm text-teal-600 font-medium">
              Download <Download className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Resource Card 2 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-purple-50 text-purple-600 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-400">Webinar</span>
            </div>
            <h3 className="font-bold text-lg text-indigo-900 mb-2 group-hover:text-teal-600">Merchandising Beauty Products</h3>
            <p className="text-sm text-gray-500 mb-4">Tips from top salon owners on increasing retail turn.</p>
            <div className="flex items-center text-sm text-teal-600 font-medium">
              Watch Now <Download className="w-4 h-4 ml-2" />
            </div>
          </div>

          {/* Resource Card 3 */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-all group cursor-pointer">
            <div className="flex items-center justify-between mb-4">
              <div className="p-3 bg-green-50 text-green-600 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                <FileText className="w-6 h-6" />
              </div>
              <span className="text-xs text-gray-400">Excel Sheet</span>
            </div>
            <h3 className="font-bold text-lg text-indigo-900 mb-2 group-hover:text-teal-600">Wholesale Pricing Calculator</h3>
            <p className="text-sm text-gray-500 mb-4">Calculate margins and volume discounts easily.</p>
            <div className="flex items-center text-sm text-teal-600 font-medium">
              Download <Download className="w-4 h-4 ml-2" />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
