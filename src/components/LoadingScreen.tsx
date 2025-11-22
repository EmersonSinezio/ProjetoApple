import { useEffect } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
    onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
    useEffect(() => {
        // 1. Bloqueia o scroll do corpo da página
        document.body.style.overflow = 'hidden';

        const timer = setTimeout(() => {
            onComplete();
        }, 4000); // Tempo do Loading (4s)

        // Cleanup: Quando o componente desmontar (sair da tela), libera o scroll
        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'unset';
        };
    }, [onComplete]);

    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-black flex items-center justify-center"
        >
            {/* 2. Imagem configurada com object-cover para preencher toda a tela */}
            <img
                src="https://gizmodo.com/app/uploads/2024/08/Apple-Event-iphone16.gif"
                alt="Loading..."
                className="w-full h-full object-cover"
            />
        </motion.div>
    );
};

export default LoadingScreen;
