import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <div className="relative w-full h-[90vh] bg-black text-white overflow-hidden">
            <motion.div
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}
                className="absolute inset-0"
            >
                <img
                    src="https://images.unsplash.com/photo-1609085174857-cfea32ae0140?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero Background"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </motion.div>

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6 pt-20">
                <motion.h2
                    initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-xl md:text-2xl font-medium text-gray-300 mb-4 tracking-widest uppercase"
                >
                    Bem-vindo à Lumina
                </motion.h2>
                <motion.h1
                    initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
                >
                    Tecnologia.<br />Elevada.
                </motion.h1>
                <motion.div
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
                    className="flex gap-6"
                >
                    <button onClick={() => document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' })} className="bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors">
                        Explorar Loja
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
