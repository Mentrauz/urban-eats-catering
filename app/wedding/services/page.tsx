'use client';

import { motion } from 'framer-motion';
import ServiceCard from '@/components/wedding/ServiceCard';

const weddingServices = [
  {
    title: "Wedding Catering",
    description: "Exquisite culinary experiences for your special day",
    price: "From $85/person",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    features: [
      { name: "Customized Menu Planning", included: true },
      { name: "Professional Service Staff", included: true },
      { name: "Premium Table Settings", included: true },
      { name: "Bar Service", included: true },
      { name: "Cake Cutting Service", included: true }
    ]
  },
  {
    title: "Wedding Decorations",
    description: "Transform your venue into a magical setting",
    price: "From $2,500",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552",
    features: [
      { name: "Floral Arrangements", included: true },
      { name: "Table Centerpieces", included: true },
      { name: "Lighting Design", included: true },
      { name: "Backdrop & Arch", included: true },
      { name: "Setup & Teardown", included: true }
    ]
  },
  {
    title: "Wedding Photography",
    description: "Capture every precious moment of your celebration",
    price: "From $3,000",
    image: "https://images.unsplash.com/photo-1537633552985-df8429e8048b",
    features: [
      { name: "Full Day Coverage", included: true },
      { name: "Engagement Session", included: true },
      { name: "Digital Gallery", included: true },
      { name: "Printed Album", included: true },
      { name: "Second Photographer", included: true }
    ]
  },
  {
    title: "Wedding Film",
    description: "Create a timeless memory of your wedding day",
    price: "From $2,800",
    image: "https://images.unsplash.com/photo-1532712938310-34cb3982ef74",
    features: [
      { name: "Ceremony Coverage", included: true },
      { name: "Reception Coverage", included: true },
      { name: "Highlight Film", included: true },
      { name: "Drone Footage", included: true },
      { name: "Raw Footage", included: true }
    ]
  }
];

export default function WeddingServicesPage() {
  return (
    <div className="pt-24">
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6">Wedding Services</h1>
            <p className="text-lg text-gray-600">
              Comprehensive wedding services to make your special day perfect
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {weddingServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                image={service.image}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}