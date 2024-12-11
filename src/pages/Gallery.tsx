import { motion } from 'framer-motion';
import { Instagram, ArrowRight } from 'lucide-react';

const galleryImages = [
    {
        url: "https://images.unsplash.com/photo-1549298916-b41d501d3772",
        caption: "Street style perfection",
        category: "Street"
    },
    {
        url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a",
        caption: "Urban comfort",
        category: "Urban"
    },
    {
        url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519",
        caption: "Classic elegance",
        category: "Classic"
    },
    {
        url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
        caption: "Sport innovation",
        category: "Sport"
    },
    {
        url: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
        caption: "Modern minimalism",
        category: "Modern"
    },
    {
        url: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
        caption: "Casual comfort",
        category: "Casual"
    },
    {
        url: "https://images.unsplash.com/photo-1613987876445-552974627c98",
        caption: "Business class",
        category: "Formal"
    },
    {
        url: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77",
        caption: "Urban explorer",
        category: "Urban"
    }
];

export function Gallery() {
    return (
        <div className="pt-20">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="relative h-96 bg-black"
            >
                <img
                    src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80"
                    alt="Gallery Banner"
                    className="w-full h-full object-cover opacity-40"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                        <motion.h1
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-5xl md:text-6xl font-bold mb-4 text-white"
                        >
                            Style Gallery
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-xl text-gray-200"
                        >
                            Discover our latest collections and style inspirations
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="mt-8"
                        >
                            <a
                                href="#"
                                className="inline-flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
                            >
                                <Instagram className="w-6 h-6" />
                                <span>Follow us on Instagram</span>
                            </a>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            <div className="container mx-auto px-6 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {galleryImages.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl aspect-square"
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <div className="absolute bottom-0 left-0 right-0 p-6">
                                    <span className="text-sm text-gray-300 mb-2 block">{image.category}</span>
                                    <h3 className="text-xl font-semibold text-white mb-2">{image.caption}</h3>
                                    <motion.button
                                        whileHover={{ gap: '1rem' }}
                                        className="inline-flex items-center gap-2 text-white"
                                    >
                                        View Details <ArrowRight className="w-4 h-4" />
                                    </motion.button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}