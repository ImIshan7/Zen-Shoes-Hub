import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

export function Reviews() {
    const reviews = [
        {
            name: "Sarah Johnson",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            rating: 5,
            text: "The most comfortable shoes I've ever worn. The customization options are amazing!",
            date: "March 15, 2024"
        },
        {
            name: "Michael Chen",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            rating: 5,
            text: "Exceptional quality and style. These shoes have become my go-to for every occasion.",
            date: "March 12, 2024"
        },
        {
            name: "Emma Davis",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80",
            rating: 5,
            text: "The attention to detail and customer service is unmatched. Highly recommended!",
            date: "March 10, 2024"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
                    <p className="text-gray-600">Real experiences from real people</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-gray-50 p-8 rounded-xl relative"
                        >
                            <Quote className="w-8 h-8 text-gray-300 absolute top-6 right-6" />
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={review.avatar}
                                    alt={review.name}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h3 className="font-semibold">{review.name}</h3>
                                    <div className="flex gap-1">
                                        {Array(review.rating).fill(null).map((_, i) => (
                                            <Star key={i} className="w-4 h-4 fill-current text-yellow-400" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-gray-600 mb-4">{review.text}</p>
                            <span className="text-sm text-gray-400">{review.date}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}