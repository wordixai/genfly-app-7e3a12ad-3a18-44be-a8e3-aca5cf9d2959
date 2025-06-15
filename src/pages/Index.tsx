import { motion } from "framer-motion";
import { ShoppingBag, Star, Zap, Heart, TrendingUp } from "lucide-react";
import Header from "../components/Header";
import ProductGrid from "../components/ProductGrid";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-400 via-pink-400 to-orange-500 comic-dots">
      <Header />
      <Hero />
      
      {/* Featured Categories Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-6xl font-bold comic-title text-white text-stroke mb-4">
              EXPLORE CATEGORIES!
            </h2>
            <div className="speech-bubble inline-block max-w-md">
              <p className="handwritten text-xl text-black font-semibold">
                Discover amazing retro fashion & art pieces that'll make you stand out!
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="pop-frame bg-white p-6 text-center hover:bg-yellow-100 transition-colors">
                  <div className="text-6xl mb-4">{category.icon}</div>
                  <h3 className="text-2xl font-bold comic-title text-black mb-2">
                    {category.title}
                  </h3>
                  <p className="handwritten text-gray-700">
                    {category.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ProductGrid />

      {/* CTA Section */}
      <section className="py-16 px-4 halftone-bg">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-white pop-shadow rounded-3xl p-12 max-w-4xl mx-auto"
          >
            <h2 className="text-5xl font-bold comic-title text-black mb-6">
              JOIN THE POP REVOLUTION!
            </h2>
            <p className="handwritten text-xl text-gray-700 mb-8">
              Subscribe to our newsletter and get 20% off your first order! 
              Plus, exclusive access to limited edition retro collections!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="your-email@example.com"
                className="handwritten text-lg px-6 py-3 border-4 border-black rounded-full flex-1 min-w-0"
              />
              <button className="btn-comic bounce-btn shrink-0">
                GET GROOVY!
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

const categories = [
  {
    title: "Retro Fashion",
    icon: "👗",
    description: "Vintage vibes with modern twist!"
  },
  {
    title: "Pop Art",
    icon: "🎨",
    description: "Colorful masterpieces for your wall!"
  },
  {
    title: "Accessories",
    icon: "👓",
    description: "Complete your groovy look!"
  },
  {
    title: "Home Decor",
    icon: "🏠",
    description: "Make your space pop!"
  }
];

export default Index;