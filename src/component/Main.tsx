import { useContext, useEffect, useState } from "react";
import Skeleton from "./Skeleton";
import styles from '../styles/main.module.css'
import { FaBoltLightning } from "react-icons/fa6";
import { useCart } from '@/component/CartContext'
import Product from '../interface/Product'
import { motion, AnimatePresence } from 'framer-motion';
import MousePosition from "@/interface/MousePosition";

// Componente para a bola azul
const BlueBall = ({ mousePosition }: { mousePosition: MousePosition }) => {
  const clickPositionPercentage = 100 - (mousePosition.x / window.innerWidth * 100);

  return (
    <motion.div
      style={{
        background: "blue",
        borderRadius: "50%",
        boxShadow: '0px 0px 20px blue',
        width: 30,
        height: 30,
        position: "fixed",
        top: mousePosition.y,
        left: mousePosition.x,
      }}
      initial={{ scale: 0 }}
      animate={{
        scale: 1,
        y: "-100vh",
        x: `${clickPositionPercentage}vw` // Ajuste a animação com base na posição do clique
      }}
      transition={{ duration: 4 }}
    />
  )
}

// Componente Main
export default function Main() {
  const [products, setProducts] = useState<Product[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [animate, setAnimate] = useState(false); // Adicione este estado
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 }); // Adicione este estado
  const { cart, addToCart } = useCart();

  useEffect(() => {
    fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  const handleClick = (product: Product, event: any) => {
    addToCart(product);
    setAnimate(true);
    setMousePosition({ x: event.clientX, y: event.clientY }); // Use a posição do mouse
  }

  // Adicione este efeito colateral
  useEffect(() => {
    if (animate) {
      const timer = setTimeout(() => {
        setAnimate(false);
      }, 1000); // Ajuste este valor para a duração da sua animação

      return () => {
        clearTimeout(timer);
      };
    }
  }, [animate]);

  return (
    <div className={styles.main}>
      {loading ? <Skeleton /> : products ? products.map((product, key) => (
        <div className={styles.product} key={key}>
          <div className={styles.containerImg}>
            <img className={styles.img} src={product.photo} />
          </div>
          <p className={styles.label_nome}>{product.name}</p>
          <p className={styles.label_brand}>{product.brand}</p>
          <p className={styles.label_price}>{product.price}</p>
          <p className={styles.label_description}>{product.description}</p>
          <button className={styles.buttonBuy} onClick={(event) => handleClick(product, event)}>Comprar<FaBoltLightning className={styles.iconBuy} /></button>
        </div>
      )) : null}
      <AnimatePresence>
        {animate && <BlueBall mousePosition={mousePosition} />}
      </AnimatePresence>
    </div>
  );
}
