import { motion } from "framer-motion";
import { Instagram, Twitter, Facebook, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10 comic-dots"></div>
      
      <div className="container mx-auto px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-bold comic-title mb-4">
              <span className="text-orange-500">POP</span>
              <span className="text-pink-500">SHOP!</span>
            </h3>
            <p className="handwritten text-lg mb-4">
              Your ultimate destination for retro fashion & pop art! 
              Making the world more colorful, one purchase at a time! 🌈
            </p>
            <div className="flex space-x-4">
              {socialIcons.map((social, index) => (
                <motion.a
                  key={social.name}
                  href="#"
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-10 h-10 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center hover:shadow-lg transition-all duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold comic-title text-orange-500 mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a href="#" className="handwritten text-lg hover:text-pink-500 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold comic-title text-pink-500 mb-4">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category}>
                  <a href="#" className="handwritten text-lg hover:text-orange-500 transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h4 className="text-2xl font-bold comic-title text-yellow-400 mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MapPin size={20} className="text-orange-500" />
                <span className="handwritten">123 Pop Street, Retro City</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-pink-500" />
                <span className="handwritten">(555) POP-SHOP</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-yellow-400" />
                <span className="handwritten">hello@popshop.com</span>
              </div>
            </div>

            <div className="mt-6 p-4 bg-white bg-opacity-10 rounded-lg border-2 border-orange-500">
              <p className="handwritten text-sm text-center">
                <span className="text-yellow-400 font-bold">Free Shipping</span> on orders over $75! 📦✨
              </p>
            </div>
          </motion.div>
        </div>

        {/* Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center border-t-2 border-white border-opacity-20 pt-8 mb-8"
        >
          <h4 className="text-3xl font-bold comic-title text-white mb-4">
            Stay In The Loop! 💌
          </h4>
          <p className="handwritten text-lg mb-6">
            Subscribe for exclusive deals, new arrivals, and groovy updates!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="your-email@example.com"
              className="handwritten text-lg px-6 py-3 rounded-full border-2 border-white bg-transparent text-white placeholder-gray-300 flex-1 min-w-0"
            />
            <button className="btn-comic shrink-0">
              SUBSCRIBE! ⚡
            </button>
          </div>
        </motion.div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center border-t-2 border-white border-opacity-20 pt-6"
        >
          <p className="handwritten text-lg">
            © 2024 PopShop! Made with ❤️ and lots of ☕
          </p>
          <div className="flex justify-center space-x-6 mt-4">
            {legalLinks.map((link) => (
              <a key={link} href="#" className="handwritten hover:text-orange-500 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

const socialIcons = [
  { name: "Instagram", icon: Instagram },
  { name: "Twitter", icon: Twitter },
  { name: "Facebook", icon: Facebook },
  { name: "Email", icon: Mail }
];

const quickLinks = [
  "About Us",
  "New Arrivals",
  "Best Sellers",
  "Sale",
  "Size Guide",
  "FAQ"
];

const categories = [
  "Retro Fashion",
  "Pop Art Prints",
  "Vintage Accessories",
  "Home Decor",
  "Collectibles",
  "Gift Cards"
];

const legalLinks = ["Privacy Policy", "Terms of Service", "Return Policy"];

export default Footer;