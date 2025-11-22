import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Cpu, Palette, Wifi } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface IpadCardProps {
    ipad: {
        id: string;
        name: string;
        tagline: string;
        chip: string;
        price: string;
        image: string;
        dark: boolean;
        cols: string;
        height: string;
    };
    index: number;
}

const IpadCard: React.FC<IpadCardProps> = ({ ipad, index }) => {
    const isDark = ipad.dark;
    const { addToCart } = useCart();

    return (
        <motion.div
            className={`relative overflow-hidden rounded-[2.5rem] group cursor-pointer ${ipad.cols} ${ipad.height} ${isDark ? 'bg-black text-white' : 'bg-white text-gray-900 border border-gray-100'
                }`}
            initial={{ opacity: 0, y: 60, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }} // Reset effect
            transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            whileHover={{ scale: 1.01 }} // Efeito sutil de hover no container
        >
            {/* Conteúdo de Texto - Posicionado no topo ou meio dependendo do design */}
            <div className="absolute top-0 left-0 right-0 p-8 md:p-12 z-10 flex flex-col items-center text-center">
                <motion.span
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.3 }}
                    className={`text-xs font-bold tracking-widest uppercase mb-3 ${isDark ? 'text-gray-400' : 'text-orange-600'}`}
                >
                    Novo
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-2 text-white">{ipad.name}</h2>
                <p className={`text-lg md:text-xl mb-6 ${isDark ? 'text-gray-300' : 'text-gray-400'}`}>
                    {ipad.tagline}
                </p>

                <div className="flex gap-4 items-center justify-center">
                    <button
                        onClick={() => addToCart({ ...ipad, quantity: 1 })}
                        className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}>
                        Comprar
                    </button>
                    <button className={`group/btn flex items-center gap-1 text-sm font-medium hover:underline ${isDark ? 'text-blue-400' : 'text-blue-600'
                        }`}>
                        Saiba mais <ChevronRight size={14} className="group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>

            {/* Imagem */}
            <div className="absolute inset-0 z-0 pt-40">
                <motion.img
                    src={ipad.image}
                    alt={ipad.name}
                    className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                {/* Gradiente para garantir leitura do texto se a imagem for clara */}
                {!isDark && <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/80 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />}
            </div>

            {/* Floating Badge (Especificações) */}
            <div className={`absolute bottom-8 left-8 backdrop-blur-md rounded-2xl p-4 flex gap-4 items-center ${isDark ? 'bg-white/10 text-white border border-white/10' : 'bg-white/60 text-gray-900 border border-white/40'
                }`}>
                <div className="flex flex-col items-center">
                    <Cpu size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-bold mt-1">{ipad.chip}</span>
                </div>
                <div className="w-px h-8 bg-current opacity-20"></div>
                <div className="flex flex-col items-center">
                    <Palette size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-bold mt-1">Cores</span>
                </div>
                <div className="w-px h-8 bg-current opacity-20"></div>
                <div className="flex flex-col items-center">
                    <Wifi size={20} strokeWidth={1.5} />
                    <span className="text-[10px] font-bold mt-1">5G</span>
                </div>
            </div>

            {/* Preço no canto oposto */}
            <div className={`absolute bottom-8 right-8 text-sm font-medium text-white`}>
                {ipad.price}
            </div>
        </motion.div>
    );
};

export default IpadCard;
