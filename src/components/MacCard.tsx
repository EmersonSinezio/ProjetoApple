import React from 'react';
import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface MacCardProps {
    product: {
        id: string;
        name: string;
        badge: string;
        tagline: string;
        price: string;
        image: string;
        theme: string;
        cols: string;
        isHorizontal?: boolean;
    };
    index: number;
}

const MacCard: React.FC<MacCardProps> = ({ product, index }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            className={`group relative bg-white rounded-[2.5rem] overflow-hidden shadow-sm border border-gray-100 ${product.cols} ${product.isHorizontal ? 'md:flex md:items-center md:flex-row-reverse' : 'flex flex-col'}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
        >
            <div className={`p-10 ${product.isHorizontal ? 'md:w-1/2 text-left' : 'text-center'}`}>
                <div className="inline-block mb-3">
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                        <Cpu size={12} /> Chip {product.badge}
                    </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-500 mb-6 text-lg">{product.tagline}</p>
                <p className="text-gray-900 font-semibold mb-6">{product.price}</p>

                <div className={`flex gap-4 ${product.isHorizontal ? 'justify-start' : 'justify-center'}`}>
                    <button
                        onClick={() => addToCart({ ...product, quantity: 1 })}
                        className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20"
                    >
                        Comprar
                    </button>
                    <button className="text-blue-600 hover:underline text-sm">
                        Ver detalhes
                    </button>
                </div>
            </div>

            <div className={`${product.isHorizontal ? 'md:w-1/2 h-64 md:h-96' : 'h-64'} relative overflow-hidden bg-gray-50`}>
                <motion.img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover mix-blend-darken group-hover:scale-105 transition-transform duration-700"
                />
            </div>
        </motion.div>
    );
}

export default MacCard;
