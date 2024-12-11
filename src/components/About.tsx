import { motion } from 'framer-motion';
import { Leaf, Heart, Zap } from 'lucide-react';

export function About() {
    const features = [
        {
            icon: <Leaf className="w-6 h-6" />,
            title: "Sustainable Materials",
            description: "Our shoes are crafted using eco-friendly materials and sustainable practices"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: "Supreme Comfort",
            description: "Engineered for all-day comfort with premium cushioning technology"
        },
        {
            icon: <Zap className="w-6 h-6" />,
            title: "Innovative Design",
            description: "Blending contemporary aesthetics with functional excellence"
        }
    ];

    return (
        <section className="py-20 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">Our Story</span>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Crafting Comfort, Designing Dreams</h2>
                        <div className="w-20 h-1 bg-black mb-8"></div>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            At Zen Shoe Hub, we believe in the perfect harmony between style, comfort, and sustainability.
                            Every step you take matters, and we're here to make each one count with our meticulously crafted footwear.
                        </p>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition-colors"
                        >
                            Learn More
                        </motion.button>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8">
                        {features.map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex items-start gap-6 bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                            >
                                <div className="bg-black text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}