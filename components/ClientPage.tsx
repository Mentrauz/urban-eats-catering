'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import About from '@/components/sections/About';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import { useEffect, useState } from 'react';

export default function ClientPage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen bg-gray-50">
        <div className="h-screen bg-gray-100 animate-pulse" />
      </div>
    );
  }

  return (
    <AnimatePresence>
      <main>
        <div className="text-white">
          <Hero />
        </div>
        <div className="text-black">
          <Services />
          <About />
          <Testimonials />
          <Contact />
        </div>
      </main>
    </AnimatePresence>
  );
} 