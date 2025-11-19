'use client';

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 to-gray-800 text-gray-300 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-xl mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Atelier Luxe
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating fashion with timeless elegance and contemporary sophistication. Where luxury meets artistry.
            </p>
            <div className="flex space-x-3 pt-2">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Shop</h4>
            <ul className="space-y-3">
              <li>
                <a href="/collections/women" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Women's Collection
                </a>
              </li>
              <li>
                <a href="/collections/men" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Men's Collection
                </a>
              </li>
              <li>
                <a href="/collections/accessories" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Accessories
                </a>
              </li>
              <li>
                <a href="/collections/new" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="/sale" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Sale
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Care Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Customer Care</h4>
            <ul className="space-y-3">
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/shipping" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Shipping Information
                </a>
              </li>
              <li>
                <a href="/returns" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/size-guide" className="text-gray-400 hover:text-white transition-colors duration-300 text-sm">
                  Size Guide
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h4 className="text-white font-semibold text-lg mb-4">Stay Connected</h4>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive exclusive offers and style updates.
            </p>
            <form className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all duration-300 text-sm"
                  aria-label="Email for newsletter"
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2.5 bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 text-white font-medium rounded-lg transition-all duration-300 transform hover:scale-[1.02] text-sm"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 space-y-2">
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <MapPin className="w-4 h-4" />
                <span>123 Fashion Ave, New York, NY 10001</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-400 text-xs">
                <Mail className="w-4 h-4" />
                <span>info@atelierluxe.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-500 text-sm">
              © {currentYear} Atelier Luxe. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-6">
              <a href="/privacy" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-500 hover:text-white transition-colors duration-300 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
