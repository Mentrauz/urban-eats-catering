'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaRegClock } from 'react-icons/fa';

export default function TastingSession() {
  const dishes = [
    {
      name: "Royal Biryani Selection",
      description: "Fragrant basmati rice with your choice of Hyderabadi, Lucknowi, or Kolkata style preparation",
      price: "₹599/person"
    },
    {
      name: "North Indian Classics",
      description: "Butter Chicken, Dal Makhani, Paneer Butter Masala, and assorted Indian breads",
      price: "₹499/person"
    },
    {
      name: "Coastal Delights",
      description: "Kerala Fish Curry, Prawn Malai Curry, Crab Masala, and Malabar Parotta",
      price: "₹699/person"
    },
    {
      name: "Vegetarian Royal Thali",
      description: "Selection of premium vegetarian dishes with Indian breads, rice, and desserts",
      price: "₹449/person"
    }
  ];

  return (
    <div className="pt-24">
      <section className="py-32 bg-[url('https://images.unsplash.com/photo-1551218808-94e220e084d2')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-lg">Tasting Sessions</h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Experience our culinary excellence firsthand
            </p>
            <p className="text-2xl font-bold text-white mb-8 bg-black/30 p-4 rounded-lg inline-block">
              Book a tasting session and we pack the food and deliver to your address
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center gap-8 flex-wrap"
          >
            <a href="tel:+919876543210" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <FaPhone className="text-amber-600" />
              <span className="font-semibold">+91 98765 43210</span>
            </a>
            <a href="https://wa.me/919876543210" className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-shadow">
              <FaWhatsapp className="text-green-600" />
              <span className="font-semibold">WhatsApp Us</span>
            </a>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-lg">
              <FaRegClock className="text-amber-600" />
              <span className="font-semibold">Available: 10 AM - 8 PM</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16"
          >
            Our Tasting Menu
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {dishes.map((dish, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow border border-amber-100"
              >
                <h3 className="text-2xl font-bold mb-3 text-amber-900">{dish.name}</h3>
                <p className="text-gray-600 mb-4">{dish.description}</p>
                <p className="text-lg font-semibold text-amber-600">{dish.price}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Experience Our Flavors?</h2>
            <p className="text-lg mb-8 text-gray-700">
              Book your tasting session now and embark on a culinary journey through India's finest dishes.
              Minimum booking for 4 persons required.
            </p>
            <motion.a
              href="https://wa.me/919876543210?text=Hi,%20I%20would%20like%20to%20book%20a%20tasting%20session"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors shadow-lg cursor-pointer"
            >
              Book Your Session Now
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}