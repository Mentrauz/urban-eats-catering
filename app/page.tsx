import dynamic from 'next/dynamic';

// Import Hero normally since it needs to be above the fold
import Hero from '@/components/sections/Hero';

// Lazy load other components with preload
const Services = dynamic(() => import('@/components/sections/Services'), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const About = dynamic(() => import('@/components/sections/About'), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: true,
  loading: () => <div className="h-[600px] animate-pulse bg-gray-50" />,
});

// Preload the components
if (typeof window !== 'undefined') {
  const preloadComponents = async () => {
    const [ServicesComponent, AboutComponent, TestimonialsComponent, ContactComponent] = await Promise.all([
      import('@/components/sections/Services'),
      import('@/components/sections/About'),
      import('@/components/sections/Testimonials'),
      import('@/components/sections/Contact'),
    ]);
  };
  preloadComponents();
}

export default function Home() {
  return (
    <main>
      <div className="text-white">
        <Hero />
      </div>
      <div className="text-black">
        <Services />
        <About />
        <Testimonials />
        <Contact />
      </div>
    </main>
  );
}