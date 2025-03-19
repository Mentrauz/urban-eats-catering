'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FaUtensils, FaGlassCheers, FaConciergeBell } from 'react-icons/fa';
import Image from 'next/image';

export default function MenuPage() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-32 bg-[url('https://images.unsplash.com/photo-1552566626-52f8b828add9')] bg-cover bg-fixed bg-center relative">
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-7xl font-bold mb-6 text-white drop-shadow-lg">Our Menus</h1>
            <p className="text-xl text-white mb-8 drop-shadow-lg">
              Discover our diverse range of culinary offerings
            </p>
            <div className="flex justify-center gap-4">
              <Link href="/menu/all">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors shadow-lg"
                >
                  View All Menus
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <FaUtensils className="w-8 h-8 text-black" />,
                title: "Culinary Excellence",
                description: "Experience the finest ingredients and expert preparation"
              },
              {
                icon: <FaGlassCheers className="w-8 h-8 text-black" />,
                title: "Perfect Pairings",
                description: "Expertly curated wine and beverage selections"
              },
              {
                icon: <FaConciergeBell className="w-8 h-8 text-black" />,
                title: "Professional Service",
                description: "Attentive and experienced service staff"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 bg-gray-50 rounded-xl shadow-lg"
              >
                <div className="mb-4 flex justify-center">{feature.icon}</div>
                <h3 className="text-2xl font-semibold mb-3 text-black">{feature.title}</h3>
                <p className="text-black">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Cards Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Explore Our Offerings</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From intimate tasting sessions to grand corporate events, we have the perfect menu for every occasion
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Link 
                href="/menu/tasting"
                className="group block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-96 bg-[url('https://images.unsplash.com/photo-1551218808-94e220e084d2')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Tasting Sessions</h2>
                    <p className="text-lg text-white drop-shadow-lg">
                      Experience our culinary excellence firsthand
                    </p>
                    <span className="mt-4 inline-block px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white group-hover:bg-white/40 transition-colors shadow-lg">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ y: -10 }}
            >
              <Link 
                href="/menu/corporate"
                className="group block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-96 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')] bg-cover bg-center relative">
                  <div className="absolute inset-0 bg-black/75 group-hover:bg-black/60 transition-colors" />
                  <div className="absolute inset-0 p-8 flex flex-col justify-end">
                    <h2 className="text-4xl font-bold mb-4 text-white drop-shadow-lg">Corporate Menu</h2>
                    <p className="text-lg text-white drop-shadow-lg">
                      Elevate your corporate events with our premium catering services
                    </p>
                    <span className="mt-4 inline-block px-6 py-2 bg-white/30 backdrop-blur-sm rounded-full text-white group-hover:bg-white/40 transition-colors shadow-lg">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sample Menu Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Our Sample Menu</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Explore the flavors that define us with the diverse and delectable options for your special occasion. Whether it is a small event catering, party catering, or corporate event, we are your partner in crafting the perfect culinary journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                number: "01",
                title: "Welcome Drink",
                items: "Watermelon Juice | Sweet Lassi | Buttermilk",
                img: "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=200"
              },
              {
                number: "02",
                title: "Starters",
                items: "Chilli Garlic Potato | Veg Ball Manchurian | Baby Corn Chilli | Gobhi Manchurian",
                img: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=200"
              },
              {
                number: "03",
                title: "Salad",
                items: "Green Salad | Russian Salad | Cucumber Salad | Kosambiri Salad",
                img: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=200"
              },
              {
                number: "04",
                title: "Indian Bread",
                items: "Wheat Paratha Plain | Phulka",
                img: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=200"
              },
              {
                number: "05",
                title: "Flavored Rice",
                items: "Jeera Rice | Green Peas Pulav | Sweet Corn Pulav | Veg Pulav",
                img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?q=80&w=200"
              },
              {
                number: "06",
                title: "Dal",
                items: "Dal Fry | Dal Tadka | Dal Makhani | Dal Lasooni | Punjabi Dal | Black Dal",
                img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=200"
              },
              {
                number: "07",
                title: "Main Course Veg Dry",
                items: "Aloo Capsicum | Aloo Gobhi | Kadhi Veg | Aloo Jeera | Gobhi Matar",
                img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?q=80&w=200"
              },
              {
                number: "08",
                title: "Main Course Veg Gravy",
                items: "Chole Masala | Veg Kolhapuri | Veg Kofta | Veg Miloni | Veg Hariyali",
                img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=200"
              },
              {
                number: "09",
                title: "Main Course Non Veg Gravy",
                items: "Chicken Do Pyaza | Chicken Butter Masala | Chicken Achari | Chicken Chettinad",
                img: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?q=80&w=200"
              },
              {
                number: "10",
                title: "Desserts",
                items: "Gulab Jamun | Jalebi | Sahi Tukda | Fruit Custard | Gajar Halwa",
                img: "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=200"
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-6 p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex-shrink-0">
                  <span className="text-3xl font-light text-gray-400 italic">{item.number}</span>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.items}</p>
                </div>
                <div className="flex-shrink-0 w-24 h-24 relative">
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    className="object-cover rounded-lg"
                    sizes="(max-width: 96px) 100vw, 96px"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-20 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0')] bg-cover bg-center relative">
        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-6 text-white drop-shadow-lg">Ready to Plan Your Event?</h2>
            <p className="text-xl mb-8 text-white drop-shadow-lg">
              Let us help you create an unforgettable culinary experience
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black text-white rounded-full hover:bg-black/90 transition-colors shadow-lg border border-white"
            >
              Contact Us Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}