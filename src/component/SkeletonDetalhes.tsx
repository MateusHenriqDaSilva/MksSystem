import React from 'react';
import styles from '../styles/skeletonDetalhes.module.css';

const array = [1, 2, 3, 4, 5, 6]; // Seu array com 8 elementos

export default function SkeletonDetalhes() {
    return (
        <div className={styles.containerGlobal}>
            <div className={styles.containerCurse}>

            </div>
            <div className={styles.containerSelecao}>

            </div>
            <div className={styles.curseBody}>
                <div className={styles.card}>

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
