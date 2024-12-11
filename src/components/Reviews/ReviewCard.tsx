import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

interface ReviewCardProps {
    name: string;
    avatar: string;
    rating: number;
    text: string;
    date: string;
    delay: number;
}

export function ReviewCard({ name, avatar, rating, text, date, delay }: ReviewCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-xl relative group hover:shadow-xl transition-all duration-300"
        >
            <Quote className="w-8 h-8 text-gray-300 absolute top-6 right-6 group-hover:text-black/20 transition-colors duration-300" />
            <div className="flex items-center gap-4 mb-6">
                <motion.img
                    initial={{ scale: 0.5 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: delay + 0.2 }}
                    src={avatar}
                    alt={name}
                    className="w-12 h-12 rounded-full object-cover ring-4 ring-white"
                />
                <div>
                    <h3 className="font-semibold">{name}</h3>
                    <div className="flex gap-1">
                        {Array(rating).fill(null).map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                        ))}
                    </div>
                </div>
            </div>
            <p className="text-gray-600 mb-4 leading-relaxed">{text}</p>
            <span className="text-sm text-gray-400">{date}</span>
        </motion.div>
    );
}