import { motion } from 'framer-motion';

export function AboutHero() {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
        >
            <span className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">Our Story</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-black via-gray-700 to-black bg-clip-text text-transparent">
                Crafting Comfort, Designing Dreams
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-black to-gray-700 mb-8"></div>
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
            >
                <div className="absolute -top-6 -left-6 w-20 h-20 bg-gray-100 rounded-full opacity-50 blur-2xl"></div>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed relative z-10">
                    At Zen Shoe Hub, we believe in the perfect harmony between style, comfort, and sustainability.
                    Every step you take matters, and we're here to make each one count with our meticulously crafted footwear.
                    Our commitment to excellence drives us to innovate and create shoes that not only look exceptional but feel extraordinary.
                </p>
            </motion.div>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-black to-gray-800 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
                Discover Our Journey
            </motion.button>
        </motion.div>
    );
}