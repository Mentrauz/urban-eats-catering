import { motion } from 'framer-motion';
import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  index: number;
}

const ServiceCard = memo(function ServiceCard({ title, description, image, link, index }: ServiceCardProps) {
  return (
    <motion.div
      key={title}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "50px" }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-[1.02]"
    >
      <Image
        src={image}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
        loading="lazy"
        quality={75}
        placeholder="blur"
        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRg..."
      />
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-black">{title}</h3>
        <p className="text-gray-800 mb-4">{description}</p>
        <a
          href={link}
          className="text-black font-semibold hover:text-gray-700"
        >
          Learn More →
        </a>
      </div>
    </motion.div>
  );
});

export default ServiceCard; 