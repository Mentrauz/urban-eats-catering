'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import swapnaImage from './images/swapna.jpg';
import jayanthImage from './images/jayanth.jpg';
import jayannaImage from './images/jayanna.jpg';
import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { AnimatePresence } from 'framer-motion';

export default function AboutPage() {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  const timeline = [
    {
      year: "2021",
      milestone: "Started our culinary journey with a vision to provide exceptional catering services"
    },
    {
      year: "2022",
      milestone: "Expanded our services and established our presence in the local market"
    },
    {
      year: "2023",
      milestone: "Ventured into corporate catering, serving our first major corporate clients"
    },
    {
      year: "2024",
      milestone: "Growing our corporate portfolio with trusted partnerships across Bangalore"
    }
  ];

  const vendors = [
    {
      name: "HDFC Bangalore",
      description: "Premium Banking Partner"
    },
    {
      name: "EOS GLOBE",
      description: "Corporate Client"
    },
    {
      name: "Indian Oil South Bangalore",
      description: "Energy Sector Partner"
    },
    {
      name: "Standard Chartered Bank",
      description: "Banking Partner"
    },
    {
      name: "Acuity",
      description: "Analytics Partner"
    },
    {
      name: "And Many More",
      description: "We also serve software companies"
    }
  ];

  // Gallery images for Standard Chartered Bank
  const partnerGalleries = {
    "Standard Chartered Bank": [
      "/images/gallery/standardchartered-1.jpg",
      "/images/gallery/standardchartered-2.jpg",
      "/images/gallery/standardchartered-3.jpg",
      "/images/gallery/standardchartered-4.jpg",
      "/images/gallery/standardchartered-5.jpg",
    ]
  };

  const openGallery = (partnerName) => {
    if (partnerGalleries[partnerName]) {
      setSelectedPartner(partnerName);
      setIsGalleryOpen(true);
    }
  };

  return (
    <div className="pt-24">
      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
            alt="Culinary background"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Our Story</h1>
            <p className="text-lg text-gray-200 mb-8">
              Crafting culinary excellence since 1995
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              From our inception to our current position in the corporate world, 
              we've maintained our commitment to excellence in catering. Our journey 
              reflects our dedication to quality and service, now extending into the 
              corporate sector with specialized solutions for businesses.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-0.5 bg-secondary/30" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`flex items-center mb-16 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 flex items-center">
                  <div className={`w-full ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="inline-flex bg-secondary text-white text-xl font-bold px-6 py-3 rounded-full shadow-lg">
                      {item.year}
                    </div>
                  </div>
                </div>

                <div className="w-1/2">
                  <div className={`${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow border-l-4 border-secondary">
                      <p className="text-gray-700 text-lg">{item.milestone}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={swapnaImage}
                  alt="Swapna"
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Swapna</h3>
              <p className="text-gray-600 font-medium mb-1">Proprietor</p>
              <p className="text-secondary">+91 6364831829</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={jayanthImage}
                  alt="Jayanth Shetty"
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jayanth Shetty</h3>
              <p className="text-gray-600 font-medium mb-1">Managing director</p>
              <p className="text-secondary">+91 6360049746</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={jayannaImage}
                  alt="Jayanna"
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Jayanna</h3>
              <p className="text-gray-600 font-medium mb-1">Chief Operating Officer</p>
              <p className="text-secondary">+91 9845653286</p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-4xl font-bold text-center mb-16"
          >
            Our Valued Corporate Partners
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {vendors.map((vendor, index) => (
              <motion.div
                key={vendor.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow ${
                  partnerGalleries[vendor.name] ? 'cursor-pointer hover:bg-gray-100' : ''
                }`}
                onClick={() => openGallery(vendor.name)}
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{vendor.name}</h3>
                <p className="text-gray-600">{vendor.description}</p>
                {partnerGalleries[vendor.name] && (
                  <p className="text-secondary mt-3 text-sm">Click to view catering gallery</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Heritage</h2>
              <p className="text-gray-600 mb-4">
                Founded by Master Chef Antoine Laurent, Urban Eats Catering began as a small family business
                with a passion for creating extraordinary dining experiences.
              </p>
              <p className="text-gray-600">
                Today, we are proud to be one of the most sought-after luxury catering services,
                serving distinguished clients and creating memorable events across the country.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1577106263724-2c8e03bfe9cf"
                alt="Chef preparing food"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="Culinary background"
            fill
            className="object-cover brightness-50"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Our Mission</h3>
              <p className="text-gray-200">
                To create extraordinary culinary experiences that exceed expectations and create lasting memories.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Our Vision</h3>
              <p className="text-gray-200">
                To be the most trusted name in luxury catering, known for innovation and excellence.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4 text-white">Our Values</h3>
              <p className="text-gray-200">
                Excellence, creativity, sustainability, and uncompromising quality in everything we do.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && selectedPartner && (
          <Dialog
            static
            open={isGalleryOpen}
            onClose={() => setIsGalleryOpen(false)}
            className="relative z-50"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70"
              aria-hidden="true"
            />
            
            <div className="fixed inset-0 flex items-center justify-center p-4">
              <Dialog.Panel>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                >
                  <div className="flex justify-between items-center mb-6">
                    <Dialog.Title className="text-2xl font-bold text-gray-800">
                      {selectedPartner} Catering Gallery
                    </Dialog.Title>
                    <button
                      onClick={() => setIsGalleryOpen(false)}
                      className="text-gray-500 hover:text-gray-700"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {partnerGalleries[selectedPartner].map((image, index) => (
                      <div key={index} className="relative h-64 rounded-lg overflow-hidden">
                        <Image
                          src={image}
                          alt={`${selectedPartner} catering event ${index + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setIsGalleryOpen(false)}
                      className="px-6 py-2 bg-secondary text-white rounded-full hover:bg-secondary/90 transition-colors"
                    >
                      Close Gallery
                    </button>
                  </div>
                </motion.div>
              </Dialog.Panel>
            </div>
          </Dialog>
        )}
      </AnimatePresence>
    </div>
  );
}