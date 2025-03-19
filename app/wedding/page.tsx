'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function WeddingPage() {
  return (
    <div className="pt-24">
      <section className="relative h-[60vh]">
        <Image
          src="https://images.unsplash.com/photo-1519225421980-715cb0215aed"
          alt="Elegant wedding setup"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl font-bold mb-6">Wedding Catering</h1>
            <p className="text-xl mb-8">Creating unforgettable moments for your special day</p>
            <Link
              href="/book"
              className="bg-secondary text-white px-8 py-3 rounded-md hover:bg-secondary/90 transition-colors"
            >
              Plan Your Wedding
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Customized Menus</h3>
              <p className="text-gray-600">
                Personalized menus tailored to your preferences and dietary requirements.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Full Service</h3>
              <p className="text-gray-600">
                Professional staff, elegant tableware, and seamless coordination.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h3 className="text-2xl font-bold mb-4">Venue Partnership</h3>
              <p className="text-gray-600">
                Established relationships with premier wedding venues.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">Wedding Packages</h2>
              <div className="space-y-4">
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Classic Elegance</h3>
                  <p className="text-gray-600">
                    Three-course plated dinner, champagne toast, and professional service staff.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Luxe Experience</h3>
                  <p className="text-gray-600">
                    Five-course tasting menu, premium bar service, and custom cake design.
                  </p>
                </div>
                <div className="p-6 bg-white rounded-lg shadow-lg">
                  <h3 className="text-xl font-semibold mb-2">Royal Celebration</h3>
                  <p className="text-gray-600">
                    Unlimited premium services, signature cocktails, and live cooking stations.
                  </p>
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
                src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3"
                alt="Wedding celebration"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}