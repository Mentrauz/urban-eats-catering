import Link from 'next/link';
import { Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#2A2A2A] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Urban-Eats Catering</h3>
            <p className="text-sm text-gray-300">
              Crafting unforgettable culinary experiences for life's most precious moments.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-sm hover:text-secondary transition-colors">About Us</Link></li>
              <li><Link href="/menu" className="text-sm hover:text-secondary transition-colors">Our Menu</Link></li>
              <li><Link href="/wedding" className="text-sm hover:text-secondary transition-colors">Wedding Services</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-sm">
              
              <li>Bangalore, Karnataka 560068</li>
              <li>Tel: +91 990011223</li>
              <li>Email: info@Urban-Eats.com</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-secondary transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-secondary transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Urban-Eats Catering. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}