import { motion } from 'framer-motion';

export function AboutVideo() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-2xl group"
        >
            <video
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-[400px] object-cover transform group-hover:scale-105 transition-transform duration-700"
            >
                <source src="https://static.videezy.com/system/resources/previews/000/038/626/original/footwear.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 p-8 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white text-2xl font-bold mb-2">Crafted with Passion</h3>
                <p className="text-gray-200">Every stitch tells a story of dedication</p>
            </div>
        </motion.div>
    );
}