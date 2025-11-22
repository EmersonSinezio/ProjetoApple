import React, { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

interface CartItem {
    id: number | string;
    name: string;
    price: number | string;
    image: string;
    quantity: number;
    tagline?: string;
    description?: string;
    features?: string[];
}

interface CartContextType {
    cart: CartItem[];
    isCartOpen: boolean;
    addToCart: (product: any) => void;
    removeFromCart: (id: number | string) => void;
    updateQuantity: (id: number | string, delta: number) => void;
    toggleCart: (isOpen: boolean) => void;
    cleanCart: () => void;
    cartCount: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<CartItem[]>([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    // Carregar carrinho do localStorage
    useEffect(() => {
        const savedCart = localStorage.getItem('lumina-cart');
        if (savedCart) setCart(JSON.parse(savedCart));
    }, []);

    // Salvar carrinho no localStorage
    useEffect(() => {
        localStorage.setItem('lumina-cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product: any) => {
        setCart(prev => {
            const exists = prev.find(item => item.id === product.id);
            if (exists) {
                return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
            }
            // For now, we just store the product.
            return [...prev, { ...product, quantity: 1 }];
        });
        setIsCartOpen(true);
    };

    const removeFromCart = (id: number | string) => {
        setCart(prev => prev.filter(item => item.id !== id));
    };

    const updateQuantity = (id: number | string, delta: number) => {
        setCart(prev => prev.map(item => {
            if (item.id === id) {
                return { ...item, quantity: Math.max(1, item.quantity + delta) };
            }
            return item;
        }));
    };

    const cleanCart = () => {
        localStorage.removeItem('lumina-cart');
        setCart([]);
    };

    const toggleCart = (isOpen: boolean) => {
        setIsCartOpen(isOpen);
    };

    const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <CartContext.Provider value={{ cart, isCartOpen, addToCart, removeFromCart, updateQuantity, toggleCart, cartCount, cleanCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};
