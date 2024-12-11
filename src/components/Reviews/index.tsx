import { motion } from 'framer-motion';
import { ReviewCard } from './ReviewCard';

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
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.1 }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url('https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        filter: 'blur(4px)'
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
                        className="text-sm text-gray-500 uppercase tracking-wider mb-2 block"
                    >
                        Testimonials
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">What Our Customers Say</h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Real experiences from real people who love our shoes
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, index) => (
                        <ReviewCard
                            key={index}
                            {...review}
                            delay={index * 0.2}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-40 right-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute bottom-40 left-0 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        </section>
    );
}