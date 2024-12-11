import { motion } from 'framer-motion';
import { ShoppingBag, Heart } from 'lucide-react';

const products = [
    {
        id: 1,
        name: "Zen Runner Pro",
        price: "$129.99",
        image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
        tag: "Best Seller"
    },
    {
        id: 2,
        name: "Harmony Slip-On",
        price: "$89.99",
        image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
        tag: "New Arrival"
    },
    {
        id: 3,
        name: "Balance Boost",
        price: "$149.99",
        image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?auto=format&fit=crop&q=80",
        tag: "Limited Edition"
    }
];

export function FeaturedProducts() {
    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">Discover</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Collection</h2>
                    <div className="w-20 h-1 bg-black mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {products.map((product, index) => (
                        <motion.div
                            key={product.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative"
                        >
                            <div className="relative overflow-hidden rounded-2xl mb-4">
                                <div className="absolute top-4 left-4 z-10">
                  <span className="bg-black text-white text-xs px-3 py-1 rounded-full">
                    {product.tag}
                  </span>
                                </div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    transition={{ duration: 0.3 }}
                                    className="aspect-square"
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover"
                                    />
                                </motion.div>
                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white text-black p-3 rounded-full mr-2"
                                    >
                                        <ShoppingBag className="w-5 h-5" />
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        className="bg-white text-black p-3 rounded-full"
                                    >
                                        <Heart className="w-5 h-5" />
                                    </motion.button>
                                </div>
                            </div>
                            <div className="text-center">
                                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                                <p className="text-gray-600 mb-4">{product.price}</p>
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="bg-black text-white w-full py-3 rounded-lg hover:bg-gray-800 transition-colors"
                                >
                                    Add to Cart
                                </motion.button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}