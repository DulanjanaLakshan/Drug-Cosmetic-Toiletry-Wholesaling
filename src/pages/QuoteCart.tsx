import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Edit2, ArrowRight, FileText, Truck, CreditCard } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

export default function QuoteCart() {
  const [step, setStep] = useState(1);

  // Mock Cart Data
  const [cartItems, setCartItems] = useState([
    {
      id: '1',
      name: 'La Roche-Posay Toleriane Double Repair Face Moisturizer',
      sku: 'LRP-33821',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      caseQty: 6,
      unitsPerCase: 6,
      pricePerCase: 78.00,
    },
    {
      id: '2',
      name: 'CeraVe Hydrating Facial Cleanser',
      sku: 'CRV-22418',
      image: 'https://images.unsplash.com/photo-1556228720-19de77d79e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      caseQty: 12,
      unitsPerCase: 6,
      pricePerCase: 52.00,
    },
    {
      id: '3',
      name: 'Neutrogena Hydro Boost Water Gel',
      sku: 'NG-47382',
      image: 'https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80',
      caseQty: 30,
      unitsPerCase: 12,
      pricePerCase: 48.60,
    }
  ]);

  const subtotal = cartItems.reduce((acc, item) => acc + (item.pricePerCase * item.caseQty), 0);
  const volumeDiscount = subtotal > 2000 ? subtotal * 0.05 : 0;
  const total = subtotal - volumeDiscount;

  const removeItem = (id: string) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  return (
    <Layout>
      <div className="bg-gray-50 border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <h1 className="font-display font-bold text-3xl md:text-4xl text-indigo-900 mb-2">Request for Quote</h1>
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <span className={`flex items-center ${step >= 1 ? 'text-teal-600 font-bold' : ''}`}>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-2">1</span>
              Review Items
            </span>
            <span className="w-8 h-px bg-gray-300"></span>
            <span className={`flex items-center ${step >= 2 ? 'text-teal-600 font-bold' : ''}`}>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-2">2</span>
              Business Info
            </span>
            <span className="w-8 h-px bg-gray-300"></span>
            <span className={`flex items-center ${step >= 3 ? 'text-teal-600 font-bold' : ''}`}>
              <span className="w-6 h-6 rounded-full border-2 border-current flex items-center justify-center mr-2">3</span>
              Submit
            </span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {step === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50 text-gray-500 font-medium border-b border-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left">Product</th>
                      <th className="px-6 py-4 text-center">Quantity (Cases)</th>
                      <th className="px-6 py-4 text-right">Total</th>
                      <th className="px-6 py-4 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    {cartItems.map((item) => (
                      <tr key={item.id} className="group hover:bg-gray-50">
                        <td className="px-6 py-4">
                          <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gray-100 rounded-lg overflow-hidden flex-shrink-0">
                              <img src={item.image} alt={item.name} className="w-full h-full object-contain mix-blend-multiply p-1" />
                            </div>
                            <div>
                              <div className="font-medium text-indigo-900 line-clamp-1">{item.name}</div>
                              <div className="text-xs text-gray-500 font-mono mt-1">SKU: {item.sku}</div>
                              <div className="text-xs text-gray-500 mt-1">{item.unitsPerCase} units/case • ${item.pricePerCase.toFixed(2)}/case</div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-center">
                          <div className="inline-flex items-center border border-gray-300 rounded-lg">
                            <button className="px-3 py-1 hover:bg-gray-100">-</button>
                            <input type="text" value={item.caseQty} className="w-12 text-center font-mono focus:outline-none" readOnly />
                            <button className="px-3 py-1 hover:bg-gray-100">+</button>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right font-mono font-medium text-indigo-900">
                          ${(item.pricePerCase * item.caseQty).toFixed(2)}
                        </td>
                        <td className="px-6 py-4 text-right">
                          <button onClick={() => removeItem(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                            <Trash2 className="w-5 h-5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="flex justify-between items-center">
                <Link to="/products" className="text-teal-600 font-medium hover:underline flex items-center">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" /> Continue Shopping
                </Link>
                <Button variant="outline" size="sm">Update Quantities</Button>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl border border-gray-200 p-6 sticky top-24">
                <h3 className="font-display font-bold text-xl text-indigo-900 mb-6">Quote Summary</h3>
                
                <div className="space-y-4 text-sm mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.reduce((acc, i) => acc + i.caseQty, 0)} cases)</span>
                    <span className="font-mono">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-green-600">
                    <span>Volume Discount (5%)</span>
                    <span className="font-mono">-${volumeDiscount.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Estimated Shipping</span>
                    <span className="text-gray-400 italic">Calculated next step</span>
                  </div>
                  <div className="border-t border-gray-100 pt-4 flex justify-between items-end">
                    <span className="font-bold text-indigo-900">Estimated Total</span>
                    <span className="font-display font-bold text-2xl text-indigo-900">${total.toFixed(2)}</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg text-xs text-blue-800">
                    <p className="mb-2 font-bold flex items-center"><Truck className="w-3 h-3 mr-2" /> Free Shipping Eligible</p>
                    <p>Your order qualifies for free ground shipping to continental US.</p>
                  </div>
                  
                  <textarea 
                    placeholder="Add notes for your account manager (e.g. delivery constraints, sample requests)..."
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm focus:ring-1 focus:ring-teal-600 focus:border-teal-600"
                    rows={3}
                  ></textarea>

                  <Button onClick={() => setStep(2)} variant="primary" className="w-full">
                    Proceed to Business Info
                  </Button>
                  <Button variant="outline" className="w-full">Save Quote for Later</Button>
                </div>
              </div>
            </div>
          </div>
        )}

        {step === 2 && (
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl border border-gray-200 p-8">
              <h2 className="font-display font-bold text-2xl text-indigo-900 mb-6">Business Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Company Name</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="e.g. Westside Pharmacy" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Business Type</label>
                  <select className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600 bg-white">
                    <option>Retail Pharmacy</option>
                    <option>Hospital</option>
                    <option>Spa/Salon</option>
                    <option>Distributor</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Tax ID / VAT</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="XX-XXXXXXX" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Contact Person</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="Full Name" />
                </div>
              </div>

              <h2 className="font-display font-bold text-2xl text-indigo-900 mb-6">Shipping Address</h2>
              <div className="grid grid-cols-1 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">Street Address</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="123 Business Rd" />
                </div>
                <div className="grid grid-cols-3 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">City</label>
                    <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="City" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">State</label>
                    <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="State" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">Zip Code</label>
                    <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" placeholder="Zip" />
                  </div>
                </div>
              </div>

              <div className="flex justify-between pt-6 border-t border-gray-100">
                <Button variant="ghost" onClick={() => setStep(1)}>Back to Cart</Button>
                <Button variant="primary" onClick={() => setStep(3)}>Review & Submit</Button>
              </div>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-xl border border-gray-200 p-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-green-600" />
              </div>
              <h2 className="font-display font-bold text-3xl text-indigo-900 mb-4">Quote Request Received!</h2>
              <p className="text-gray-600 mb-8 max-w-md mx-auto">
                Thank you for your request. Your dedicated account manager, <strong>Sarah Chen</strong>, will review your quote and respond within 4 hours.
              </p>
              
              <div className="bg-gray-50 rounded-lg p-6 mb-8 text-left max-w-sm mx-auto">
                <div className="flex justify-between mb-2">
                  <span className="text-gray-500 text-sm">Quote Reference:</span>
                  <span className="font-mono font-bold text-indigo-900">Q-2026-38472</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 text-sm">Estimated Total:</span>
                  <span className="font-mono font-bold text-indigo-900">${total.toFixed(2)}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link to="/products">
                  <Button variant="primary">Continue Shopping</Button>
                </Link>
                <Link to="/account">
                  <Button variant="outline">View in Dashboard</Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}
