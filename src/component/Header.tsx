// Header.tsx
import { useCart } from './CartContext';
import { FaCartArrowDown } from "react-icons/fa6";
import styles from '../styles/header.module.css'
import { GiPowerLightning } from "react-icons/gi";
import Link from "next/link";
import { useEffect, useState } from 'react'; // Importe o hook useState

// Componente do cabeçalho
export default function Header() {
  const { cart } = useCart();
  const [itemCount, setItemCount] = useState(0); // Estado para a contagem de itens

  useEffect(() => {
    if (cart && cart.items) {
      console.log(cart.items)
      setItemCount(cart.items.length); // Use a propriedade length do array
    }
  }, [cart]);


  return (
    <div className={styles.header}>
      <hr className={styles.trace1} />
      <Link href={'/'}>
        <h1 className={styles.title}>
          Mercado Relampado<GiPowerLightning className={styles.icon} />
        </h1>
      </Link>
      <hr className={styles.trace2} />
      <Link href={'/cart'}>
        <div>
          <FaCartArrowDown className={styles.iconCart} />
          <span>{itemCount}</span> {/* Exiba a contagem de itens */}
        </div>
      </Link>
      <hr className={styles.trace3} />
    </div>
  )
}
