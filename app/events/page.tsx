'use client';

import { motion } from 'framer-motion';
import EventCard from '@/components/events/EventCard';

const events = [
  {
    title: "Weddings",
    description: "Create your perfect day with our comprehensive wedding services",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    href: "/events/wedding"
  },
  {
    title: "Kids Birthday Parties",
    description: "Create magical memories with our themed birthday celebrations",
    image: "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368",
    href: "/events/kids-birthday"
  },
  {
    title: "Engagement Celebrations",
    description: "Begin your journey to forever with an elegant engagement party",
    image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
    href: "/events/engagement"
  },
  {
    title: "School Events",
    description: "From graduations to proms, we cater to all academic celebrations",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    href: "/events/school"
  },
  {
    title: "College Events",
    description: "Elevate your campus events with our professional catering services",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94",
    href: "/events/college"
  },
  {
    title: "Office Functions",
    description: "Impress your colleagues with our corporate catering solutions",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
    href: "/events/office"
  },
  {
    title: "House Ceremonies",
    description: "Make your house warming or religious ceremony special",
    image: "https://images.unsplash.com/photo-1469371670807-013ccf25f16a",
    href: "/events/house-ceremony"
  },
  {
    title: "Baby Shower",
    description: "Celebrate new beginnings with our curated baby shower packages",
    image: "https://images.unsplash.com/photo-1513885535751-8b9238bd345a",
    href: "/events/baby-shower"
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
              From intimate gatherings to grand celebrations, we cater to all your special moments
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <EventCard
                key={event.title}
                title={event.title}
                description={event.description}
                image={event.image}
                href={event.href}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}