"use client";
import React, { useEffect, useState } from 'react'; // Importe o useState
import styles from '../../../../styles/detalhes.module.css';
import { contentCurse } from '../../../../component/painel/dadosCurse';
import "video.js/dist/video-js.css";
import Image from 'next/image'
import SkeletonDetalhes from '@/component/SkeletonDetalhes';

export default function Detalhes({ params }: { params: { id: number } }) {
    const curse = contentCurse.find((element) => element.id == params.id);
    const curseModule = curse?.modulo || [];
    const [moduleSelected, setModuleSelected] = useState<number | null>(1); // Estado para o módulo selecionado
    const [videoSelecionado, setVideoSelecionado] = useState(curse?.video);
    const [episodioSelecionado, setEpisodioSelecionado] = useState(null);
    const [showSkeleton, setShowSkeleton] = useState(true);

    const handleImageClick = (element: any) => {
        // Aqui você pode acessar o elemento e obter o valor do vídeo
        const videoUrl = element.video;
        const id = element.id
        setVideoSelecionado(videoUrl);
        setEpisodioSelecionado(id)
    };

    const handleModuleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedId = parseInt(event.target.value, 10); // Obtém o ID do módulo selecionado
        setModuleSelected(selectedId); // Atualiza o estado com o ID selecionado
    };
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);
    }, []);

    return (
        <>
            {showSkeleton ? (
                <SkeletonDetalhes />
            ) : (
            <div className={styles.containerGlobal} key={params.id}>
                <div className={styles.containerCurse}>
                    <iframe
                        loading="lazy"
                        src={videoSelecionado}
                        width="60%"
                        height="100%"
                        allowFullScreen
                    />
                </div>
                <div className={styles.containerSelecao}>
                    <select className={styles.selecao} onChange={handleModuleChange}>
                        {curseModule.map((modulo) => (
                            <option key={modulo?.id} value={modulo?.id} className={styles.optionSelect}>Modulo {modulo?.id}: {modulo?.title}</option>
                        ))}
                    </select>
                </div>
                {moduleSelected !== null && (
                    <div className={styles.curseBody}>
                        {curseModule.find((element) => element.id === moduleSelected)?.episodio?.map((element) => (
                            <div
                                className={`${styles.card} ${element.id === episodioSelecionado ? styles.selectedCard : ''}`}
                                key={element.id}
                            >
                                <Image
                                    src={element.img}
                                    className={styles.imageEpisode}
                                    alt='Capitulo Image'
                                    onClick={() => handleImageClick(element)}
                                />
                            </div>
                        ))}
                    </div>
                )}
            </div>
            )}
        </>
    );
}
