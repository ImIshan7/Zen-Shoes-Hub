import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
    children: ReactNode;
    variant?: 'primary' | 'secondary';
    className?: string;
    onClick?: () => void;
}

export function Button({ children, variant = 'primary', className = '', onClick }: ButtonProps) {
    const baseStyles = "px-8 py-4 rounded-full font-semibold transition-all duration-300";
    const variants = {
        primary: "bg-gradient-to-r from-black to-gray-800 text-white hover:shadow-lg",
        secondary: "bg-white text-black hover:bg-gray-100"
    };

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`${baseStyles} ${variants[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </motion.button>
    );
}