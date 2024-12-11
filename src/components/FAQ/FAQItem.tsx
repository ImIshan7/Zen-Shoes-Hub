import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
    delay: number;
}

export function FAQItem({ question, answer, isOpen, onToggle, delay }: FAQItemProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay }}
            className="mb-4"
        >
            <motion.button
                whileHover={{ scale: 1.01 }}
                onClick={onToggle}
                className="w-full flex items-center justify-between p-6 bg-white/80 backdrop-blur-sm hover:bg-white transition-colors rounded-xl"
            >
                <span className="font-semibold text-left">{question}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                >
                    <ChevronDown className="w-5 h-5" />
                </motion.div>
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="p-6 bg-white/60 backdrop-blur-sm rounded-b-xl">
                            <p className="text-gray-600 leading-relaxed">{answer}</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}