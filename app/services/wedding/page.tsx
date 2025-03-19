'use client';

import { motion } from 'framer-motion';

const weddingServices = [
  {
    title: 'Wedding Catering',
    description: 'Exquisite culinary experiences for your special day',
    image: '/images/wedding-catering.jpg',
    link: '/services/wedding/catering'
  },
  {
    title: 'Wedding Decorations',
    description: 'Beautiful and elegant decoration services',
    image: '/images/wedding-decorations.jpg',
    link: '/services/wedding/decorations'
  },
  {
    title: 'Wedding Film',
    description: 'Capture your precious moments in cinematic style',
    image: '/images/wedding-film.jpg',
    link: '/services/wedding/film'
  },
  {
    title: 'Wedding Photography',
    description: 'Professional photography services',
    image: '/images/wedding-photography.jpg',
    link: '/services/wedding/photography'
  },
  {
    title: 'Welcome Models',
    description: 'Professional welcome models for your ceremony',
    image: '/images/welcome-models.jpg',
    link: '/services/wedding/models'
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
              Complete wedding solutions to make your special day perfect
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {weddingServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
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