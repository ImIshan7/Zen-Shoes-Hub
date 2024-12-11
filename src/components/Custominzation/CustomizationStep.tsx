import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CustomizationStepProps {
    icon: LucideIcon;
    title: string;
    description: string;
    delay: number;
}

export function CustomizationStep({ icon: Icon, title, description, delay }: CustomizationStepProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="text-center group"
        >
            <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all duration-300 shadow-lg"
            >
                <Icon className="w-6 h-6" />
            </motion.div>
            <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
            <p className="text-gray-300">{description}</p>
        </motion.div>
    );
}