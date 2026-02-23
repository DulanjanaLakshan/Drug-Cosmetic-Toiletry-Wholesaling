import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Star, Truck, ShieldCheck, FileText, Download, Share2, Heart, Minus, Plus, Check } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(2);
  const [activeTab, setActiveTab] = useState('description');

  // Mock Data
  const product = {
    name: 'La Roche-Posay Toleriane Double Repair Face Moisturizer',
    brand: 'La Roche-Posay',
    sku: 'LRP-33821-USA',
    price: 78.00,
    unitPrice: 13.00,
    packSize: 'Case of 6',
    stock: 2450,
    description: 'Toleriane Double Repair Face Moisturizer is formulated with dermatological ingredients: Ceramide-3, Niacinamide, Glycerin and La Roche-Posay Prebiotic Thermal Water. It helps repair skin barrier after 1 hour and provides up to 48-hour hydration.',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      'https://images.unsplash.com/photo-1556228720-19de77d79e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80'
    ]
  };

  return (
    <Layout>
      {/* Breadcrumbs */}
      <div className="bg-gray-50 border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <nav className="text-xs text-gray-500 font-mono uppercase tracking-wider">
            <Link to="/" className="hover:text-teal-600">Home</Link> / 
            <Link to="/products" className="hover:text-teal-600 mx-1">Cosmetics</Link> / 
            <Link to="/products/skincare" className="hover:text-teal-600 mx-1">Skincare</Link> / 
            <span className="text-indigo-900 mx-1 font-bold">{product.brand}</span>
          </nav>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left Column: Images */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-100 rounded-2xl p-8 flex items-center justify-center h-[500px] relative overflow-hidden group">
              <img 
                src={product.images[0]} 
                alt={product.name} 
                className="max-h-full max-w-full object-contain mix-blend-multiply transition-transform duration-500 group-hover:scale-110" 
              />
              <div className="absolute top-4 left-4">
                <span className="bg-teal-50 text-teal-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">Bestseller</span>
              </div>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button key={idx} className="bg-white border border-gray-100 rounded-lg p-2 h-24 flex items-center justify-center hover:border-teal-500 transition-colors">
                  <img src={img} alt="" className="max-h-full max-w-full object-contain mix-blend-multiply" />
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Details */}
          <div>
            <div className="mb-2 text-teal-600 font-bold text-sm uppercase tracking-wider">{product.brand}</div>
            <h1 className="font-display font-bold text-3xl md:text-4xl text-indigo-900 mb-4 leading-tight">
              {product.name}
            </h1>
            
            <div className="flex items-center gap-4 mb-6 text-sm">
              <div className="flex items-center text-gold-500">
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current" />
                <Star className="w-4 h-4 fill-current text-gray-300" />
                <span className="text-gray-500 ml-2 font-medium">4.8 (124 reviews)</span>
              </div>
              <span className="text-gray-300">|</span>
              <div className="font-mono text-gray-500">SKU: {product.sku}</div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 mb-8 border border-gray-100">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <div className="text-sm text-gray-500 mb-1">Wholesale Price</div>
                  <div className="font-mono font-bold text-3xl text-indigo-900">
                    ${product.price.toFixed(2)}
                    <span className="text-base font-normal text-gray-500 ml-2">/ {product.packSize}</span>
                  </div>
                  <div className="text-sm text-teal-600 font-medium mt-1">
                    ${product.unitPrice.toFixed(2)} per unit
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500 mb-1">Stock Status</div>
                  <div className="flex items-center text-green-600 font-medium">
                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
                    In Stock ({product.stock.toLocaleString()})
                  </div>
                </div>
              </div>

              {/* Volume Pricing Table */}
              <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-medium">
                    <tr>
                      <th className="px-4 py-2 text-left">Quantity</th>
                      <th className="px-4 py-2 text-right">Price/Case</th>
                      <th className="px-4 py-2 text-right">Savings</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-teal-50/30">
                      <td className="px-4 py-2 font-medium text-indigo-900">2-5 cases</td>
                      <td className="px-4 py-2 text-right font-mono">$78.00</td>
                      <td className="px-4 py-2 text-right text-gray-400">—</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">6-11 cases</td>
                      <td className="px-4 py-2 text-right font-mono">$74.10</td>
                      <td className="px-4 py-2 text-right text-gold-600 font-medium">Save 5%</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-2 text-gray-600">12+ cases</td>
                      <td className="px-4 py-2 text-right font-mono">$70.20</td>
                      <td className="px-4 py-2 text-right text-gold-600 font-medium">Save 10%</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center bg-white border border-gray-300 rounded-lg h-14 w-full sm:w-40 px-4">
                  <button onClick={() => setQuantity(Math.max(2, quantity - 1))} className="p-2 hover:text-teal-600"><Minus className="w-4 h-4" /></button>
                  <input 
                    type="number" 
                    value={quantity} 
                    onChange={(e) => setQuantity(parseInt(e.target.value) || 0)}
                    className="flex-1 text-center font-mono font-bold text-lg focus:outline-none"
                  />
                  <button onClick={() => setQuantity(quantity + 1)} className="p-2 hover:text-teal-600"><Plus className="w-4 h-4" /></button>
                </div>
                <Button variant="primary" size="lg" className="flex-1">
                  Add to Quote - ${(product.price * quantity).toFixed(2)}
                </Button>
                <Button variant="outline" size="icon" className="h-14 w-14 flex-shrink-0">
                  <Heart className="w-6 h-6" />
                </Button>
              </div>
              <div className="mt-4 text-xs text-gray-500 text-center flex items-center justify-center gap-4">
                <span className="flex items-center"><Truck className="w-3 h-3 mr-1" /> Ships in 24h</span>
                <span className="flex items-center"><ShieldCheck className="w-3 h-3 mr-1" /> GDP Compliant</span>
                <span className="flex items-center"><FileText className="w-3 h-3 mr-1" /> MSDS Available</span>
              </div>
            </div>

            <div className="prose prose-sm text-gray-600 max-w-none">
              <p>{product.description}</p>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="border-t border-gray-200 pt-12">
          <div className="flex border-b border-gray-200 mb-8 overflow-x-auto">
            {['Description', 'Specifications', 'Ingredients', 'Documentation'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab.toLowerCase())}
                className={`px-8 py-4 text-sm font-bold uppercase tracking-wider border-b-2 transition-colors whitespace-nowrap ${
                  activeTab === tab.toLowerCase() 
                    ? 'border-teal-600 text-teal-600' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="min-h-[300px]">
            {activeTab === 'description' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">Product Benefits</h3>
                  <ul className="space-y-3">
                    {['Restores healthy looking skin', 'Replenishes moisture for up to 48-hour hydration', 'Helps repair skin barrier after 1 hour', 'Non-comedogenic', 'Fragrance-free'].map((item, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="w-5 h-5 text-teal-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl mb-4">Recommended For</h3>
                  <p className="text-gray-600 mb-4">Normal to dry skin types. Suitable for sensitive skin.</p>
                  <h3 className="font-display font-bold text-xl mb-4">How to Use</h3>
                  <p className="text-gray-600">Apply to face and neck morning and/or evening. Its soft, oil-free texture is easily absorbed.</p>
                </div>
              </div>
            )}
            
            {activeTab === 'specifications' && (
              <div className="max-w-3xl">
                <table className="w-full text-sm text-left">
                  <tbody className="divide-y divide-gray-100">
                    <tr className="grid grid-cols-3 py-3">
                      <td className="font-medium text-gray-900">Brand</td>
                      <td className="col-span-2 text-gray-600">La Roche-Posay</td>
                    </tr>
                    <tr className="grid grid-cols-3 py-3">
                      <td className="font-medium text-gray-900">Product Type</td>
                      <td className="col-span-2 text-gray-600">Face Moisturizer</td>
                    </tr>
                    <tr className="grid grid-cols-3 py-3">
                      <td className="font-medium text-gray-900">Size</td>
                      <td className="col-span-2 text-gray-600">75ml / 2.5 fl oz</td>
                    </tr>
                    <tr className="grid grid-cols-3 py-3">
                      <td className="font-medium text-gray-900">Country of Origin</td>
                      <td className="col-span-2 text-gray-600">France</td>
                    </tr>
                    <tr className="grid grid-cols-3 py-3">
                      <td className="font-medium text-gray-900">Shelf Life</td>
                      <td className="col-span-2 text-gray-600">24 months</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            )}

            {activeTab === 'documentation' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {['Technical Data Sheet', 'Safety Data Sheet (MSDS)', 'Certificate of Analysis'].map((doc, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg p-6 flex items-center justify-between hover:border-teal-500 transition-colors cursor-pointer group">
                    <div className="flex items-center">
                      <FileText className="w-8 h-8 text-gray-400 group-hover:text-teal-600 mr-4" />
                      <span className="font-medium text-gray-900">{doc}</span>
                    </div>
                    <Download className="w-5 h-5 text-gray-400 group-hover:text-teal-600" />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}
