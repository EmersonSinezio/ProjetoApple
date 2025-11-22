import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star } from 'lucide-react';
import { formatPrice } from '../utils/formatPrice';
import { useCart } from '../context/CartContext';

interface Product {
    id: number;
    name: string;
    tagline: string;
    price: number;
    image: string;
    description: string;
    features: string[];
}

interface ProductDetailProps {
    product: Product;
    onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, onBack }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-white overflow-y-auto pt-20"
        >
            <div className="max-w-7xl mx-auto px-6 py-12">
                <button onClick={onBack} className="flex items-center gap-2 text-gray-500 hover:text-black mb-8 transition-colors">
                    <ArrowLeft size={20} /> Voltar
                </button>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div className="bg-gray-50 rounded-3xl p-8 aspect-square flex items-center justify-center">
                        <motion.img
                            layoutId={`image-${product.id}`}
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-contain mix-blend-multiply"
                        />
                    </div>

                    <div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                            className="text-orange-600 font-medium text-sm mb-2 uppercase tracking-wider"
                        >
                            Novo Lançamento
                        </motion.h2>
                        <motion.h1
                            layoutId={`product-${product.id}`}
                            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
                        >
                            {product.name}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
                            className="text-3xl text-gray-900 mb-8"
                        >
                            {formatPrice(product.price)}
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                            className="text-gray-500 text-lg leading-relaxed mb-8"
                        >
                            {product.description}
                        </motion.p>

                        <div className="grid grid-cols-3 gap-4 mb-8">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="text-center p-4 bg-gray-50 rounded-2xl">
                                    <Star size={20} className="mx-auto mb-2 text-gray-400" />
                                    <span className="text-xs font-medium text-gray-900">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => addToCart(product)}
                            className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full font-medium text-lg transition-colors shadow-lg shadow-blue-600/20"
                        >
                            Adicionar à Sacola
                        </motion.button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProductDetail;
