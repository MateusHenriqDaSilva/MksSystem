"use client";
import styles from './../../styles/corpo.module.css'
import Image from 'next/image'
// import imagem from '../../../public/fotoMateus.png'
import fundoDaPagina from '../../../public/fundoPagina.png'
import Link from 'next/link'

export default function Corpo() {
    return (
        <div className={styles.imagemEspacoGlobal}>
            <div className={styles.imagemEspaco}>
                <Image className={styles.definicaoImagem}
                    alt='Mateus Henrique'
                    src={fundoDaPagina}
                    width={300}
                    height={400}
                />
            </div>
            <div className={styles.espacoLinha}>
                <div className={styles.linhaReta1}></div>
                <div className={styles.linhaReta2}></div>
                <div className={styles.linhaReta3}></div>
                <div className={styles.linhaReta4}></div>
                <div className={styles.linhaReta5}></div>
                <div className={styles.linhaReta6}></div>
            </div>
            <div className={styles.espacoQuadrado}>
                <Link href='/programacao' className={styles.quadrado1}>Programacao</Link>
                <Link href='/engenharia' className={styles.quadrado2}>Engenharia</Link>
                <Link href='/comunicacao' className={styles.quadrado3}>Comunicacao</Link>
                <Link href='/marketing' className={styles.quadrado4}>Marketing</Link>
                <Link href='/inteligencia' className={styles.quadrado5}>Inteligencia</Link>
                <Link href='/seguranca' className={styles.quadrado6}>Segurança</Link>
            </div>
        </div>
    )
}
