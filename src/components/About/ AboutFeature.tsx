import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface AboutFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

export function AboutFeature({ icon: Icon, title, description, delay }: AboutFeatureProps) {
    return (
        <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="flex items-start gap-6 bg-white/80 backdrop-blur-sm p-6 rounded-xl hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] group"
        >
            <div className="bg-gradient-to-br from-black to-gray-700 text-white w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-6 h-6" />
            </div>
            <div>
                <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                    {title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{description}</p>
            </div>
        </motion.div>
    );
}