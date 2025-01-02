"use client";
// No arquivo Config.tsx
import styles from '../../../styles/perfilUsuario.module.css';
import { AiOutlineClose } from "react-icons/ai";
import Image from 'next/image'
import avatar from '../../../../public/avatar.png'
import { useEffect } from 'react';

export default function PerfilUsuario({ isOpen, onClose }: any) {

    async function consultarAPIUsuario() {
        try {
            const response = await fetch('http://localhost:3000/api/usuario');
            const data = await response.json();
            console.log(data)
            const usuariosArray = data.users.map((element: any) => {
                // Process each element as needed
                return element;
            });
            console.log(usuariosArray)
        } catch (error) {
            console.error('Erro ao consultar a API:', error);
        }
    }

    useEffect(() => {
        console.log(consultarAPIUsuario())

        setTimeout(() => {
        }, 1000);
    }, []); // A lista de dependências está vazia para que o efeito seja executado apenas uma vez


    return (
        <div className={styles.containerGlobal}>
            {isOpen ? (
                <div className={styles.container}>
                    <div className={styles.conteudo}>
                        {/* Conteúdo do modal */}
                        <button className={styles.fechar} onClick={onClose}><AiOutlineClose /></button>
                        <div className={styles.conteudoAvatar}>
                            <Image
                                src={avatar}
                                width={500}
                                height={500}
                                alt="Avatar"
                            />
                        </div>
                        <div className={styles.conteudoInfo}>
                            <ul className={styles.conteudoCabecalhoInfo}>
                                <li className={`${styles.itemPerfil} ${styles.item1}`}>Nome: </li>
                                <li className={`${styles.itemPerfil} ${styles.item2}`}>Experiencia: </li>
                            </ul>
                            <div className={styles.conteudoCorpoInfo}>

                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};