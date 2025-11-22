import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import HeroMacBookPro from '../components/HeroMacBookPro';
import MacCard from '../components/MacCard';
// import { MACS } from '../data/macs'; // Dados inlined abaixo para garantir o funcionamento do preloader

// --- DADOS LOCAIS (Para o preloader funcionar corretamente) ---
const MACS = [
    {
        id: 'air-15',
        name: "MacBook Air 15”",
        badge: "M3",
        tagline: "Grande em tamanho. Fino em tudo.",
        price: "R$ 12.999",
        image: "https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?auto=format&fit=crop&q=80&w=1000",
        theme: "light",
        cols: "col-span-1 md:col-span-1"
    },
    {
        id: 'air-13',
        name: "MacBook Air 13”",
        badge: "M2",
        tagline: "Leve. Veloz. Incrível.",
        price: "R$ 10.999",
        image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?auto=format&fit=crop&q=80&w=1000",
        theme: "light",
        cols: "col-span-1 md:col-span-1"
    },
    {
        id: 'imac',
        name: "iMac",
        badge: "M3",
        tagline: "Tudo em um. Tudo em cor.",
        price: "R$ 14.499",
        image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000",
        theme: "light",
        cols: "col-span-1 md:col-span-2",
        isHorizontal: true
    }
];

// URL da imagem do Hero (importante precarregar essa também)
const HERO_IMAGE_URL = "https://images.unsplash.com/photo-1531297461136-82af0812980d?auto=format&fit=crop&q=80&w=1200";

// --- COMPONENTE DE LOADING ---
const LoadingSpinner = () => (
    <div className="fixed inset-0 z-50 bg-[#fbfbfd] flex items-center justify-center">
        <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
            className="w-8 h-8 border-2 border-gray-300 border-t-black rounded-full"
        />
    </div>
);

const Mac = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // 1. Lista de todas as imagens críticas da página
        const imagesToLoad = [
            HERO_IMAGE_URL,          // Imagem grande do topo
            ...MACS.map(mac => mac.image) // Imagens dos cards
        ];

        let imagesLoadedCount = 0;
        const totalImages = imagesToLoad.length;

        const checkAllLoaded = () => {
            imagesLoadedCount++;
            if (imagesLoadedCount === totalImages) {
                setIsLoading(false);
            }
        };

        // 2. Força o carregamento
        if (totalImages === 0) {
            setIsLoading(false);
        } else {
            imagesToLoad.forEach(url => {
                const img = new Image();
                img.src = url;
                img.onload = checkAllLoaded;
                img.onerror = checkAllLoaded;
            });
        }
    }, []);

    if (isLoading) {
        return <LoadingSpinner />;
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="pt-32 pb-20 px-6 bg-[#fbfbfd] min-h-screen"
        >
            <div className="max-w-[1400px] mx-auto">

                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                >
                    <h1 className="text-5xl font-bold mb-4">Mac</h1>
                    <p className="text-xl text-gray-500">Se você consegue sonhar, você consegue fazer.</p>
                </motion.div>

                {/* Hero Section (MacBook Pro) */}
                <HeroMacBookPro />

                {/* Grid Section (Outros Macs) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {MACS.map((mac, idx) => (
                        <MacCard key={mac.id} product={mac} index={idx} />
                    ))}
                </div>

                {/* Comparativo Rápido Footer */}
                <motion.div
                    className="mt-24 border-t border-gray-200 pt-16 text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: false }}
                >
                    <h2 className="text-3xl font-bold mb-8">Qual é o Mac ideal para você?</h2>
                    <a href="#" className="text-blue-600 text-lg hover:underline inline-flex items-center gap-2">
                        Comparar todos os modelos <ArrowRight size={20} />
                    </a>
                </motion.div>

            </div>
        </motion.div>
    );
};

export default Mac;