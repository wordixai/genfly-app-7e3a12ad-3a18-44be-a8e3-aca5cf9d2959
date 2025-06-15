import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      {/* Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-10 right-10 text-6xl opacity-50"
      >
        💫
      </motion.div>
      
      <motion.div
        animate={{ y: [-10, 10, -10] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-20 left-10 text-5xl opacity-60"
      >
        🌟
      </motion.div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-7xl lg:text-8xl font-bold comic-title text-white text-stroke mb-6"
            >
              SUPER
              <br />
              <span className="text-yellow-300">GROOVY</span>
              <br />
              STORE!
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="speech-bubble mb-8 max-w-lg mx-auto lg:mx-0"
            >
              <p className="handwritten text-2xl text-black font-semibold">
                Welcome to the most explosive shopping experience! 
                Find unique retro fashion & pop art that screams YOU!
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button className="btn-comic bounce-btn group">
                START SHOPPING!
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="inline-block ml-2"
                >
                  <ArrowRight size={20} />
                </motion.span>
              </button>
              
              <button className="handwritten text-xl bg-transparent border-4 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition-all duration-300 font-semibold">
                View Collections
              </button>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="pop-frame bg-white p-8 text-center float-animation">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-8xl mb-4"
              >
                🛍️
              </motion.div>
              
              <h2 className="text-4xl font-bold comic-title text-black mb-4">
                NEW ARRIVALS!
              </h2>
              
              <div className="grid grid-cols-2 gap-4 text-center">
                <div className="bg-orange-100 p-4 rounded-xl border-2 border-black">
                  <div className="text-2xl mb-2">👕</div>
                  <p className="handwritten font-semibold text-black">Fashion</p>
                </div>
                <div className="bg-pink-100 p-4 rounded-xl border-2 border-black">
                  <div className="text-2xl mb-2">🎨</div>
                  <p className="handwritten font-semibold text-black">Art</p>
                </div>
                <div className="bg-yellow-100 p-4 rounded-xl border-2 border-black">
                  <div className="text-2xl mb-2">👓</div>
                  <p className="handwritten font-semibold text-black">Accessories</p>
                </div>
                <div className="bg-green-100 p-4 rounded-xl border-2 border-black">
                  <div className="text-2xl mb-2">🏠</div>
                  <p className="handwritten font-semibold text-black">Decor</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -top-4 -right-4 bg-yellow-400 border-4 border-black rounded-full p-4"
            >
              <Sparkles size={32} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;