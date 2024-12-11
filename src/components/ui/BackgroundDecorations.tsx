import { motion } from 'framer-motion';

interface BackgroundDecorationsProps {
    colors?: {
        first: string;
        second: string;
    };
}

export function BackgroundDecorations({
                                          colors = { first: 'bg-blue-200', second: 'bg-purple-200' }
                                      }: BackgroundDecorationsProps) {
    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                className={`absolute top-40 right-0 w-72 h-72 ${colors.first} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob`}
            />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className={`absolute bottom-40 left-0 w-72 h-72 ${colors.second} rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000`}
            />
        </>
    );
}