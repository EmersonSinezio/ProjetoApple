import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Headphones, BatteryCharging, Shield, Watch, Music, ChevronRight, Plus } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { ACCESSORIES } from '../data/products';

const CATEGORIES = [
    { id: 'all', name: 'Todos', icon: <Music size={18} /> },
    { id: 'audio', name: 'Áudio', icon: <Headphones size={18} /> },
    { id: 'power', name: 'Energia', icon: <BatteryCharging size={18} /> },
    { id: 'protection', name: 'Proteção', icon: <Shield size={18} /> },
    { id: 'wearables', name: 'Pulseiras', icon: <Watch size={18} /> },
];


const AccessoryCard = ({ item }) => {
    const { addToCart } = useCart();

    return (
        <motion.div
            layout // Importante para animação de filtro suave
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="group flex flex-col bg-white rounded-3xl p-6 shadow-sm hover:shadow-xl transition-shadow duration-300"
        >
            <div className="relative aspect-square mb-6 overflow-hidden rounded-2xl bg-gray-50">
                <motion.img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <button
                    onClick={() => addToCart(item)}
                    className="absolute bottom-4 right-4 bg-black/90 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hover:bg-blue-600"
                >
                    <Plus size={18} />
                </button>
            </div>

            <div className="mt-auto">
                <span className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-1 block">
                    {item.color}
                </span>
                <h3 className="font-semibold text-gray-900 text-lg leading-tight mb-2">{item.name}</h3>
                <div className="flex items-center justify-between">
                    <p className="text-gray-900 font-medium">{item.price}</p>
                </div>
            </div>
        </motion.div>
    );
};

const MagSafeBanner = () => (
    <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "-100px" }}
        className="relative w-full bg-black rounded-[2rem] overflow-hidden py-20 px-6 md:px-20 text-white text-center md:text-left my-16"
    >
        <div className="relative z-10 max-w-lg">
            <span className="text-green-400 font-bold tracking-widest text-xs uppercase mb-2 block">Ecossistema</span>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">MagSafe.</h2>
            <p className="text-gray-400 text-lg mb-8">
                Uma combinação colorida de acessórios que fixam num clique. Carregadores rápidos e sem fio.
            </p>
            <button className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                Comprar coleção MagSafe
            </button>
        </div>
        <motion.div
            className="absolute top-0 right-0 w-full h-full md:w-1/2 opacity-50 md:opacity-100"
            initial={{ scale: 1.2, rotate: 10 }}
            whileInView={{ scale: 1, rotate: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 1.2, ease: "easeOut" }}
        >
            {/* Simulação visual de anéis MagSafe usando div e gradientes */}
            <div className="absolute top-1/2 right-1/4 w-64 h-64 rounded-full border-8 border-white/20 shadow-[0_0_50px_rgba(255,255,255,0.2)]"></div>
            <div className="absolute top-1/3 right-10 w-40 h-40 rounded-full border-8 border-green-400/30 blur-sm"></div>
        </motion.div>
    </motion.div>
);

const Acessorios = () => {
    const [filter, setFilter] = useState('all');
    const [searchTerm, setSearchTerm] = useState('');

    // Filtra usando a lista importada (ACCESSORIES)
    const filteredItems = ACCESSORIES.filter(item => {
        const matchesCategory = filter === 'all' || item.category === filter;
        const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <div className="pt-32 pb-20 px-6 bg-[#f5f5f7] min-h-screen">
            <div className="max-w-[1400px] mx-auto">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-6xl font-bold mb-4 text-gray-900">
                        Mágica nos detalhes.
                    </h1>
                    <p className="text-xl text-gray-500 mb-8">
                        Encontre o par perfeito para seus dispositivos.
                    </p>

                    {/* Search Bar */}
                    <div className="max-w-md mx-auto relative">
                        <input
                            type="text"
                            placeholder="Buscar acessórios..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm transition-all"
                        />
                    </div>
                </motion.div>

                {/* Filtros de Categoria */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat.id
                                ? 'bg-black text-white shadow-lg scale-105'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            {cat.icon}
                            {cat.name}
                        </button>
                    ))}
                </div>

                {/* Grid de Produtos */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <AnimatePresence mode="popLayout">
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <AccessoryCard key={item.id} item={item} />
                            ))
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="col-span-full text-center py-12 text-gray-400"
                            >
                                Nenhum acessório encontrado.
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Banner MagSafe */}
                <MagSafeBanner />

                {/* Seção de Destaque Inferior */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                    className="text-center py-12"
                >
                    <h3 className="text-2xl font-bold mb-4">Ainda procurando?</h3>
                    <a href="#" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                        Ver todos os cabos e adaptadores <ChevronRight size={16} />
                    </a>
                </motion.div>

            </div>
        </div>
    );
};

export default Acessorios;