import { motion } from 'framer-motion';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    description?: string;
    align?: 'left' | 'center';
    theme?: 'light' | 'dark';
}

export function SectionTitle({
                                 title,
                                 subtitle,
                                 description,
                                 align = 'center',
                                 theme = 'light'
                             }: SectionTitleProps) {
    const alignments = {
        center: 'text-center',
        left: 'text-left'
    };

    const themes = {
        light: {
            subtitle: 'text-gray-500',
            title: 'text-black',
            description: 'text-gray-600'
        },
        dark: {
            subtitle: 'text-gray-300',
            title: 'text-white',
            description: 'text-gray-200'
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`mb-16 ${alignments[align]}`}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className={`text-sm uppercase tracking-wider mb-2 block ${themes[theme].subtitle}`}
                >
                    {subtitle}
                </motion.span>
            )}
            <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${themes[theme].title}`}>
                {title}
            </h2>
            <div className={`w-20 h-1 bg-black ${align === 'center' ? 'mx-auto' : ''} mb-6`}></div>
            {description && (
                <p className={`${themes[theme].description} max-w-2xl ${align === 'center' ? 'mx-auto' : ''}`}>
                    {description}
                </p>
            )}
        </motion.div>
    );
}