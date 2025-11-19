'use client';

import { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Heart, Search } from 'lucide-react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Women\'s Wear', href: '#womens' },
    { name: 'Accessories', href: '#accessories' },
    { name: 'Shoes', href: '#shoes' },
    { name: 'Bags', href: '#bags' },
    { name: 'Lookbook', href: '#lookbook' },
    { name: 'Collections', href: '#collections' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'backdrop-blur-md bg-white/80 shadow-lg py-3'
          : 'backdrop-blur-sm bg-white/60 py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <h1 className="relative text-2xl md:text-3xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent tracking-tight">
                  ATELIER LUXE
                </h1>
              </div>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="relative px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>

          {/* Right Side Icons & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
              aria-label="Search"
            >
              <Search className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
              aria-label="Wishlist"
            >
              <Heart className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-700 hover:text-gray-900 transition-colors hover:scale-110 transform duration-200"
              aria-label="Shopping Bag"
            >
              <ShoppingBag className="w-5 h-5" />
            </button>
            <a
              href="#shop"
              className="relative px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 overflow-hidden group"
            >
              <span className="relative z-10">Shop Now</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4 space-y-2 backdrop-blur-lg bg-white/90 rounded-2xl shadow-2xl p-6 border border-gray-100">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 rounded-lg transition-all duration-200 transform hover:translate-x-2"
                style={{
                  animation: isOpen ? `slideIn 0.3s ease-out ${index * 0.05}s both` : 'none',
                }}
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 space-y-3 border-t border-gray-200">
              <div className="flex items-center justify-around px-4">
                <button
                  className="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all hover:scale-110"
                  aria-label="Search"
                >
                  <Search className="w-5 h-5" />
                </button>
                <button
                  className="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all hover:scale-110"
                  aria-label="Wishlist"
                >
                  <Heart className="w-5 h-5" />
                </button>
                <button
                  className="p-3 text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all hover:scale-110"
                  aria-label="Shopping Bag"
                >
                  <ShoppingBag className="w-5 h-5" />
                </button>
              </div>
              <a
                href="#shop"
                className="block w-full px-6 py-3 text-center text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </nav>
  );
}