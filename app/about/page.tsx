'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import swapnaImage from './images/swapna.jpg';
import jayanthImage from './images/jayanth.jpg';
import jayannaImage from './images/jayanna.jpg';

export default function AboutPage() {
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
      name: "And Many More",
      description: "Growing list of satisfied corporate clients"
    }
  ];

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
                  alt="."
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chief</h3>
              <p className="text-gray-600 font-medium mb-1">Proprietor</p>
              <p className="text-secondary">+91 9999999999</p>
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
                  alt="."
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chief</h3>
              <p className="text-gray-600 font-medium mb-1">Treasurer</p>
              <p className="text-secondary">+91 9999999999</p>
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
                  alt="."
                  fill
                  className="object-cover rounded-full border-4 border-secondary"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Chief</h3>
              <p className="text-gray-600 font-medium mb-1">Chief</p>
              <p className="text-secondary">+91 9999999999</p>
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
                className="bg-gray-50 p-8 rounded-lg text-center hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{vendor.name}</h3>
                <p className="text-gray-600">{vendor.description}</p>
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
                Founded by Master Chef Antoine Laurent, Urban-Eats Catering began as a small family business
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
    </div>
  );
}