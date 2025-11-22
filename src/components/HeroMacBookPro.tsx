import { motion } from 'framer-motion';
import { Zap, Battery, Monitor, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';

const HeroMacBookPro = () => {
    const { addToCart } = useCart();

    const heroProduct = {
        id: 'macbook-pro-hero',
        name: "MacBook Pro",
        price: "R$ 18.999", // Exemplo de preço
        image: "https://www.apple.com/v/macbook-pro/at/images/meta/macbook-pro__bmu4mp5lxjiq_og.png?202511110745",
        quantity: 1
    };

    return (
        <motion.div
            className="relative w-full h-[85vh] bg-black text-white rounded-[3rem] overflow-hidden flex flex-col items-center justify-center text-center mb-12 mx-auto"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
        >
            <div className="z-20 px-6 mt-10 md:mt-0">
                <motion.h2
                    initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.2 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent"
                >
                    MacBook Pro
                </motion.h2>
                <motion.p
                    initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.3 }}
                    className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto"
                >
                    O laptop mais poderoso da história. Com os chips M3 Max e M3 Pro.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: false }} transition={{ delay: 0.5 }}
                    className="flex gap-4 justify-center mb-12"
                >
                    <button
                        onClick={() => addToCart(heroProduct)}
                        className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
                    >
                        Comprar
                    </button>
                    <button className="text-blue-400 hover:text-blue-300 px-6 py-3 font-medium flex items-center gap-2">
                        Saiba mais <ArrowRight size={18} />
                    </button>
                </motion.div>
            </div>

            {/* Imagem do Hero */}
            <motion.img
                src="https://www.apple.com/v/macbook-pro/at/images/meta/macbook-pro__bmu4mp5lxjiq_og.png?202511110745"
                alt="MacBook Pro Dark"
                className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-screen md:object-contain md:mt-40"
                initial={{ y: 100 }} whileInView={{ y: 0 }} viewport={{ once: false }} transition={{ duration: 1 }}
            />

            {/* Especificações Flutuantes */}
            <div className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 md:gap-16 text-gray-400 z-20">
                <div className="text-center">
                    <Battery className="w-8 h-8 mx-auto mb-2 text-green-400" />
                    <p className="text-xs md:text-sm font-semibold">Até 22h bateria</p>
                </div>
                <div className="text-center">
                    <Monitor className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                    <p className="text-xs md:text-sm font-semibold">Liquid Retina XDR</p>
                </div>
                <div className="text-center">
                    <Zap className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                    <p className="text-xs md:text-sm font-semibold">M3 Max</p>
                </div>
            </div>
        </motion.div>
    );
};

export default HeroMacBookPro;
