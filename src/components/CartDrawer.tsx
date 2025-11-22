import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingBag, Plus, Minus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'sonner';
import { formatPrice } from '../utils/formatPrice';

const CartDrawer: React.FC = () => {
    const { cart, isCartOpen, toggleCart, removeFromCart, updateQuantity, cleanCart } = useCart();
    const total = cart.reduce((acc, item) => acc + (Number(typeof item.price === 'string' ? item.price.replace(/[^0-9,]/g, '').replace(',', '.') : item.price) * item.quantity), 0);


    const handleCheckout = () => {
        // const body = cart.map(i => `${i.quantity}x ${i.name} - ${i.price}`).join('%0D%0A');
        // Caso queira enviar o email descomente a linha abaixo
        //window.location.href = `mailto:loja@exemplo.com?subject=Novo Pedido&body=Gostaria de comprar:%0D%0A${body}`;
        toast.success("Redirecionando para o cliente de email com o resumo do pedido.");
        cleanCart();
    };

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => toggleCart(false)}
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                    />
                    <motion.div
                        initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-white z-50 shadow-2xl p-6 flex flex-col"
                    >
                        <div className="flex items-center justify-between mb-8">
                            <h2 className="text-2xl font-bold">Sua Sacola</h2>
                            <button onClick={() => toggleCart(false)} className="p-2 hover:bg-gray-100 rounded-full">
                                <X size={24} />
                            </button>
                        </div>

                        <div className="flex-1 overflow-y-auto space-y-6">
                            {cart.length === 0 ? (
                                <div className="text-center text-gray-400 mt-20">
                                    <ShoppingBag size={48} className="mx-auto mb-4 opacity-20" />
                                    <p>Sua sacola está vazia.</p>
                                </div>
                            ) : (
                                cart.map(item => (
                                    <div key={item.id} className="flex gap-4 items-center border-b border-gray-50 pb-6">
                                        <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-xl bg-gray-50" />
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-gray-900">{item.name}</h3>
                                            <p className="text-gray-500 text-sm mb-2">{item.price}</p>
                                            <div className="flex items-center gap-3">
                                                <button onClick={() => updateQuantity(item.id, -1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200">
                                                    <Minus size={14} />
                                                </button>
                                                <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)} className="p-1 bg-gray-100 rounded hover:bg-gray-200">
                                                    <Plus size={14} />
                                                </button>
                                            </div>
                                        </div>
                                        <button onClick={() => removeFromCart(item.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                                            <X size={18} />
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="border-t border-gray-100 pt-6 mt-6">
                            <div className="flex justify-between items-center mb-6">
                                <span className="text-gray-500">Total Estimado</span>
                                <span className="text-2xl font-bold">{formatPrice(total)}</span>
                            </div>
                            <button
                                onClick={handleCheckout}
                                disabled={cart.length === 0}
                                className="w-full bg-black text-white py-4 rounded-xl font-semibold hover:bg-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                Finalizar Compra
                            </button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
