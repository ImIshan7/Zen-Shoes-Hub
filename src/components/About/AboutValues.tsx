import { motion } from 'framer-motion';
import { Heart, Leaf, Shield, Smile } from 'lucide-react';

const values = [
    {
        icon: Heart,
        title: 'Passion for Quality',
        description: 'Every shoe is crafted with meticulous attention to detail and love for perfection.'
    },
    {
        icon: Leaf,
        title: 'Sustainable Future',
        description: 'Committed to eco-friendly materials and responsible manufacturing practices.'
    },
    {
        icon: Shield,
        title: 'Customer Trust',
        description: 'Building lasting relationships through transparency and reliability.'
    },
    {
        icon: Smile,
        title: 'Customer Happiness',
        description: 'Your satisfaction is our ultimate goal and driving force.'
    }
];

export function AboutValues() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => {
                const Icon = value.icon;
                return (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all duration-300"
                    >
                        <div className="flex items-center gap-4 mb-4">
                            <div className="bg-gradient-to-br from-black to-gray-700 p-3 rounded-lg">
                                <Icon className="w-6 h-6 text-white" />
                            </div>
                            <h3 className="text-xl font-semibold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                                {value.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 pl-14">{value.description}</p>
                    </motion.div>
                );
            })}
        </div>
    );
}