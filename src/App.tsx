/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Category from './pages/Category';
import ProductDetail from './pages/ProductDetail';
import QuoteCart from './pages/QuoteCart';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';
import Brand from './pages/Brand';
import About from './pages/About';
import Contact from './pages/Contact';
import Supplier from './pages/Supplier';
import Resources from './pages/Resources';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Category />} />
        <Route path="/products/:category" element={<Category />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/brands" element={<Brand />} />
        <Route path="/quote" element={<QuoteCart />} />
        <Route path="/account" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Supplier />} />
        <Route path="/insights" element={<Resources />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}
