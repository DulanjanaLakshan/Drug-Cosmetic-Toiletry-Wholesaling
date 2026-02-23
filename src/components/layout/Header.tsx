import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, ShoppingCart, User, Menu, X, Phone, Globe } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      {/* Top Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block border-b border-gray-100 pb-2 mb-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-xs font-mono text-gray-500">
          <div className="flex items-center space-x-6">
            <span className="flex items-center"><Globe className="w-3 h-3 mr-1" /> Global Distribution: 40+ Countries</span>
            <span className="flex items-center"><Phone className="w-3 h-3 mr-1" /> +1 (800) 555-1234</span>
          </div>
          <div className="flex items-center space-x-6">
            <span>ISO 9001:2024 Certified</span>
            <span>GDP Compliant</span>
            <Link to="/support" className="hover:text-teal-600 transition-colors">Support</Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex flex-col group">
            <span className="font-display font-bold text-2xl tracking-tight text-indigo-900 group-hover:text-teal-600 transition-colors">
              UNITED BEAUTY
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-500 group-hover:text-gold-500 transition-colors">
              & Health Supply
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/products" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Products</Link>
            <Link to="/brands" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Brands</Link>
            <Link to="/services" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">Services</Link>
            <Link to="/about" className="text-sm font-medium text-gray-700 hover:text-teal-600 transition-colors">About Us</Link>
          </nav>

          {/* Search Bar (Desktop) */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8 relative">
            <input
              type="text"
              placeholder="Search by SKU, Brand, or Product..."
              className="w-full h-10 pl-4 pr-10 bg-gray-50 border border-gray-200 rounded-full focus:outline-none focus:border-teal-600 focus:ring-1 focus:ring-teal-600 transition-all text-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Link to="/account" className="hidden lg:flex items-center space-x-2 text-gray-700 hover:text-indigo-900">
              <User className="w-5 h-5" />
              <span className="text-sm font-medium">Account</span>
            </Link>
            <Link to="/quote" className="relative p-2 text-gray-700 hover:text-teal-600 transition-colors">
              <ShoppingCart className="w-6 h-6" />
              <span className="absolute top-0 right-0 w-4 h-4 bg-gold-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                0
              </span>
            </Link>
            <button 
              className="lg:hidden p-2 text-gray-700"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-50 bg-white lg:hidden"
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-display font-bold text-xl text-indigo-900">MENU</span>
                <button onClick={() => setIsMobileMenuOpen(false)} className="p-2">
                  <X className="w-6 h-6 text-gray-500" />
                </button>
              </div>
              <div className="p-4 flex-1 overflow-y-auto">
                <nav className="flex flex-col space-y-6">
                  <Link to="/products" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Products</Link>
                  <Link to="/brands" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Brands</Link>
                  <Link to="/services" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>Services</Link>
                  <Link to="/about" className="text-lg font-medium text-gray-900" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                  <hr className="border-gray-100" />
                  <Link to="/account" className="text-lg font-medium text-gray-900 flex items-center" onClick={() => setIsMobileMenuOpen(false)}>
                    <User className="w-5 h-5 mr-3" /> Trade Account
                  </Link>
                </nav>
              </div>
              <div className="p-4 border-t border-gray-100 bg-gray-50">
                <Button className="w-full mb-3" variant="primary">Request Quote</Button>
                <p className="text-center text-xs text-gray-500">
                  Global Support: +1 (800) 555-1234
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
