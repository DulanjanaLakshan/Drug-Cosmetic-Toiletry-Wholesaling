import React from 'react';
import { Link } from 'react-router-dom';
import { Package, FileText, TrendingUp, AlertCircle, Clock, ChevronRight, Download, CreditCard } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

export default function Dashboard() {
  return (
    <Layout>
      <div className="bg-indigo-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h1 className="font-display font-bold text-3xl md:text-4xl mb-2">Welcome back, Westside Pharmacy</h1>
              <p className="text-indigo-200 text-sm">Account ID: WP-88291 • Tier: Gold Partner</p>
            </div>
            <div className="flex items-center gap-4 bg-white/10 p-4 rounded-lg backdrop-blur-sm">
              <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center font-bold text-white">SC</div>
              <div>
                <div className="text-xs text-indigo-200 uppercase tracking-wider">Your Account Manager</div>
                <div className="font-bold">Sarah Chen</div>
              </div>
              <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-indigo-900 ml-4">Contact</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-8">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><FileText className="w-6 h-6" /></div>
              <span className="text-xs font-medium text-red-500 bg-red-50 px-2 py-1 rounded">-1 vs last week</span>
            </div>
            <div className="text-3xl font-display font-bold text-indigo-900 mb-1">3</div>
            <div className="text-sm text-gray-500">Open Quotes</div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-orange-50 rounded-lg text-orange-600"><Package className="w-6 h-6" /></div>
              <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">Processing</span>
            </div>
            <div className="text-3xl font-display font-bold text-indigo-900 mb-1">2</div>
            <div className="text-sm text-gray-500">Pending Orders</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-green-50 rounded-lg text-green-600"><TrendingUp className="w-6 h-6" /></div>
              <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">+12% YTD</span>
            </div>
            <div className="text-3xl font-display font-bold text-indigo-900 mb-1">$124k</div>
            <div className="text-sm text-gray-500">YTD Spend</div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-purple-50 rounded-lg text-purple-600"><CreditCard className="w-6 h-6" /></div>
              <span className="text-xs font-medium text-gray-500 bg-gray-50 px-2 py-1 rounded">Net 30</span>
            </div>
            <div className="text-3xl font-display font-bold text-indigo-900 mb-1">$75k</div>
            <div className="text-sm text-gray-500">Available Credit</div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display font-bold text-xl text-indigo-900">Recent Activity</h2>
              <Link to="/activity" className="text-sm text-teal-600 hover:underline">View All</Link>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-blue-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-indigo-900">Quote Q-38472 Submitted</span>
                    <span className="text-xs text-gray-400">Feb 23, 2:30 PM</span>
                  </div>
                  <p className="text-sm text-gray-500">Request for 48 cases of skincare products. Awaiting review.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-green-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-indigo-900">Order #12345 Shipped</span>
                    <span className="text-xs text-gray-400">Feb 22, 9:15 AM</span>
                  </div>
                  <p className="text-sm text-gray-500">Via UPS Ground. Tracking: 1Z999...</p>
                  <div className="mt-2">
                    <Button size="sm" variant="outline" className="h-8 text-xs">Track Package</Button>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-2 h-2 mt-2 rounded-full bg-orange-500 flex-shrink-0"></div>
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-indigo-900">Low Stock Alert</span>
                    <span className="text-xs text-gray-400">Feb 20, 4:00 PM</span>
                  </div>
                  <p className="text-sm text-gray-500">15 items on your "Monthly Best Sellers" list are running low.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Reorder */}
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-display font-bold text-xl text-indigo-900">Quick Reorder</h2>
            </div>
            <div className="space-y-4">
              {[
                { name: 'LRP Toleriane Moisturizer', date: 'Feb 15', qty: '12 cases' },
                { name: 'CeraVe Hydrating Cleanser', date: 'Feb 15', qty: '24 cases' },
                { name: 'Neutrogena Hydro Boost', date: 'Jan 30', qty: '10 cases' },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div>
                    <div className="font-medium text-sm text-indigo-900 line-clamp-1">{item.name}</div>
                    <div className="text-xs text-gray-500">Last: {item.date} • {item.qty}</div>
                  </div>
                  <button className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-teal-600 hover:bg-teal-600 hover:text-white transition-colors">
                    +
                  </button>
                </div>
              ))}
              <Button variant="outline" className="w-full mt-4">View Order History</Button>
            </div>
          </div>
        </div>

        {/* Saved Lists */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-display font-bold text-xl text-indigo-900">Saved Lists</h2>
            <Button size="sm" variant="outline">Create New List</Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-900 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">24 items</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-900 mb-1 group-hover:text-teal-600">Monthly Best Sellers</h3>
              <p className="text-sm text-gray-500 mb-4">Last updated: 2 days ago</p>
              <div className="flex items-center text-sm text-teal-600 font-medium">
                View List <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
            
            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-900 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">12 items</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-900 mb-1 group-hover:text-teal-600">Q2 Promotional Items</h3>
              <p className="text-sm text-gray-500 mb-4">Last updated: 1 week ago</p>
              <div className="flex items-center text-sm text-teal-600 font-medium">
                View List <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 hover:border-teal-500 transition-colors cursor-pointer group">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-900 rounded-lg group-hover:bg-teal-50 group-hover:text-teal-600 transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <span className="text-xs text-gray-400">8 items</span>
              </div>
              <h3 className="font-bold text-lg text-indigo-900 mb-1 group-hover:text-teal-600">Backup Suppliers</h3>
              <p className="text-sm text-gray-500 mb-4">Last updated: 1 month ago</p>
              <div className="flex items-center text-sm text-teal-600 font-medium">
                View List <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
