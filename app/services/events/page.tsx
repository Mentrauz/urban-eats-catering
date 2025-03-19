'use client';

import { motion } from 'framer-motion';

const events = [
  {
    title: 'Kids Birthday',
    description: 'Fun and delicious catering for children\'s parties',
    image: '/images/kids-birthday.jpg',
    link: '/services/events/kids-birthday'
  },
  {
    title: 'Engagement',
    description: 'Celebrate your engagement with our catering services',
    image: '/images/engagement.jpg',
    link: '/services/events/engagement'
  },
  {
    title: 'School Events',
    description: 'Catering for school functions and celebrations',
    image: '/images/school-events.jpg',
    link: '/services/events/school'
  },
  {
    title: 'College Events',
    description: 'Catering solutions for college functions',
    image: '/images/college-events.jpg',
    link: '/services/events/college'
  },
  {
    title: 'House Ceremony',
    description: 'Traditional catering for house warming ceremonies',
    image: '/images/house-ceremony.jpg',
    link: '/services/events/house-ceremony'
  },
  {
    title: 'Baby Shower',
    description: 'Special catering for your baby shower celebration',
    image: '/images/baby-shower.jpg',
    link: '/services/events/baby-shower'
  }
];

export default function EventsPage() {
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
            <h1 className="text-5xl font-bold mb-6">Special Events</h1>
            <p className="text-lg text-gray-600">
              Catering solutions for all your special occasions
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <img src={event.image} alt={event.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <a
                    href={event.link}
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