import { motion } from 'framer-motion';
import { Palette, Sparkles, Wand2 } from 'lucide-react';

export function Customization() {
    const steps = [
        {
            icon: <Palette className="w-6 h-6" />,
            title: "Choose Your Style",
            description: "Select from our range of base designs"
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: "Personalize",
            description: "Add custom colors, patterns, and materials"
        },
        {
            icon: <Wand2 className="w-6 h-6" />,
            title: "Make it Yours",
            description: "Add personal touches like monograms or custom soles"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Design Your Perfect Pair</h2>
                    <p className="text-gray-300">Create shoes that are uniquely yours</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="text-center group"
                        >
                            <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                            <p className="text-gray-300">{step.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center"
                >
                    <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                        Start Designing
                    </button>
                </motion.div>
            </div>
        </section>
    );
}