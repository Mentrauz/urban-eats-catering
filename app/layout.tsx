import { Suspense } from 'react';
import { LoadingSpinner } from '@/components/LoadingSpinner';
import { Playfair_Display, Montserrat } from 'next/font/google';
import { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
});

export const metadata = {
  title: 'Urban-Eats Catering | Exquisite Culinary Experiences',
  description: 'Experience the finest luxury catering services for weddings, corporate events, and private celebrations.',
  icons: {
    icon: '/favicon.ico'
  },
  keywords: ['luxury catering', 'wedding catering', 'corporate events', 'private chef', 'fine dining'],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${montserrat.variable}`}>
      <body className="min-h-screen flex flex-col font-montserrat">
        <Suspense fallback={<LoadingSpinner />}>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}