"use client";
import CorpoBlog from "@/component/programacao/CorpoBlog";
import styles from "../../styles/estrutura.module.css"
import Cabecalho from "@/component/paginaInicial/Cabecalho";
import { conteudoBlogInteligencia } from "@/component/inteligencia/DadosPostInteligencia";
import SkeletonBlog from "../skeletonBlog";
import { useEffect, useState } from "react";

export default function Inteligencia() {
    const [showSkeleton, setShowSkeleton] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        return () => clearTimeout(timer); // Limpa o timeout quando o componente é desmontado
    }, []);
    return (
        <div className={styles.container}>
            {showSkeleton ? (
                <SkeletonBlog />
            ) : (
                <>
                    <Cabecalho titulo="Inteligencia" />
                    <div className={styles.postagens}>
                        {
                            conteudoBlogInteligencia.map((element, index) => (
                                <CorpoBlog key={index} id={element.id} title={element.title} description={element.description} link={element.link} post={element.post} />
                            ))
                        }
                    </div>
                </>
            )}
        </div>
    )
}