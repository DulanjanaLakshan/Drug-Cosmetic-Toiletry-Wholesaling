import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Box, Truck, Factory, Store, Clock, Pill, Sparkles, Droplets, Scissors, Stethoscope, Leaf, Globe, User } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Layout } from '@/components/layout/Layout';

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[600px] flex items-center overflow-hidden bg-indigo-900 text-white">
        {/* Abstract Background - Simulating the video loop with CSS/Framer */}
        <div className="absolute inset-0 z-0 opacity-40">
           <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent z-10" />
           {/* Placeholder for video - using a pattern for now */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center animate-pulse-slow" />
        </div>

        <div className="container mx-auto px-4 relative z-20">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="font-display font-bold text-6xl md:text-7xl lg:text-8xl leading-[0.9] mb-6 uppercase">
                <span className="block text-white">Pharmaceuticals,</span>
                <span className="block text-white">Cosmetics,</span>
                <span className="block text-white">Personal Care.</span>
                <span className="block text-teal-400">One Source.</span>
              </h1>
              
              <p className="font-subhead text-lg md:text-xl text-gray-200 mb-10 max-w-2xl leading-relaxed">
                United Beauty & Health Supply: Global wholesale distribution to retailers, pharmacies, spas, and healthcare providers. 
                <span className="block mt-2 text-gold-400 font-mono text-sm">50,000+ products • 24-hour shipping • 40 countries</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="primary" size="lg" className="group">
                  Explore Products
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900">
                  Request Trade Account
                </Button>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Trust Badges Row - Absolute Bottom */}
        <div className="absolute bottom-0 left-0 right-0 bg-indigo-950/80 backdrop-blur-sm border-t border-white/10 py-6 z-20">
          <div className="container mx-auto px-4">
             <div className="flex flex-wrap justify-center md:justify-between items-center gap-6 text-xs md:text-sm font-mono text-gray-300 uppercase tracking-wider">
               <span className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>ISO 9001:2024 Certified</span>
               <span className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>GDP Compliant</span>
               <span className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>50,000+ Products</span>
               <span className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>40+ Countries</span>
               <span className="flex items-center"><span className="w-2 h-2 bg-teal-500 rounded-full mr-2"></span>24hr Shipping</span>
             </div>
          </div>
        </div>
      </section>

      {/* Live Inventory Counter */}
      <div className="bg-white border-b border-gray-100 py-4 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between overflow-x-auto no-scrollbar space-x-12 whitespace-nowrap text-sm font-mono text-gray-600">
            <div className="flex items-center space-x-3">
              <Box className="w-5 h-5 text-teal-600" />
              <span>Products in stock: <strong className="text-indigo-900">52,847</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <Truck className="w-5 h-5 text-teal-600" />
              <span>Orders shipped today: <strong className="text-indigo-900">1,284</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <Factory className="w-5 h-5 text-teal-600" />
              <span>Manufacturers: <strong className="text-indigo-900">850+</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <Store className="w-5 h-5 text-teal-600" />
              <span>Retailers served: <strong className="text-indigo-900">12,500+</strong></span>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="w-5 h-5 text-teal-600" />
              <span>Same-day shipping: <strong className="text-indigo-900">94%</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* Product Categories */}
      <section className="py-24 bg-pearl">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-indigo-900 mb-4">Our Product Universe</h2>
            <p className="font-subhead text-lg text-gray-600">From pharmaceuticals to luxury cosmetics — we've got you covered</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1: Pharma */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&auto=format&fit=crop&w=1769&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-teal-400 mb-2">
                  <Pill className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-wider">GDP Certified</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Pharmaceuticals</h3>
                <p className="text-gray-300 mb-4 text-sm">Prescription, OTC, Generics, Controlled Substances</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-teal-400 text-sm">12,000+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Pharma <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: Cosmetics */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-gold-400 mb-2">
                  <Sparkles className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-wider">Brand Authorized</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Cosmetics & Beauty</h3>
                <p className="text-gray-300 mb-4 text-sm">Skincare, Makeup, Fragrances, Professional</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-gold-400 text-sm">15,000+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Cosmetics <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 3: Personal Care */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556228720-19de77d79e66?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-teal-400 mb-2">
                  <Droplets className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Personal Care</h3>
                <p className="text-gray-300 mb-4 text-sm">Hair Care, Body Wash, Oral Care, Deodorant</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-teal-400 text-sm">18,000+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Personal Care <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 4: Salon */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560066984-138dadb4c035?ixlib=rb-4.0.3&auto=format&fit=crop&w=1974&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-gold-400 mb-2">
                  <Scissors className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-wider">Trade Only</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Salon & Professional</h3>
                <p className="text-gray-300 mb-4 text-sm">Hair Color, Nails, Esthetics, Barber</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-gold-400 text-sm">8,000+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Professional <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 5: Medical */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2030&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-teal-400 mb-2">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Medical Supplies</h3>
                <p className="text-gray-300 mb-4 text-sm">Diagnostics, First Aid, Durable Medical Equipment</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-teal-400 text-sm">5,000+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Medical <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Card 6: Natural */}
            <div className="group relative h-[400px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612817288484-6f916006741a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/90 via-indigo-900/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="flex items-center space-x-2 text-green-400 mb-2">
                  <Leaf className="w-6 h-6" />
                  <span className="font-mono text-xs uppercase tracking-wider">Certified Organic</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-white mb-2">Natural & Organic</h3>
                <p className="text-gray-300 mb-4 text-sm">Clean Beauty, Natural Remedies, Eco-Friendly</p>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-green-400 text-sm">3,500+ SKUs</span>
                  <span className="text-white font-medium text-sm group-hover:translate-x-2 transition-transform flex items-center">
                    Browse Natural <ArrowRight className="w-4 h-4 ml-1" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Benefits */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl md:text-5xl text-indigo-900 mb-4">Why Partner With Us</h2>
            <p className="font-subhead text-lg text-gray-600">The United Beauty & Health Supply Advantage</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <Globe className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Global Logistics</h3>
              <p className="text-gray-600 leading-relaxed">40 countries, 12 distribution centers, 24-48 hour delivery to major markets.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <Box className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">GDP & ISO Certified</h3>
              <p className="text-gray-600 leading-relaxed">Temperature-controlled storage, serialized tracking, full chain of custody.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <Truck className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Volume Pricing</h3>
              <p className="text-gray-600 leading-relaxed">Tiered discounts based on volume. Custom quotes for bulk orders.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-indigo-50 rounded-full flex items-center justify-center mb-6">
                <User className="w-8 h-8 text-indigo-900" />
              </div>
              <h3 className="font-display font-bold text-xl text-indigo-900 mb-3">Dedicated Support</h3>
              <p className="text-gray-600 leading-relaxed">Your personal representative for orders, sourcing, and support.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-4.0.3&auto=format&fit=crop&w=2031&q=80')] bg-cover bg-center opacity-10" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h2 className="font-display font-bold text-4xl md:text-5xl mb-6">Ready to Streamline Your Supply Chain?</h2>
          <p className="font-subhead text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Join 15,000+ pharmacies and retailers worldwide who trust United Beauty & Health Supply.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg">Create Trade Account</Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-indigo-900">Contact Sales</Button>
          </div>
        </div>
      </section>
    </Layout>
  );
}
