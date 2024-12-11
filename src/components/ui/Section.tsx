import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    className?: string;
    background?: 'light' | 'dark' | 'gradient';
    backgroundImage?: string;
}

export function Section({
                            children,
                            className = '',
                            background = 'light',
                            backgroundImage
                        }: SectionProps) {
    const backgrounds = {
        light: 'bg-gradient-to-br from-white via-gray-50 to-white',
        dark: 'bg-gradient-to-br from-gray-900 via-black to-gray-800',
        gradient: 'bg-gradient-to-br from-gray-900 via-black to-gray-800'
    };

    return (
        <section className={`py-20 relative overflow-hidden ${backgrounds[background]} ${className}`}>
            {backgroundImage && (
                <div className="absolute inset-0">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1 }}
                        transition={{ duration: 2 }}
                        className="absolute inset-0"
                        style={{
                            backgroundImage: `url('${backgroundImage}')`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'blur(4px)'
                        }}
                    />
                </div>
            )}
            <div className="container mx-auto px-6 relative z-10">
                {children}
            </div>
        </section>
    );
}