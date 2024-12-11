import { motion } from 'framer-motion';
import { Facebook, Twitter, Instagram, Youtube, Heart } from 'lucide-react';

export function Footer() {
    const footerSections = [
        {
            title: 'Shop',
            links: ['Men', 'Women', 'Kids', 'New Arrivals', 'Sale']
        },
        {
            title: 'Company',
            links: ['About Us', 'Careers', 'Press', 'Sustainability']
        },
        {
            title: 'Support',
            links: ['Help Center', 'Shipping', 'Returns', 'Size Guide']
        },
        {
            title: 'Legal',
            links: ['Terms', 'Privacy', 'Cookies', 'Compliance']
        }
    ];

    const socialLinks = [
        { icon: <Facebook className="w-5 h-5" />, href: '#' },
        { icon: <Twitter className="w-5 h-5" />, href: '#' },
        { icon: <Instagram className="w-5 h-5" />, href: '#' },
        { icon: <Youtube className="w-5 h-5" />, href: '#' }
    ];

    return (
        <footer className="bg-black text-white">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 py-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-2">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="text-2xl font-bold mb-6"
                        >
                            ZenShoeHub
                        </motion.h2>
                        <p className="text-gray-400 mb-6">
                            Step into comfort and style with our curated collection of premium footwear.
                            Join us in our journey towards sustainable and fashionable footwear.
                        </p>
                        <div className="flex gap-4">
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.href}
                                    initial={{ opacity: 0, scale: 0.5 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="bg-white/10 p-2 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    {social.icon}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Footer Sections */}
                    {footerSections.map((section, index) => (
                        <motion.div
                            key={section.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <h3 className="font-semibold mb-4">{section.title}</h3>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link}>
                                        <a
                                            href="#"
                                            className="text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 py-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">
                            © 2024 ZenShoeHub. All rights reserved.
                        </p>
                        <p className="text-gray-400 text-sm flex items-center gap-2">
                            Made with <Heart className="w-4 h-4 text-red-500" /> by ZenShoeHub Team
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}