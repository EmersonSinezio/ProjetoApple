import { useState, useEffect } from 'react';
import SpecialCard from '../components/SpecialCard';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { IPHONES } from '../data/iphones';

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

const Iphone = () => {
    const { addToCart } = useCart();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Extrair todas as URLs de imagem que precisam carregar
        const imagesToLoad = IPHONES.map(iphone => iphone.image);

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
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-32 px-6 pb-20 bg-gray-50 min-h-screen"
        >
            <div className="max-w-7xl mx-auto">
                <header className="text-center mb-16">
                    {/* Animação simples para o título também */}
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-blue-600 font-medium mb-4 text-sm tracking-wider uppercase">Smartphone</h2>
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                            O iPhone ideal para você.
                        </h1>
                    </motion.div>
                </header>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {IPHONES.map((iphone, index) => (
                        // 2. Envolva o card com motion.div
                        <motion.div
                            key={iphone.id}
                            initial={{ opacity: 0, y: 50, scale: 0.95 }} // Começa invisível, mais baixo e levemente menor
                            whileInView={{ opacity: 1, y: 0, scale: 1 }} // Estado final visível
                            viewport={{
                                once: true,    // Anima apenas uma vez
                                amount: 0.1,   // Começa a animar quando 10% do item aparece
                                margin: "-50px" // Margem para não animar exatamente na borda
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index % 4 * 0.1, // Um pequeno atraso escalonado para visual "cascata"
                                type: "spring",
                                stiffness: 50
                            }}
                        >
                            <SpecialCard
                                title={iphone.title}
                                price={iphone.price}
                                image={iphone.image}
                                onAddToCart={() => addToCart({
                                    id: iphone.id,
                                    name: iphone.title,
                                    price: iphone.price,
                                    image: iphone.image,
                                    quantity: 1
                                })}
                            />
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

export default Iphone;