'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Check } from 'lucide-react';

interface ServiceFeature {
  name: string;
  included: boolean;
}

interface ServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: ServiceFeature[];
  image: string;
}

export default function ServiceCard({ title, description, price, features, image }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="relative h-48">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-3xl font-bold text-secondary mb-6">{price}</p>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              {feature.included ? (
                <Check className="w-5 h-5 text-green-500 mr-2" />
              ) : (
                <span className="w-5 h-5 mr-2">-</span>
              )}
              <span className={feature.included ? 'text-gray-800' : 'text-gray-400'}>
                {feature.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}