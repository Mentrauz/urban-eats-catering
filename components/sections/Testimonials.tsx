'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export const testimonials = [
  {
    name: 'Harshvardhan',
    role: 'Wedding Clients',
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=HV&backgroundColor=b6e3f4',
    blurDataURL: 'data:image/svg+xml;base64,...',
    quote: 'The attention to detail and personalized service exceeded our expectations. Our wedding guests are still talking about the amazing food!'
  },
  {
    name: 'Arvind Kumar',
    role: 'Corporate Event Manager',
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=AK&backgroundColor=d1d4f9',
    blurDataURL: 'data:image/svg+xml;base64,...',
    quote: 'Professional, punctual, and absolutely delicious. Chowdeshwari Catering has been our go-to for all corporate events.'
  },
  {
    name: 'Rajesh Shah',
    role: 'Private Party Host',
    image: 'https://api.dicebear.com/6.x/initials/svg?seed=RS&backgroundColor=c0aede',
    blurDataURL: 'data:image/svg+xml;base64,...',
    quote: "From planning to execution, everything was flawless. The chef's creativity and presentation were outstanding."
  }
] as const;

export default function Testimonials() {
  return (
    <section className="py-20 bg-[#F4F4F4]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-black"
        >
          <h2 className="text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear what our clients have to say about their experiences
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    loading="lazy"
                    placeholder="blur"
                    blurDataURL={testimonial.blurDataURL}
                    className="object-cover rounded-full"
                  />
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&ldquo;{testimonial.quote}&rdquo;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}