import React from 'react';
import { Layout } from '@/components/layout/Layout';
import { Globe, Users, Award, Truck } from 'lucide-react';

export default function About() {
  return (
    <Layout>
      <div className="bg-indigo-900 text-white py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display font-bold text-5xl md:text-6xl mb-6">Connecting Health & Beauty Worldwide</h1>
          <p className="font-subhead text-xl text-gray-200 max-w-3xl mx-auto">
            Since 1985, United Beauty & Health Supply has been the trusted partner for pharmacies, retailers, and professionals across the globe.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
              <Globe className="w-8 h-8" />
            </div>
            <div className="font-display font-bold text-4xl text-indigo-900 mb-2">40+</div>
            <div className="text-gray-500">Countries Served</div>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-gold-50 rounded-full flex items-center justify-center mx-auto mb-4 text-gold-600">
              <Users className="w-8 h-8" />
            </div>
            <div className="font-display font-bold text-4xl text-indigo-900 mb-2">15k+</div>
            <div className="text-gray-500">Active Customers</div>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Award className="w-8 h-8" />
            </div>
            <div className="font-display font-bold text-4xl text-indigo-900 mb-2">50k+</div>
            <div className="text-gray-500">Products in Stock</div>
          </div>
          <div className="text-center p-6 border border-gray-100 rounded-xl shadow-sm">
            <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-4 text-green-600">
              <Truck className="w-8 h-8" />
            </div>
            <div className="font-display font-bold text-4xl text-indigo-900 mb-2">12</div>
            <div className="text-gray-500">Distribution Centers</div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <h2 className="font-display font-bold text-3xl text-indigo-900 mb-8 text-center">Our History</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-300 before:to-transparent">
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-teal-500 text-gray-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                1985
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-gray-200 shadow-sm">
                <div className="font-bold text-gray-900">Founded</div>
                <div className="text-gray-500 text-sm">Started as a regional pharmacy wholesaler in Los Angeles.</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-teal-500 text-gray-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2005
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-gray-200 shadow-sm">
                <div className="font-bold text-gray-900">Global Expansion</div>
                <div className="text-gray-500 text-sm">Opened first international distribution center in Rotterdam.</div>
              </div>
            </div>
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-300 group-[.is-active]:bg-teal-500 text-gray-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                2026
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-4 rounded border border-gray-200 shadow-sm">
                <div className="font-bold text-gray-900">Digital Transformation</div>
                <div className="text-gray-500 text-sm">Launch of unified global B2B e-commerce platform.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
