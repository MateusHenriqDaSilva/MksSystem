// CartComponent.tsx
"use client";
import { CartContext } from '@/component/CartContext'; // Importe o hook useCart
import { useEffect, useState } from 'react';
import Cart from '../../class/cart'
import Header from '@/component/Header';
import styles from '../../styles/cart.module.css'
import Product from '../../interface/Product'
import { IoMdAddCircle, IoMdRemoveCircle } from 'react-icons/io';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';
import { GiEmptyHourglass } from 'react-icons/gi';

export default function CartComponent() {
  const [cart, setCart] = useState(new Cart()); // Crie uma nova instância da classe Cart
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=name&orderBy=ASC')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.products.slice(0, 3)); // Pegue os 3 primeiros produtos
      });
  }, []);
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

  // Quando o componente é montado, atualize o estado do carrinho com o valor do localStorage
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

  const removeFromCart = (product: Product) => {
    let newCart = new Cart([...cart.items]); // Crie uma nova instância de Cart com os itens existentes
    newCart.remove(product); // Remova o produto do novo carrinho
    setCart(newCart); // Atualize o estado do carrinho
    localStorage.setItem('cart', JSON.stringify(newCart)); // Salve o novo carrinho no localStorage
  };

  const addAmount = (product: Product) => {
    let newCart = new Cart([...cart.items]); // Crie uma nova instância de Cart com os itens existentes
    newCart.addAmount(product); // Adicione 1 à quantidade do produto no novo carrinho
    setCart(newCart); // Atualize o estado do carrinho
    localStorage.setItem('cart', JSON.stringify(newCart)); // Salve o novo carrinho no localStorage
  };

  const removeAmount = (product: Product) => {
    let newCart = new Cart([...cart.items]); // Crie uma nova instância de Cart com os itens existentes
    newCart.removeAmount(product); // Remova 1 da quantidade do produto no novo carrinho
    setCart(newCart); // Atualize o estado do carrinho
    localStorage.setItem('cart', JSON.stringify(newCart)); // Salve o novo carrinho no localStorage
  };

  const value = { cart, addToCart, removeFromCart, addAmount, removeAmount, setCart }; // 
  return (
    <CartContext.Provider value={value}> {/* Passe o valor para o Provider */}
      <div className={styles.container}>
        <Header />
        <div className={styles.containerRow}>
          <div className={styles.colLeft}>
            <h1 className={styles.titulo}>Carrinho</h1>
            <div className={styles.itemCart}>
              {
                cart.items.length > 0 ? (
                  cart.items.map((elemento, index) => (
                    <div className={styles.item} key={index}>
                      <div className={styles.containerImg}>
                        <img className={styles.imgItem} src={elemento.photo} alt={elemento.brand} />
                      </div>
                      <div className={styles.containerName}>
                        <p className={styles.labelItem}>{elemento.name}</p>
                      </div>
                      <div className={styles.containerPrice}>
                        <p className={styles.labelPrice}>R$ {elemento.price}</p>
                      </div>
                      <div className={styles.containerCount}>
                        <IoMdRemoveCircle className={styles.iconCount} onClick={() => removeAmount(elemento)} />
                        <h1 className={styles.count}>{elemento.count}</h1>
                        <IoMdAddCircle className={styles.iconCount} onClick={() => addAmount(elemento)} />
                        {/* <button className={styles.button}>teste</button> */}
                      </div>
                      <div className={styles.containerDelete} onClick={() => removeFromCart(elemento)}>
                        <AiOutlineUserDelete /><MdDeleteForever className={styles.delete} />
                      </div>
                    </div>
                  ))) : (
                  <div className={styles.empty}>
                    <h1 className={styles.emptyLabel}>Carrinho vazio</h1>
                    <GiEmptyHourglass className={styles.emptyIcon} />
                  </div>
                )
              }
            </div>
          </div>
          <div className={styles.colRight}>
            <div className={styles.colTopRight}>
              <h1 className={styles.label}>Produtos no carrinho: {cart.items.length}</h1> {/* Exiba a contagem de itens */}
              <h1 className={styles.label}>Quantidade: {cart.countAmountProduct()}</h1> {/* Exiba a contagem de itens */}
              <h1 className={styles.labelTotal}>{cart.countPriceProduct()}</h1> {/* Exiba a contagem de itens */}
            </div>
            <div className={styles.colBottomRight}>
              <h1 className={styles.label}>Produtos mais vendidos</h1>
              {products.map((product: Product) => (
                <div className={styles.containerSell} key={product.id}>
                  <img className={styles.imgSell} src={product.photo} alt={product.name} />
                  <h2 className={styles.labelSell}>{product.name}</h2>
                  <p className={styles.priceSell}>{product.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={styles.containerButton}>
          <button className={styles.finish}>Finalizar Compra</button>
        </div>
      </div>
    </CartContext.Provider>
  )
}