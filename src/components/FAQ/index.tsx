import { useState } from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const faqs = [
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for unworn items in their original packaging. Customized shoes cannot be returned unless defective."
        },
        {
            question: "How long does shipping take?",
            answer: "Standard shipping takes 3-5 business days. Express shipping options are available at checkout for faster delivery."
        },
        {
            question: "Do you offer international shipping?",
            answer: "Yes, we ship to most countries worldwide. Shipping times and costs vary by location."
        },
        {
            question: "How do I find my correct shoe size?",
            answer: "Use our size guide to measure your feet. We recommend measuring in the evening when feet are at their largest."
        },
        {
            question: "Can I modify my order after placing it?",
            answer: "Orders can be modified within 1 hour of placement. Contact customer service for assistance."
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
                        backgroundImage: `url('https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?auto=format&fit=crop&q=80')`,
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
                        Help Center
                    </motion.span>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                    <div className="w-20 h-1 bg-black mx-auto mb-6"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Find answers to common questions about our products and services
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto">
                    {faqs.map((faq, index) => (
                        <FAQItem
                            key={index}
                            question={faq.question}
                            answer={faq.answer}
                            isOpen={openIndex === index}
                            onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                            delay={index * 0.1}
                        />
                    ))}
                </div>
            </div>

            {/* Background Decorations */}
            <div className="absolute top-40 right-0 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob" />
            <div className="absolute bottom-40 left-0 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000" />
        </section>
    );
}