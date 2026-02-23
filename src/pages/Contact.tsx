import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Button } from '@/components/ui/Button';

export default function Contact() {
  return (
    <Layout>
      <div className="bg-gray-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-4xl text-indigo-900 mb-4">Contact Us</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our dedicated team is here to support your business 24/7.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl border border-gray-200 shadow-sm">
            <h2 className="font-display font-bold text-2xl text-indigo-900 mb-6">Send us a message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <input type="text" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <input type="email" className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
                <select className="w-full h-12 px-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600 bg-white">
                  <option>Sales Inquiry</option>
                  <option>Customer Support</option>
                  <option>Supplier Relations</option>
                  <option>Billing</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea rows={4} className="w-full p-4 border border-gray-200 rounded-lg focus:ring-1 focus:ring-teal-600"></textarea>
              </div>
              <Button variant="primary" className="w-full">Send Message</Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-4">Headquarters</h3>
              <p className="text-gray-600">
                123 Distribution Way<br />
                Industry City, CA 90001<br />
                United States
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-4">Phone Support</h3>
              <p className="text-gray-600 mb-2"><strong className="text-indigo-900">Toll Free:</strong> +1 (800) 555-1234</p>
              <p className="text-gray-600"><strong className="text-indigo-900">International:</strong> +1 (310) 555-6789</p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-4">Email</h3>
              <p className="text-gray-600 mb-2"><strong className="text-indigo-900">Sales:</strong> sales@unitedbeauty.com</p>
              <p className="text-gray-600"><strong className="text-indigo-900">Support:</strong> support@unitedbeauty.com</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
