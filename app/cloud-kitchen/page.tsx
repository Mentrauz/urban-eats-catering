'use client';

import { motion } from 'framer-motion';
import { FaTruck, FaUtensils, FaClock, FaLeaf } from 'react-icons/fa';
import Image from 'next/image';

export default function CloudKitchenPage() {
  const features = [
    {
      icon: <FaTruck className="w-6 h-6" />,
      title: "Fast Delivery",
      description: "Quick and reliable delivery service to your doorstep"
    },
    {
      icon: <FaUtensils className="w-6 h-6" />,
      title: "Professional Kitchen",
      description: "State-of-the-art facilities with expert chefs"
    },
    {
      icon: <FaClock className="w-6 h-6" />,
      title: "24/7 Service",
      description: "Available round the clock for your convenience"
    },
    {
      icon: <FaLeaf className="w-6 h-6" />,
      title: "Fresh Ingredients",
      description: "Quality ingredients sourced from trusted suppliers"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[50vh] bg-[url('https://images.unsplash.com/photo-1556911220-e15b29be8c8f')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col justify-center h-full">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-white mb-6"
            >
              Cloud Kitchen
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Experience restaurant-quality meals delivered straight to your door. Our cloud kitchen combines culinary excellence with convenience.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            How It Works
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "1",
                title: "Browse Menu",
                description: "Explore our diverse menu options"
              },
              {
                step: "2",
                title: "Place Order",
                description: "Select your meals and customize as needed"
              },
              {
                step: "3",
                title: "Quick Delivery",
                description: "Receive your fresh, hot meals at your doorstep"
              }
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-12 h-12 bg-secondary text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Updated CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Launching Soon!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 mb-8 text-xl"
          >
            Our Cloud Kitchen will be launching in 2025. Stay tuned for updates!
          </motion.p>
        </div>
      </section>
    </div>
  );
} 