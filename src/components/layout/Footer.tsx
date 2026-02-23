import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-indigo-900 text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Top Section: Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <span className="font-display font-bold text-3xl tracking-tight text-white block">
                UNITED BEAUTY
              </span>
              <span className="text-xs tracking-[0.2em] uppercase text-gray-400 block">
                & Health Supply
              </span>
            </div>
            <p className="text-gray-300 mb-6 max-w-sm leading-relaxed">
              Global wholesale distribution to retailers, pharmacies, spas, and healthcare providers. 
              Connecting health & beauty worldwide since 1985.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-teal-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold-500">Products</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/products/pharma" className="hover:text-white transition-colors">Pharmaceuticals</Link></li>
              <li><Link to="/products/cosmetics" className="hover:text-white transition-colors">Cosmetics & Beauty</Link></li>
              <li><Link to="/products/personal-care" className="hover:text-white transition-colors">Personal Care</Link></li>
              <li><Link to="/products/professional" className="hover:text-white transition-colors">Salon Professional</Link></li>
              <li><Link to="/products/medical" className="hover:text-white transition-colors">Medical Supplies</Link></li>
              <li><Link to="/products/organic" className="hover:text-white transition-colors">Natural & Organic</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold-500">Resources</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/catalog" className="hover:text-white transition-colors">Catalog Download</Link></li>
              <li><Link to="/msds" className="hover:text-white transition-colors">MSDS Sheets</Link></li>
              <li><Link to="/certificates" className="hover:text-white transition-colors">Certificates of Analysis</Link></li>
              <li><Link to="/regulatory" className="hover:text-white transition-colors">Regulatory Updates</Link></li>
              <li><Link to="/insights" className="hover:text-white transition-colors">Industry Insights</Link></li>
            </ul>
          </div>

          {/* Column 4: Customer Service */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold-500">Support</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li><Link to="/account" className="hover:text-white transition-colors">Account Management</Link></li>
              <li><Link to="/tracking" className="hover:text-white transition-colors">Order Tracking</Link></li>
              <li><Link to="/returns" className="hover:text-white transition-colors">Returns Policy</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 5: Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-6 text-gold-500">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-300">
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Headquarters</span>
                <span>123 Distribution Way,<br/>Industry City, CA 90001</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Phone</span>
                <span>+1 (800) 555-1234</span>
              </li>
              <li className="flex flex-col">
                <span className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</span>
                <span>info@unitedbeauty.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section: Legal & Certs */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mb-6 md:mb-0 text-xs text-gray-500">
            <span>© 2026 United Beauty & Health Supply. All rights reserved.</span>
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Sale</Link>
            <Link to="/gdpr" className="hover:text-white transition-colors">GDPR Compliance</Link>
          </div>
          
          <div className="flex items-center space-x-4">
             <div className="px-3 py-1 border border-white/20 rounded text-xs text-gray-400">ISO 9001:2024</div>
             <div className="px-3 py-1 border border-white/20 rounded text-xs text-gray-400">GDP Certified</div>
             <div className="px-3 py-1 border border-white/20 rounded text-xs text-gray-400">FDA Registered</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
