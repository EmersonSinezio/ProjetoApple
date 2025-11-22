import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface Product {
    id: number;
    name: string;
    tagline: string;
    price: number;
    image: string;
    description: string;
    features: string[];
}

interface ProductCardProps {
    product: Product;
    onSelect: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onSelect }) => (
    <motion.div
        layoutId={`product-${product.id}`}
        onClick={() => onSelect(product)}
        className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-500"
    >
        <div className="aspect-square overflow-hidden bg-gray-100 relative">
            <motion.img
                layoutId={`image-${product.id}`}
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
        </div>
        <div className="p-8 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-2">{product.name}</h3>
            <p className="text-gray-500 mb-4">{product.tagline}</p>
            <span className="text-blue-600 hover:underline text-sm font-medium inline-flex items-center gap-1">
                Saiba mais <ChevronRight size={14} />
            </span>
        </div>
    </motion.div>
);

export default ProductCard;
