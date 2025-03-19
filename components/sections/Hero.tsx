'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative h-screen">
      <Image
        src="https://images.unsplash.com/photo-1555244162-803834f70033"
        alt="Luxury catering setup"
        fill
        priority
        className="object-cover"
        quality={75}
        sizes="100vw"
        // Consider using a more optimized image format like WebP
        // Consider hosting images on a CDN or using Next.js Image optimization
      />
      <div className="absolute inset-0 bg-black/40" />
      
      <div className="relative h-full flex items-center justify-center text-center text-white px-4">
        <div className="max-w-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Elevate Your Events with Exquisite Catering
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl mb-8"
          >
            Crafting unforgettable culinary experiences for life's most precious moments
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/book"
              className="bg-secondary text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-secondary/90 transition-colors inline-block"
            >
              Start Planning Your Event
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}