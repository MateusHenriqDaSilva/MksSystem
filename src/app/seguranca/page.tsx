"use client";
import Cabecalho from "@/component/paginaInicial/Cabecalho"
import styles from "../../styles/estrutura.module.css"
import { useEffect, useState } from "react";
import SkeletonBlog from "../skeletonBlog";

export default function Seguranca() {
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
                <Cabecalho titulo="Segurança" />
            )}
        </div>
    )
}