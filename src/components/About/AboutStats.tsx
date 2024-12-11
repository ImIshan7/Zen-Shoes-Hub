import { motion } from 'framer-motion';

const stats = [
    { value: '50K+', label: 'Happy Customers' },
    { value: '100+', label: 'Shoe Designs' },
    { value: '30+', label: 'Countries' },
    { value: '95%', label: 'Satisfaction Rate' }
];

export function AboutStats() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {stats.map((stat, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="text-center group"
                >
                    <motion.div
                        initial={{ scale: 0.5 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 + 0.2, type: "spring" }}
                        className="relative mb-4"
                    >
                        <div className="absolute inset-0 bg-black/5 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                        <span className="relative block text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
              {stat.value}
            </span>
                    </motion.div>
                    <span className="text-gray-600 group-hover:text-black transition-colors duration-300">
            {stat.label}
          </span>
                </motion.div>
            ))}
        </div>
    );
}