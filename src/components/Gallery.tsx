import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

export function Gallery() {
    const images = [
        {
            url: "https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&q=80",
            caption: "Street style perfection"
        },
        {
            url: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80",
            caption: "Urban comfort"
        },
        {
            url: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80",
            caption: "Classic elegance"
        },
        {
            url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80",
            caption: "Sport innovation"
        }
    ];

    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold mb-4">Style Gallery</h2>
                    <p className="text-gray-600 mb-8">Share your style with #ZenShoesHub</p>
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors"
                    >
                        <Instagram className="w-5 h-5" />
                        <span>Follow us on Instagram</span>
                    </a>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-xl"
                        >
                            <img
                                src={image.url}
                                alt={image.caption}
                                className="w-full h-80 object-cover transform group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <p className="text-white text-center px-4">{image.caption}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}