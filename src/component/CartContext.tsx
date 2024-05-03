// Context
import Cart from '@/class/cart';
import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';
import Product from '../interface/Product'

interface CartContextProps {
  cart: Cart;
  addToCart: (product: Product) => void;
  setCart: (cart: Cart) => void; // Adicione setCart à interface CartContextProps
}

export const CartContext = createContext<CartContextProps>({
  cart: new Cart(),
  addToCart: () => { },
  setCart: () => { }, // Adicione setCart ao valor inicial do contexto
});

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState(new Cart());

  // Quando o componente é montado, carregue o carrinho do localStorage
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        setCart(new Cart(parsedCart.items)); // Certifique-se de criar uma nova instância de Cart com os itens
      } catch (e) {
        console.error('Falha ao analisar o carrinho:', e);
      }
    }
  }, []);

  const addToCart = (product: Product) => {
    let newCart = new Cart([...cart.items]); // Crie uma nova instância de Cart com os itens existentes
    newCart.add(product); // Adicione o produto ao novo carrinho
    setCart(newCart); // Atualize o estado do carrinho
    localStorage.setItem('cart', JSON.stringify(newCart)); // Salve o novo carrinho no localStorage
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, setCart }}> {/* Passe setCart para o Provider */}
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  return context;
}
