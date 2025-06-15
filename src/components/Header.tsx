import { motion } from "framer-motion";
import { ShoppingBag, Search, Menu, Heart, User } from "lucide-react";

const Header = () => {
  return (
    <header className="relative z-50">
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
        className="bg-white border-b-8 border-black shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="flex items-center"
            >
              <h1 className="text-4xl font-bold comic-title text-black">
                <span className="text-orange-500">POP</span>
                <span className="text-pink-500">SHOP!</span>
              </h1>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="ml-2 text-2xl"
              >
                ⭐
              </motion.div>
            </motion.div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.a
                  key={item}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="handwritten text-xl font-semibold text-black hover:text-orange-500 transition-colors"
                >
                  {item}
                </motion.a>
              ))}
            </nav>

            {/* Action Icons */}
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:text-orange-500 transition-colors"
              >
                <Search size={28} />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:text-pink-500 transition-colors relative"
              >
                <Heart size={28} />
                <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                  2
                </span>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 hover:text-orange-500 transition-colors"
              >
                <User size={28} />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.2, rotate: -10 }}
                whileTap={{ scale: 0.9 }}
                className="btn-comic relative"
              >
                <ShoppingBag size={24} />
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="absolute -top-2 -right-2 bg-yellow-400 text-black text-sm rounded-full w-6 h-6 flex items-center justify-center font-bold border-2 border-black"
                >
                  3
                </motion.span>
              </motion.button>

              <button className="md:hidden p-2">
                <Menu size={28} />
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </header>
  );
};

const navItems = ["New Arrivals", "Fashion", "Art", "Accessories", "Sale"];

export default Header;