'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Utensils, GlassWater, Users, ChefHat, LucideIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ServiceIconProps {
  icon: LucideIcon;
}

interface ServiceCardProps {
  Icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

const ServiceIcon = ({ icon: Icon }: ServiceIconProps) => (
  <div className="inline-block p-3 bg-secondary/10 rounded-full mb-4">
    <Icon className="w-8 h-8" />
  </div>
);

const ServiceCard = ({ Icon, title, description, index }: ServiceCardProps) => {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="bg-white p-6 rounded-lg shadow-lg text-center"
    >
      <ServiceIcon icon={Icon} />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

const services = [
  {
    Icon: Utensils,
    title: 'Corporate Events',
    description: 'Elevate your corporate gatherings with our premium catering services.',
  },
  {
    Icon: GlassWater,
    title: 'Wedding Receptions',
    description: 'Create unforgettable moments with our exquisite wedding catering.',
  },
  {
    Icon: Users,
    title: 'Private Parties',
    description: 'Transform your private events into extraordinary experiences.',
  },
  {
    Icon: ChefHat,
    title: 'Personal Chef',
    description: 'Enjoy restaurant-quality dining in the comfort of your home.',
  },
] as const;

export default function Services() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setIsMounted(true);
    });
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <AnimatePresence mode="wait">
      <section className="py-20 bg-[#F4F4F4]">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="text-center mb-12 text-black"
          >
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience culinary excellence across a range of premium catering services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                index={isMounted ? index : 0}
              />
            ))}
          </div>
        </div>
      </section>
    </AnimatePresence>
  );
}