"use client";
import SkeletonPerfil from "./skeletonPerfil";
import styles from "./../../../styles/perfil.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

type Equipe = {
    id: number;
    nomeDaEquipe: string;
};

interface DadosPerfil {
    equipe: Equipe[];
}

const listaPerfil: Equipe[] = [
    { id: 1, nomeDaEquipe: 'Equipe de Mudança' },
    { id: 2, nomeDaEquipe: 'Equipe de Contas' },
    { id: 3, nomeDaEquipe: 'Equipe Principal' },
    { id: 4, nomeDaEquipe: 'Equipe De conselho' }
];

const perfil: DadosPerfil = {
    equipe: listaPerfil
};

export default function Perfil() {
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [selectedId, setSelectedId] = useState<number | null>(1);
    const [showButton, setShowButton] = useState(false); // Novo estado para controlar a visibilidade do botão

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer); // Limpa o timeout quando o componente é desmontado
    }, []);

    useEffect(() => {
        if (selectedId !== null) {
            setShowButton(true); // Mostra o botão quando uma equipe é selecionada
        }
    }, [selectedId]);

    return (
        <div className={styles.container}>
            {showSkeleton ? (
                <SkeletonPerfil />
            ) : (
                <div className={styles.conteudo}>
                    <h1 className={styles.aviso}>Pare o mouse e tenha mais informações sobre as equipes</h1>
                    <ul className={styles.listaPerfil}>
                        {perfil.equipe.map((element) => (
                            <li
                                key={element.id}
                                className={`${styles.itemLista} ${selectedId === element.id ? styles.selected : ''}`}
                                onClick={() => setSelectedId(element.id)}
                            >
                                {element.nomeDaEquipe}
                            </li>
                        ))}
                    </ul>
                    {showButton && (
                        <Link href={'/painel'} passHref>
                            <button className={styles.botaoIniciar}>Iniciar</button>
                        </Link>
                    )}
                </div>
            )}
        </div>
    );
}