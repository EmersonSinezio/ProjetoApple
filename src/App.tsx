import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';

// --- COMPONENTES GLOBAIS (Carregados normalmente) ---
import Header from './components/Header';
import CartDrawer from './components/CartDrawer';
import { CartProvider } from './context/CartContext';
import LoadingScreen from './components/LoadingScreen';
import ScrollToTop from './components/ScrollToTop';
import LoadingSpinner from './components/LoadingSpinner';

// --- IMPORTS LAZY (Carregados sob demanda) ---
const Mac = lazy(() => import('./pages/Mac'));
const Iphone = lazy(() => import('./pages/Iphone'));
const Ipad = lazy(() => import('./pages/Ipad'));
const Acessorios = lazy(() => import('./pages/Acessorios'));
const Hero = lazy(() => import('./components/Hero'));
const CategoryCard = lazy(() => import('./components/CategoryCard'));

// --- DADOS ---
import { MACS } from './data/macs';
import { IPADS } from './data/ipads';
import { PRODUCTS } from './data/products';

// --- DADOS DAS CATEGORIAS ---
const CATEGORIES = [
  {
    id: 'iphone',
    title: 'iPhone',
    subtitle: 'Pro. Além.',
    image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    link: '/iphone',
    textColor: 'text-white',
    colSpan: 'md:col-span-2',
    height: 'h-[600px]'
  },
  {
    id: 'mac',
    title: 'Mac',
    subtitle: 'Inacreditavelmente poderoso.',
    image: MACS[0].image,
    link: '/mac',
    textColor: 'text-white',
    colSpan: 'md:col-span-2',
    height: 'h-[600px]'
  },
  {
    id: 'ipad',
    title: 'iPad',
    subtitle: 'Sua próxima tela.',
    image: IPADS[2].image,
    link: '/ipad',
    textColor: 'text-white',
    colSpan: 'md:col-span-1',
    height: 'h-[500px]'
  },
  {
    id: 'acessorios',
    title: 'Acessórios',
    subtitle: 'Mágica nos detalhes.',
    image: PRODUCTS[1].image,
    link: '/acessorios',
    textColor: 'text-gray-900',
    colSpan: 'md:col-span-1',
    height: 'h-[500px]'
  }
];

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-blue-100 selection:text-blue-900">
          <Toaster position="top-center" richColors />
          <Header />

          {/* Loading Screen Inicial (Splash) */}
          <AnimatePresence>
            {isLoading && <LoadingScreen onComplete={handleLoadingComplete} />}
          </AnimatePresence>

          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <motion.main
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="pb-20"
                  >
                    <Hero />

                    <section id="categories" className="pt-24 pb-12 px-6 bg-gray-50">
                      <div className="max-w-[1400px] mx-auto text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Loja.</h2>
                        <p className="text-xl text-gray-500">A melhor forma de comprar os produtos que você ama.</p>
                      </div>

                      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
                        {CATEGORIES.map((item, index) => (
                          <CategoryCard key={item.id} item={item} index={index} />
                        ))}
                      </div>
                    </section>
                  </motion.main>
                </Suspense>
              } />

              {/* OUTRAS ROTAS */}
              <Route path="/mac" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Mac />
                </Suspense>
              } />
              <Route path="/iphone" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Iphone />
                </Suspense>
              } />
              <Route path="/ipad" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Ipad />
                </Suspense>
              } />
              <Route path="/acessorios" element={
                <Suspense fallback={<LoadingSpinner />}>
                  <Acessorios />
                </Suspense>
              } />
            </Routes>
          </AnimatePresence>

          <CartDrawer />

          <footer className="py-12 text-center text-gray-400 text-sm border-t border-gray-100 bg-gray-50">
            <p>&copy; 2025 Apple Inc. Design inspirado na Apple.</p>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}