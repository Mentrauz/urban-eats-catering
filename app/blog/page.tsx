'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const blogPosts = [
  {
    title: 'The Art of Food Presentation',
    excerpt: 'Discover the secrets behind creating visually stunning dishes that captivate your guests.',
    image: 'https://images.unsplash.com/photo-1515003197210-e0cd71810b5f',
    date: 'March 15, 2024',
    category: 'Culinary Arts'
  },
  {
    title: 'Planning the Perfect Wedding Menu',
    excerpt: 'Tips and insights for creating a memorable wedding dining experience.',
    image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
    date: 'March 10, 2024',
    category: 'Wedding Planning'
  },
  {
    title: 'Sustainable Catering Practices',
    excerpt: 'How were making our catering services more environmentally friendly.',
    image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af',
    date: 'March 5, 2024',
    category: 'Sustainability'
  },
  {
    title: 'Seasonal Menu Innovation',
    excerpt: 'Exploring the latest trends in seasonal and local ingredient sourcing.',
    image: 'https://images.unsplash.com/photo-1496412705862-e0088f16f791',
    date: 'March 1, 2024',
    category: 'Menu Design'
  }
];

export default function BlogPage() {
  return (
    <div className="pt-24">
      <section className="relative py-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1555244162-803834f70033"
            alt="Blog background"
            fill
            priority
            className="object-cover brightness-50"
            sizes="100vw"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-5xl font-bold mb-6 text-white">Our Blog</h1>
            <p className="text-lg text-gray-200">
              Insights, stories, and expertise from our culinary journey
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative h-64">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-2">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.category}</span>
                  </div>
                  <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <Link
                    href="#"
                    className="text-secondary font-semibold hover:text-secondary/90 transition-colors"
                  >
                    Read More →
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}