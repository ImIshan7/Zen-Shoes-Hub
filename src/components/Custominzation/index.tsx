import { motion } from 'framer-motion';
import { Palette, Sparkles, Wand2 } from 'lucide-react';
import { CustomizationStep } from './CustomizationStep';

export function Customization() {
    const steps = [
        {
            icon: Palette,
            title: "Choose Your Style",
            description: "Select from our curated range of base designs and silhouettes that match your taste."
        },
        {
            icon: Sparkles,
            title: "Personalize",
            description: "Make it uniquely yours with custom colors, premium materials, and exclusive patterns."
        },
        {
            icon: Wand2,
            title: "Make it Yours",
            description: "Add finishing touches with personalized details, monograms, or custom soles."
        }
    ];

    return (
        <section className="relative py-20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-800">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.2 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(8px)'
                    }}
                />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-sm text-gray-300 uppercase tracking-wider mb-2 block"
                    >
                        Your Perfect Pair
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">Design Your Dream Shoes</h2>
                    <div className="w-20 h-1 bg-white/50 mx-auto mb-6"></div>
                    <p className="text-gray-300 max-w-2xl mx-auto">
                        Create shoes that are uniquely yours with our intuitive customization platform
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    {steps.map((step, index) => (
                        <CustomizationStep
                            key={index}
                            icon={step.icon}
                            title={step.title}
                            description={step.description}
                            delay={index * 0.2}
                        />
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300"
                    >
                        Start Designing Now
                    </motion.button>
                </motion.div>
            </div>
        </section>
    );
}