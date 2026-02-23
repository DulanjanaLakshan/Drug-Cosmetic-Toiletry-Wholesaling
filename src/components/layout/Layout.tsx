import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white font-sans text-indigo-900">
      <Header />
      <main className="flex-grow pt-24 lg:pt-32">
        {children}
      </main>
      <Footer />
    </div>
  );
}
