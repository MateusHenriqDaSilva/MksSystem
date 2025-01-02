// Home.tsx
"use client";
import styles from '../../styles/home.module.css'
import React, { useState, useEffect } from 'react';
import Cart from '../../class/cart'
import { CartContext } from '@/component/CartContext'
import Main from "../../component/Main"
import Product from '../../interface/Product'
import Header from '@/component/Header';

export default function Store() {
  const [cart, setCart] = useState(new Cart()); // Crie uma nova instância da classe Cart

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

  const value = { cart, addToCart, setCart }; // Inclua setCart no valor para o Provider

  return (
    <CartContext.Provider value={value}> {/* Passe o valor para o Provider */}
      <div className={styles.home}>
        <Header />
        <Main />
      </div>
    </CartContext.Provider>
  )
}
