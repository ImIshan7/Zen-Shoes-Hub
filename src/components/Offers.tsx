import { motion } from 'framer-motion';
import { Percent, Gift, Crown, ArrowRight } from 'lucide-react';

export function Offers() {
    const offers = [
        {
            title: "Spring Sale",
            description: "Get up to 40% off on selected items",
            code: "SPRING40",
            icon: <Percent className="w-6 h-6" />,
            bgImage: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
        },
        {
            title: "Member Rewards",
            description: "Join our loyalty program for exclusive benefits",
            code: "VIP2024",
            icon: <Crown className="w-6 h-6" />,
            bgImage: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80"
        },
        {
            title: "Gift Card",
            description: "Give the perfect gift with our e-gift cards",
            code: "GIFT100",
            icon: <Gift className="w-6 h-6" />,
            bgImage: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80"
        }
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-sm text-gray-500 uppercase tracking-wider mb-2 block">Limited Time</span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Special Offers</h2>
                    <div className="w-20 h-1 bg-black mx-auto"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {offers.map((offer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="group relative overflow-hidden rounded-2xl"
                        >
                            <div className="absolute inset-0">
                                <img
                                    src={offer.bgImage}
                                    alt={offer.title}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-colors"></div>
                            </div>

                            <div className="relative p-8 h-full flex flex-col">
                                <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                                    {offer.icon}
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-4">{offer.title}</h3>
                                <p className="text-gray-300 mb-6">{offer.description}</p>
                                <div className="mt-auto">
                                    <div className="bg-white/10 p-3 rounded-lg text-center mb-4">
                                        <span className="font-mono font-semibold text-white">{offer.code}</span>
                                    </div>
                                    <motion.button
                                        whileHover={{ gap: '1rem' }}
                                        className="flex items-center justify-center gap-2 text-white group/btn w-full"
                                    >
                                        <span>Claim Offer</span>
                                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}