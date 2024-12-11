import { motion } from 'framer-motion';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { CartItem as CartItemType } from '../../store/cartStore';

interface CartItemProps {
    item: CartItemType;
    onUpdateQuantity: (id: number, quantity: number) => void;
    onRemove: (id: number) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="flex gap-4 bg-white p-4 rounded-xl shadow-sm"
        >
            <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5"></div>
            </div>

            <div className="flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-600 text-sm mb-2">${item.price.toFixed(2)}</p>

                <div className="flex items-center gap-3">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                        className="p-1 hover:bg-gray-100 rounded-full"
                    >
                        <Minus className="w-4 h-4" />
                    </motion.button>

                    <span className="w-8 text-center font-medium">{item.quantity}</span>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded-full"
                    >
                        <Plus className="w-4 h-4" />
                    </motion.button>
                </div>
            </div>

            <div className="flex flex-col justify-between items-end">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => onRemove(item.id)}
                    className="text-red-500 hover:text-red-600 p-1"
                >
                    <Trash2 className="w-5 h-5" />
                </motion.button>
                <p className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                </p>
            </div>
        </motion.div>
    );
}