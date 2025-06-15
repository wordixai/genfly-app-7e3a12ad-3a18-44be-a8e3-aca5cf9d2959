import { motion } from "framer-motion";
import { Heart, ShoppingCart, Star, Zap } from "lucide-react";

const ProductGrid = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-6xl font-bold comic-title text-white text-stroke mb-6">
            TRENDING NOW!
          </h2>
          <div className="speech-bubble inline-block">
            <p className="handwritten text-xl text-black font-semibold">
              Hot picks that everyone's talking about! 🔥
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="pop-frame bg-white overflow-hidden">
                <div className="relative">
                  {/* Product Image */}
                  <div className="h-72 bg-gradient-to-br from-orange-200 to-pink-200 flex items-center justify-center text-6xl">
                    {product.emoji}
                  </div>
                  
                  {/* Badges */}
                  <div className="absolute top-4 left-4 flex flex-col gap-2">
                    {product.isNew && (
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-bold border-2 border-black comic-title">
                        NEW!
                      </span>
                    )}
                    {product.isHot && (
                      <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold border-2 border-black comic-title">
                        HOT! 🔥
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="bg-white border-2 border-black p-2 rounded-full hover:bg-pink-100 transition-colors"
                    >
                      <Heart size={20} />
                    </motion.button>
                  </div>
                </div>

                {/* Product Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold handwritten text-black group-hover:text-orange-500 transition-colors">
                      {product.name}
                    </h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={i < product.rating ? "text-yellow-400 fill-current" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="handwritten text-gray-600 mb-4">
                    {product.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      {product.originalPrice && (
                        <span className="text-lg text-gray-400 line-through handwritten">
                          ${product.originalPrice}
                        </span>
                      )}
                      <span className="text-2xl font-bold comic-title text-orange-500">
                        ${product.price}
                      </span>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-gradient-to-r from-orange-500 to-pink-500 text-white px-4 py-2 rounded-full font-bold border-2 border-black hover:shadow-lg transition-all duration-300 flex items-center gap-2"
                    >
                      <ShoppingCart size={20} />
                      <span className="handwritten">Add to Cart</span>
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-comic bounce-btn">
            LOAD MORE AWESOME STUFF!
          </button>
        </motion.div>
      </div>
    </section>
  );
};

const products = [
  {
    id: 1,
    name: "Retro Sunglasses",
    emoji: "🕶️",
    description: "Classic aviator style with modern UV protection",
    price: 89,
    originalPrice: 120,
    rating: 5,
    isNew: true,
    isHot: false
  },
  {
    id: 2,
    name: "Pop Art T-Shirt",
    emoji: "👕",
    description: "Vibrant comic-style graphic print",
    price: 45,
    originalPrice: null,
    rating: 4,
    isNew: false,
    isHot: true
  },
  {
    id: 3,
    name: "Vintage Vinyl Record",
    emoji: "📀",
    description: "Original 70s disco hits collection",
    price: 35,
    originalPrice: 50,
    rating: 5,
    isNew: false,
    isHot: true
  },
  {
    id: 4,
    name: "Neon Wall Art",
    emoji: "🎨",
    description: "LED neon sign with retro vibes",
    price: 199,
    originalPrice: null,
    rating: 4,
    isNew: true,
    isHot: false
  },
  {
    id: 5,
    name: "Funky Sneakers",
    emoji: "👟",
    description: "Colorful high-tops with platform sole",
    price: 129,
    originalPrice: 180,
    rating: 5,
    isNew: false,
    isHot: true
  },
  {
    id: 6,
    name: "Retro Radio",
    emoji: "📻",
    description: "Bluetooth speaker with vintage design",
    price: 79,
    originalPrice: null,
    rating: 4,
    isNew: true,
    isHot: false
  }
];

export default ProductGrid;