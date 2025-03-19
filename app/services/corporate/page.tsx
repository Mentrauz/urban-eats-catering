'use client';

import { motion } from 'framer-motion';

const corporateServices = [
  {
    title: 'Corporate Menu',
    description: 'Specialized menus for corporate events and daily operations',
    image: '/images/corporate-menu.jpg',
    link: '/services/corporate/menu'
  },
  {
    title: 'Office Functions',
    description: 'Catering solutions for meetings, conferences, and office celebrations',
    image: '/images/office-functions.jpg',
    link: '/services/corporate/functions'
  }
];

export default function CorporateServicesPage() {
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
            <h1 className="text-5xl font-bold mb-6">Corporate Services</h1>
            <p className="text-lg text-gray-600">
              Professional catering solutions for your business needs
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {corporateServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={service.image} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={service.link}
                    className="text-secondary font-semibold hover:text-secondary/80"
                  >
                    Learn More →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 