import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ShoppingBag, Search, User } from 'lucide-react';
import { NavMenu } from './Navbar/NavMenu';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Home', href: '/' },
        { name: 'Shop', href: '/shop' },
        { name: 'Gallery', href: '/gallery' },
        { name: 'Contact', href: '/contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed w-full z-50 transition-all duration-300 ${
                isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
            }`}
        >
            <div className="container mx-auto px-6">
                <div className="flex items-center justify-between h-20">
                    <motion.h1
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className={`text-2xl font-bold transition-colors ${
                            isScrolled ? 'text-black' : 'text-white'
                        }`}
                    >
                        <Link to="/">ZenShoeHub</Link>
                    </motion.h1>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <NavMenu
                            items={navItems}
                            currentPath={location.pathname}
                        />
                    </div>

                    {/* Icons */}
                    <div className="hidden md:flex items-center gap-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-center gap-4"
                        >
                            <Search className={`w-5 h-5 cursor-pointer transition-colors ${
                                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
                            }`} />
                            <User className={`w-5 h-5 cursor-pointer transition-colors ${
                                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
                            }`} />
                            <ShoppingBag className={`w-5 h-5 cursor-pointer transition-colors ${
                                isScrolled ? 'text-gray-600 hover:text-black' : 'text-white hover:text-gray-200'
                            }`} />
                        </motion.div>
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="md:hidden"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? (
                            <X className={isScrolled ? 'text-black' : 'text-white'} />
                        ) : (
                            <Menu className={isScrolled ? 'text-black' : 'text-white'} />
                        )}
                    </motion.button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t"
                    >
                        <div className="container mx-auto px-6 py-4">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`block py-3 text-gray-600 hover:text-black transition-colors ${
                                        location.pathname === item.href ? 'text-black font-semibold' : ''
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="flex items-center gap-4 pt-4 border-t mt-4">
                                <Search className="w-5 h-5 text-gray-600" />
                                <User className="w-5 h-5 text-gray-600" />
                                <ShoppingBag className="w-5 h-5 text-gray-600" />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}