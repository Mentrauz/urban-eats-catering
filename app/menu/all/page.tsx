'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';
import { useState } from 'react';

export default function AllMenusPage() {
  const [hoveredMenu, setHoveredMenu] = useState<string | null>(null);
  
  const indianDishes = {
    "Breakfast Menu": ["Masala Dosa", "Idli Sambar", "Poha", "Aloo Paratha", "Chole Bhature", "and many more"],
    "Lunch Menu": ["Butter Chicken", "Dal Makhani", "Paneer Tikka", "Biryani", "Naan & Roti Basket", "and many more"],
    "Dinner Menu": ["Rogan Josh", "Malai Kofta", "Palak Paneer", "Hyderabadi Biryani", "Garlic Naan", "and many more"],
    "Cocktail Reception": ["Paneer Tikka", "Samosas", "Pani Puri", "Pakoras", "Dahi Puri", "and many more"],
    "Wedding Package": ["Grand Biryani", "Butter Naan", "Paneer Dishes", "Jalebi", "Gulab Jamun", "and many more"],
    "Corporate Events": ["Mini Samosas", "Kebab Platters", "Chole Bhature", "Pav Bhaji", "Kathi Rolls", "and many more"]
  };

  const menus = [
    {
      title: "Breakfast Menu",
      image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666",
      description: "Start your day with our delicious breakfast offerings",
      price: "Contact Us for Pricing"
    },
    {
      title: "Lunch Menu",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c",
      description: "Perfect for business lunches and casual gatherings",
      price: "Contact Us for Pricing"
    },
    {
      title: "Dinner Menu",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0",
      description: "Elegant evening dining options",
        price: "Contact Us for Pricing"
    },
    {
      title: "Cocktail Reception",
      image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87",
      description: "Canapés and finger food for social events",
      price: "Contact Us for Pricing"
    },
    {
      title: "Wedding Package",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3",
      description: "Special menus for your big day",
      price: "Contact Us for Pricing"
    },
    {
      title: "Corporate Events",
      image: "https://images.unsplash.com/photo-1511578314322-379afb476865",
      description: "Professional catering for business events",
      price: "Contact Us for Pricing"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section with Background - reduced height from 40vh to 32vh */}
      <div className="relative h-[24vh] bg-[url('https://images.unsplash.com/photo-1555244162-803834f70033')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col justify-end h-full pb-8"> {/* reduced padding-bottom from 12 to 8 */}
            <Link href="/menu" className="inline-flex items-center text-white hover:text-gray-200 mb-6"> {/* reduced margin-bottom from 8 to 6 */}
              <FaArrowLeft className="mr-2" />
              Back to Menu
            </Link>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              All Menus
            </motion.h1>
            <p className="text-xl text-white/90">Explore our complete range of catering options</p>
          </div>
        </div>
      </div>

      {/* Menu Grid */}
      <div className="container mx-auto px-4 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {menus.map((menu, index) => (
            <motion.div
              key={menu.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div 
                className="h-48 bg-cover bg-center"
                style={{ backgroundImage: `url(${menu.image})` }}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{menu.title}</h3>
                <p className="text-gray-600 mb-4">{menu.description}</p>
                <p className="text-gray-900 font-semibold mb-4">{menu.price}</p>
                
                <div className="relative">
                  <div 
                    className="inline-block"
                    onMouseEnter={() => setHoveredMenu(menu.title)}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <div className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition cursor-default">
                      View Details
                    </div>
                    
                    {/* Professional Popup with Indian Dishes */}
                    {hoveredMenu === menu.title && (
                      <div className="absolute z-10 bottom-full left-0 mb-2 w-64 bg-white shadow-xl rounded-lg overflow-hidden transform transition-all">
                        <div className="bg-gradient-to-r from-amber-500 to-amber-600 text-white px-4 py-3">
                          <h4 className="font-bold">Featured Dishes</h4>
                        </div>
                        <div className="p-4">
                          <ul className="space-y-1">
                            {indianDishes[menu.title as keyof typeof indianDishes].map((dish, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-amber-500 mr-2">•</span>
                                <span>{dish}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
} 