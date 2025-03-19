'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-black"
          >
            <h2 className="text-4xl font-bold mb-6">Crafting Culinary Excellence</h2>
            <p className="text-lg text-gray-600 mb-6">
              With over two decades of experience in luxury catering, we bring unparalleled
              expertise and creativity to every event. Our team of world-class chefs combines
              traditional techniques with modern innovation to create extraordinary culinary experiences.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              We source only the finest ingredients, partnering with local farmers and artisanal
              producers to ensure exceptional quality in every dish we serve.
            </p>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-secondary">20+</h3>
                <p className="text-sm text-gray-600">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary">5000+</h3>
                <p className="text-sm text-gray-600">Events Catered</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-secondary">98%</h3>
                <p className="text-sm text-gray-600">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative h-[600px]"
          >
            <Image
              src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0"
              alt="Chef preparing gourmet dish"
              fill
              className="object-cover rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}