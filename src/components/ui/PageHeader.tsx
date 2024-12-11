import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    subtitle?: string;
    backgroundImage: string;
    minHeight?: string;
}

export function PageHeader({
                               title,
                               subtitle,
                               backgroundImage,
                               minHeight = 'min-h-[40vh]'
                           }: PageHeaderProps) {
    return (
        <div className={`relative ${minHeight} flex items-center justify-center overflow-hidden`}>
            <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50 z-10" />
                <img
                    src={backgroundImage}
                    alt={title}
                    className="w-full h-full object-cover"
                />
            </motion.div>
            <div className="relative z-20 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl md:text-6xl font-bold text-white mb-4"
                >
                    {title}
                </motion.h1>
                {subtitle && (
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-xl text-gray-200"
                    >
                        {subtitle}
                    </motion.p>
                )}
            </div>
        </div>
    );
}