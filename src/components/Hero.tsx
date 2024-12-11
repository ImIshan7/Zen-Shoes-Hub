import { motion } from 'framer-motion';
import { ShoppingBag, ArrowRight } from 'lucide-react';

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                <motion.div
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.5 }}
                    className="relative h-full"
                >
                    <img
                        src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
                        alt="Hero"
                        className="w-full h-full object-cover"
                    />
                </motion.div>
            </div>

            <div className="container mx-auto px-6 relative z-20">
                <div className="max-w-3xl">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-300 uppercase tracking-wider mb-6 block"
                    >
                        Welcome to ZenShoeHub
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="text-5xl md:text-7xl font-bold text-white mb-6"
                    >
                        Step into Your Perfect Style
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-gray-200 mb-8 leading-relaxed"
                    >
                        Discover our curated collection of premium footwear that combines
                        timeless elegance with modern comfort. Each pair tells a story of
                        craftsmanship and style.
                    </motion.p>

                    <div className="flex flex-wrap gap-4">
                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-white text-black px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Shop Collection
                        </motion.button>

                        <motion.button
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1 }}
                            whileHover={{ scale: 1.05, gap: '0.75rem' }}
                            whileTap={{ scale: 0.95 }}
                            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold flex items-center gap-2 hover:bg-white/10 transition-colors"
                        >
                            Learn More
                            <ArrowRight className="w-5 h-5" />
                        </motion.button>
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="absolute bottom-8 left-0 right-0 z-20"
            >
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "Free Shipping", desc: "On orders over $100" },
                            { title: "Easy Returns", desc: "30-day return policy" },
                            { title: "Secure Payment", desc: "100% secure checkout" }
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 1.4 + index * 0.2 }}
                                className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-white"
                            >
                                <h3 className="font-semibold mb-1">{feature.title}</h3>
                                <p className="text-gray-200 text-sm">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.div>
        </section>
    );
}