import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, X, CreditCard, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import { useCartStore } from '../../store/cartStore';
import { CartItem } from './CartItem';

export function Cart() {
    const [isOpen, setIsOpen] = useState(false);
    const { items, removeItem, updateQuantity, total } = useCartStore();

    return (
        <>
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(true)}
                className="fixed right-6 bottom-6 bg-black text-white p-4 rounded-full shadow-lg"
            >
                <ShoppingBag className="w-6 h-6" />
                {items.length > 0 && (
                    <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 bg-red-500 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-medium"
                    >
                        {items.length}
                    </motion.span>
                )}
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black z-40"
                        />
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-gray-50 shadow-xl z-50"
                        >
                            <div className="flex flex-col h-full">
                                <div className="p-6 bg-white shadow-sm">
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            <ShoppingBag className="w-6 h-6" />
                                            <h2 className="text-2xl font-bold">Your Cart</h2>
                                        </div>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={() => setIsOpen(false)}
                                            className="p-2 hover:bg-gray-100 rounded-full"
                                        >
                                            <X className="w-6 h-6" />
                                        </motion.button>
                                    </div>
                                </div>

                                {items.length === 0 ? (
                                    <div className="flex-grow flex flex-col items-center justify-center p-6">
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            className="bg-gray-100 p-6 rounded-full mb-4"
                                        >
                                            <ShoppingBag className="w-12 h-12 text-gray-400" />
                                        </motion.div>
                                        <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                                        <p className="text-gray-500 text-center mb-6">
                                            Looks like you haven't added any items yet
                                        </p>
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            onClick={() => setIsOpen(false)}
                                            className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-2"
                                        >
                                            Continue Shopping
                                            <ArrowRight className="w-4 h-4" />
                                        </motion.button>
                                    </div>
                                ) : (
                                    <>
                                        <div className="flex-grow overflow-auto p-6 space-y-4">
                                            <AnimatePresence>
                                                {items.map((item) => (
                                                    <CartItem
                                                        key={item.id}
                                                        item={item}
                                                        onUpdateQuantity={updateQuantity}
                                                        onRemove={removeItem}
                                                    />
                                                ))}
                                            </AnimatePresence>
                                        </div>

                                        <div className="p-6 bg-white shadow-lg">
                                            <div className="space-y-4">
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Subtotal</span>
                                                    <span>${total.toFixed(2)}</span>
                                                </div>
                                                <div className="flex justify-between text-sm">
                                                    <span className="text-gray-500">Shipping</span>
                                                    <span>Free</span>
                                                </div>
                                                <div className="border-t pt-4 flex justify-between items-center">
                                                    <span className="text-lg font-semibold">Total</span>
                                                    <span className="text-2xl font-bold">${total.toFixed(2)}</span>
                                                </div>
                                                <motion.button
                                                    whileHover={{ scale: 1.02 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    className="w-full bg-black text-white py-4 rounded-xl flex items-center justify-center gap-2 font-semibold"
                                                >
                                                    <CreditCard className="w-5 h-5" />
                                                    Checkout
                                                </motion.button>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}