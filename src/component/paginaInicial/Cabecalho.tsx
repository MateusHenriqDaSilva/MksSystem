"use client";
import Link from 'next/link';
import styles from '../../styles/cabecalho.module.css';
import { useState } from 'react';
import { ICabecalho } from '../../interface/Cabecalho';
import { IUser } from '@/class/usuario';

export default function Cabecalho(props: ICabecalho) {
    const [estaAberto, setEstaAberto] = useState(false);
    const [erroLogin, setErroLogin] = useState(false);
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleLogin = async () => {
        try {
            const response = await fetch('/api/usuario', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            if (!response.ok) {
                throw new Error('Erro ao obter usuários do banco de dados');
            }
            const data = await response.json();
            const users = data.users;
            const user = users.find((user: IUser) => user.email === email && user.senha === senha);
            if (user) {
                window.location.href = '/painel'; // Redireciona para a página /cursos
            } else {
                setErroLogin(true); // Exibe a mensagem 'usuario nao encontrado'
            }
        } catch (error) {
            console.error(error);
        }
    };

    const abrirModal = () => {
        setEstaAberto(!estaAberto);
    };

    return (
        <div className={styles.containerGlobal}>
            <Link href="/" className={styles.tituloIncial}>
                <h1 className={styles.tituloCabecalho}>{props.titulo}</h1>
            </Link>
                <div onClick={abrirModal} className={styles.botao}>Entrar</div>
            <div className={styles.containerLink}>
                {/* <Link href="/loja" className={styles.botaoManutencao} title="Em manutenção">
                    Store
                </Link> */}
                {estaAberto && (
                    <div className={styles.modal} onClick={abrirModal}>
                        <div className={styles.espacoLogin} onClick={(e) => e.stopPropagation()}>
                            <div className={styles.containerLogin}>
                                <div className={styles.containerClose}>
                                    <button className={styles.closeButton} onClick={abrirModal}>X</button>
                                </div>
                                <div className={styles.containerEntrar}>
                                    <h1 className={styles.titulo}>Bem vindo, Soldado!</h1>
                                    <h3 className={styles.descricao}>Aqui é onde a batalha diária separa os muleques dos homens, respire fundo, acredite em si mesmo e siga em frente.</h3>
                                    <input type="text" className={styles.login} value={email} onChange={(e) => setEmail(e.target.value)} />
                                    <input type="password" className={styles.senha} value={senha} onChange={(e) => setSenha(e.target.value)} />
                                    <button className={styles.entrar} onClick={handleLogin}>Desafiar-se</button>
                                    {erroLogin && <div className={styles.error}>* Usuario nao encontrado</div>}
                                    <Link href="/registrar">
                                        <p className={styles.registrar}>Clique aqui para se qualificar</p>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
