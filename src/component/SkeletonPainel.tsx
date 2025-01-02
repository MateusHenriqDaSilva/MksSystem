import React from 'react';
import styles from '../styles/skeletonPainel.module.css';

const array = [1, 2, 3, 4, 5, 6, 7, 8]; // Seu array com 8 elementos

export default function CustomSkeleton() {
    return (
        <div className={styles.containerGlobal}>
            <div className={styles.containerHeader}>
                <div className={styles.containerMotivacional}>
                    {/* Conteúdo do containerMotivacional */}
                </div>
            </div>
            <div className={styles.containerSub}>
                <div className={styles.menuOptionLeft}>
                    {/* Conteúdo do menuOptionLeft */}
                </div>
                <div className={styles.menuOptionRight}>
                    {/* Conteúdo do menuOptionRight */}
                </div>
            </div>
            <div className={styles.containerContent}>
                <div className={styles.containerCenter}>
                    {/* Conteúdo do containerCenter */}
                </div>
                <div className={styles.containerRight}>
                    {/* Conteúdo do containerRight */}
                </div>
            </div>
            <div className={styles.containerCurses}>
                {/* Ler o array e criar as divs correspondentes */}
                {array.slice(0, 7).map((item) => (
                    <div key={item} className={styles.curse}>
                        {/* Conteúdo da div de cada curse */}
                        {/* Por exemplo: `id: {item}` */}
                    </div>
                ))}
            </div>
        </div>
    );
}
