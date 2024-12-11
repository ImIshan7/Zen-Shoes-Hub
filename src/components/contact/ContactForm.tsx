import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function ContactForm() {
    return (
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
        >
            <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
            <form className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Name
                    </label>
                    <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="text"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                        placeholder="Your name"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email
                    </label>
                    <motion.input
                        whileFocus={{ scale: 1.01 }}
                        type="email"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message
                    </label>
                    <motion.textarea
                        whileFocus={{ scale: 1.01 }}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-300"
                        placeholder="How can we help you?"
                    ></motion.textarea>
                </div>

                <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-black text-white py-4 rounded-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group"
                >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                </motion.button>
            </form>
        </motion.div>
    );
}