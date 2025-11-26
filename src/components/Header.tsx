import React from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
    const { cartCount, toggleCart } = useCart();

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100"
        >
            <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                <Link to="/" className="text-xl font-semibold tracking-tight hover:opacity-70 transition-opacity">
                    Apple
                </Link>
                <nav className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
                    <Link to="/mac" className="hover:text-black transition-colors">Mac</Link>
                    <Link to="/ipad" className="hover:text-black transition-colors">iPad</Link>
                    <Link to="/iphone" className="hover:text-black transition-colors">iPhone</Link>
                    <Link to="/acessorios" className="hover:text-black transition-colors">Acessórios</Link>
                </nav>
                <button onClick={() => toggleCart(true)} className="relative p-2 hover:bg-gray-100 rounded-full transition-colors">
                    <ShoppingBag size={20} />
                    {cartCount > 0 && (
                        <motion.span
                            initial={{ scale: 0 }} animate={{ scale: 1 }}
                            className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center"
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
