'use client';

import { motion } from 'framer-motion';
import { FaBriefcase, FaUtensils, FaHandshake, FaChartLine } from 'react-icons/fa';

export default function CorporateMenu() {
  const services = [
    {
      icon: <FaBriefcase className="w-8 h-8" />,
      title: "Custom Packages",
      description: "Tailored catering solutions for your corporate needs."
    },
    {
      icon: <FaUtensils className="w-8 h-8" />,
      title: "Gourmet Menus",
      description: "Exquisite dishes crafted by our top chefs."
    },
    {
      icon: <FaHandshake className="w-8 h-8" />,
      title: "Professional Service",
      description: "Experienced staff ensuring seamless events."
    },
    {
      icon: <FaChartLine className="w-8 h-8" />,
      title: "Event Planning",
      description: "Comprehensive planning for successful events."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - adjusted text positioning */}
      <div className="relative h-[25vh] bg-[url('https://images.unsplash.com/photo-1519225421980-715cb0215aed')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 h-full relative">
          <div className="flex flex-col justify-end h-full pb-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Corporate Menu
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-2xl"
            >
              Elevate your corporate events with our premium catering services.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Services
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-secondary mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            What Our Clients Say
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                name: "John Doe",
                feedback: "The catering service was exceptional and made our event a success!"
              },
              {
                name: "Jane Smith",
                feedback: "Professional staff and delicious food. Highly recommend!"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-xl shadow-sm"
              >
                <p className="text-gray-600 mb-4">"{testimonial.feedback}"</p>
                <h4 className="text-lg font-semibold">{testimonial.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-white mb-8"
          >
            Plan Your Event with Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-white/90 mb-8 text-xl"
          >
            Contact us today to discuss your corporate catering needs.
          </motion.p>
          <motion.a
            href="https://wa.me/990011223"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white text-secondary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Contact Us
            <span className="ml-2">(990011223)</span>
          </motion.a>
        </div>
      </section>
    </div>
  );
} 