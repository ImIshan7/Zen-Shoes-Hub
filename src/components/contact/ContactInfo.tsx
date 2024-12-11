import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function ContactInfo() {
    const contactDetails = [
        {
            icon: MapPin,
            title: "Visit Our Store",
            content: "123 Fashion Street, New York, NY 10001",
        },
        {
            icon: Clock,
            title: "Business Hours",
            content: "Mon - Fri: 9:00 AM - 8:00 PM\nSat - Sun: 10:00 AM - 6:00 PM",
        },
        {
            icon: Phone,
            title: "Call Us",
            content: "+1 (555) 123-4567",
        },
        {
            icon: Mail,
            title: "Email Us",
            content: "support@zenshoehub.com",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
        >
            <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                    We're here to help! Reach out to us through any of these channels.
                </p>
            </div>

            <div className="space-y-6">
                {contactDetails.map((detail, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 10 }}
                        className="flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-xl hover:shadow-lg transition-all duration-300"
                    >
                        <div className="bg-black p-3 rounded-lg">
                            <detail.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                            <h3 className="font-semibold mb-1">{detail.title}</h3>
                            {detail.content.split('\n').map((line, i) => (
                                <p key={i} className="text-gray-600">{line}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}