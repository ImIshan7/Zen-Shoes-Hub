import { motion } from 'framer-motion';
import { Heart, Leaf, Shield, Smile } from 'lucide-react';
import { AboutFeature } from './ AboutFeature';
import { AboutStats } from './AboutStats';
import { AboutVideo } from './AboutVideo';
import { Section } from '../ui/Section';
import { SectionTitle } from '../ui/SectionTitle';

export function About() {
    const features = [
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

    return (
        <Section background="light">
            <div className="space-y-20">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="relative"
                >
                    <SectionTitle
                        title="Our Story"
                        subtitle="About Us"
                        align="center"
                    />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                                Crafting Dreams, One Step at a Time
                            </h2>
                            <p className="text-gray-600 leading-relaxed">
                                At ZenShoeHub, we believe that every step you take should be a perfect blend of comfort and style.
                                Our journey began with a simple vision: to create footwear that not only looks exceptional but feels
                                extraordinary.
                            </p>
                            <AboutStats />
                        </motion.div>

                        <AboutVideo />
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {features.map((feature, index) => (
                        <AboutFeature
                            key={index}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                            delay={index * 0.1}
                        />
                    ))}
                </div>

                {/* Background Decorations */}
                <div className="absolute top-40 right-0 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-40 left-0 w-72 h-72 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            </div>
        </Section>
    );
}