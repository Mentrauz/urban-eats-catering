'use client';

import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';
import { useCallback } from 'react';
import Image from 'next/image';

const cateringServices = [
  {
    title: "Corporate Menu",
    description: "Specialized menus for corporate events and daily operations",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800",
  },
  {
    title: "Office Functions",
    description: "Catering solutions for meetings, conferences, and office celebrations",
    image: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=800",
  },
  {
    title: "Kids Birthday",
    description: "Fun and delicious catering for children's parties",
    image: "https://images.unsplash.com/photo-1464349153735-7db50ed83c84?q=80&w=800",
  },
  {
    title: "Engagement",
    description: "Celebrate your engagement with our catering services",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?q=80&w=800",
  },
  {
    title: "School Events",
    description: "Catering for school functions and celebrations",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=800",
  },
  {
    title: "College Events",
    description: "Catering solutions for college functions",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=800",
  },
  {
    title: "House Ceremony",
    description: "Traditional catering for house warming ceremonies",
    image: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?q=80&w=800",
  },
  {
    title: "Baby Shower",
    description: "Special catering for your baby shower celebration",
    image: "https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=800",
  }
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-[400px] flex items-center justify-center mb-16">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1920"
            alt="Services background"
            fill
            className="object-cover brightness-50"
            priority
          />
        </div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <motion.h1 
            className="text-5xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Our Services
          </motion.h1>
          <motion.p 
            className="text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            From intimate gatherings to grand corporate events, we have the perfect catering solution for every occasion
          </motion.p>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 mb-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <motion.div 
            className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center">
                <span className="text-2xl">👨‍🍳</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Culinary Excellence</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience the finest ingredients and expert preparation
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🍷</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Perfect Pairings</h3>
            <p className="text-gray-600 leading-relaxed">
              Expertly curated food and beverage selections
            </p>
          </motion.div>

          <motion.div 
            className="text-center p-8 rounded-lg bg-white shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            whileHover={{ y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div className="mb-6">
              <div className="w-16 h-16 mx-auto bg-gold-50 rounded-full flex items-center justify-center">
                <span className="text-2xl">🤵</span>
              </div>
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-gray-800">Professional Service</h3>
            <p className="text-gray-600 leading-relaxed">
              Attentive and experienced service staff
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid - Your existing grid code */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cateringServices.map((service) => (
            <div key={service.title} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}