import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function Blog() {
    const articles = [
        {
            title: "The Ultimate Guide to Shoe Care",
            excerpt: "Learn how to keep your shoes looking fresh and lasting longer with our expert tips.",
            image: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&q=80",
            category: "Care Guide"
        },
        {
            title: "Spring 2024 Shoe Trends",
            excerpt: "Discover the hottest shoe trends that will dominate the fashion scene this spring.",
            image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?auto=format&fit=crop&q=80",
            category: "Fashion"
        },
        {
            title: "Sustainable Footwear Revolution",
            excerpt: "How eco-friendly materials are changing the future of shoe manufacturing.",
            image: "https://images.unsplash.com/photo-1491553895911-0055eca6402d?auto=format&fit=crop&q=80",
            category: "Sustainability"
        }
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4">Latest Articles</h2>
                    <p className="text-gray-600">Stay updated with shoe care tips and trends</p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((article, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
                        >
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={article.image}
                                    alt={article.title}
                                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-6">
                                <span className="text-sm text-gray-500 mb-2 block">{article.category}</span>
                                <h3 className="text-xl font-semibold mb-4">{article.title}</h3>
                                <p className="text-gray-600 mb-6">{article.excerpt}</p>
                                <a
                                    href="#"
                                    className="inline-flex items-center gap-2 text-black hover:gap-4 transition-all"
                                >
                                    Read More <ArrowRight className="w-4 h-4" />
                                </a>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}