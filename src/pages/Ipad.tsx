import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import IpadCard from '../components/IpadCard';
import { IPADS } from '../data/ipads'; // Supondo que seus dados estão aqui

// Componente de Loading Local (Estilo Apple)
const LoadingSpinner = () => (
    <div className="fixed inset-0 z-50 bg-[#f5f5f7] flex items-center justify-center">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-8 h-8 border-2 border-gray-300 border-t-gray-800 rounded-full"
        />
    </div>
);

const Ipad = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [selectedAccessory, setSelectedAccessory] = useState('pencil');

    useEffect(() => {
        // 1. Extrair todas as URLs de imagem que precisam carregar
        const imagesToLoad = IPADS.map(ipad => ipad.image);

        let imagesLoadedCount = 0;
        const totalImages = imagesToLoad.length;

        const checkAllLoaded = () => {
            imagesLoadedCount++;
            // Se todas carregaram, removemos o loading
            if (imagesLoadedCount === totalImages) {
                setIsLoading(false);
            }
        };

        // 2. Iterar e forçar o carregamento
        if (totalImages === 0) {
            setIsLoading(false); // Se não houver imagens, carrega direto
        } else {
            imagesToLoad.forEach(url => {
                const img = new Image();
                img.src = url;
                img.onload = checkAllLoaded;
                img.onerror = checkAllLoaded; // Importante: Se der erro, conta como carregado para não travar a tela
            });
        }
    }, []);

    // Enquanto estiver carregando, mostra o Spinner e não renderiza o conteúdo "quebrado"
    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        // motion.div adicionado para fazer um Fade-In suave quando o conteúdo aparecer
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-32 pb-20 bg-[#f5f5f7] min-h-screen"
        >
            <div className="max-w-[1400px] mx-auto px-6">

                {/* Cabeçalho da Seção */}
                <div className="flex flex-col md:flex-row items-end justify-between mb-16 px-4">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: false }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-gray-900">iPad</h1>
                        <p className="text-xl md:text-2xl text-gray-500 mt-4 max-w-xl">
                            Toque, desenhe, digite e leve para qualquer lugar.
                        </p>
                    </motion.div>
                </div>

                {/* Grid Bento Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {IPADS.map((ipad, index) => (
                        <IpadCard key={ipad.id} ipad={ipad} index={index} />
                    ))}
                </div>

                {/* Seção de Acessórios Rápida */}
                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }}
                    className="mt-20 text-center"
                >
                    <h3 className="text-2xl font-semibold mb-6">Acessórios essenciais</h3>
                    <div className="inline-flex gap-4 bg-white p-2 rounded-full shadow-sm border border-gray-200">
                        <span
                            onClick={() => setSelectedAccessory('pencil')}
                            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${selectedAccessory === 'pencil'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Apple Pencil
                        </span>
                        <span
                            onClick={() => setSelectedAccessory('keyboard')}
                            className={`px-6 py-2 rounded-full text-sm font-medium cursor-pointer transition-colors ${selectedAccessory === 'keyboard'
                                ? 'bg-blue-600 text-white hover:bg-blue-700'
                                : 'bg-white text-gray-600 hover:bg-gray-100'
                                }`}
                        >
                            Magic Keyboard
                        </span>
                    </div>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Ipad;