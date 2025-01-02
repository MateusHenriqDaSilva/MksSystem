"use client";
import style from '../../styles/postList.module.css'
import Image from 'next/image';
import ReactPlayer from 'react-player/youtube'
import WhatsAppButton from './WhatsAppButton';
import { useEffect, useState } from 'react';
import SkeletonPost from '@/app/skeletonPost';

interface MyNestedObject {
    header?: string
    text: string
    code?: string
    img?: any
    video?: any
}

interface MyObject {
    id: string
    title?: string
    description?: string
    link?: string
    post: MyNestedObject[];
}

interface MensagemPostada {
    nome: string;
    comentario: string;
    link: string;
}

export default function PostList(props: MyObject) {
    const spaces = '\u00A0\u00A0\u00A0\u00A0';
    const [showSkeleton, setShowSkeleton] = useState(true);
    const [nome, setNome] = useState('');
    const [comentario, setComentario] = useState('');
    const [link, setLink] = useState('');
    const [mensagens, setMensagens] = useState<MensagemPostada[]>([]);

    const handlePostar = async () => {
        try {
            const formData = new FormData();
            formData.append('nome', nome);
            formData.append('comentario', comentario);
            formData.append('link', link);

            const response = await fetch('/api/comentarios', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error('Erro ao inserir usuário no banco de dados', error);
        }
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSkeleton(false);
        }, 1000);

        setLink(`${props.link}${props.id}`)

        return () => clearTimeout(timer); // Limpa o timeout quando o componente é desmontado
    }, []);

    return (
        <div style={{ background: 'white' }}>
            {showSkeleton ? (
                <SkeletonPost />
            ) : (
                <div className={style.containerGlobal}>
                    <div className={style.contentBlog}>
                        <div className={style.header}>
                            <h1 className={style.title}>
                                {props.title}
                            </h1>
                        </div>
                        {
                            props.post?.map((element, index) => {
                                if (element?.img) {
                                    return (
                                        <div className={style.main} key={index}>
                                            <h1 className={style.title}>{element.header}</h1>
                                            {
                                                element.text?.split('\n').map((element, index) => (
                                                    <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                ))
                                            }
                                            <div className={style.containerCode}>
                                                {
                                                    element.code?.split('\n').map((element, index) => (
                                                        <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                    ))
                                                }
                                            </div>
                                            <div className={style.contianerImage}>
                                                <Image
                                                    className={style.containerImageTamanho}
                                                    src={element?.img}
                                                    alt="Mateus Henrique Canvas"
                                                />
                                            </div>
                                        </div>
                                    )
                                } else if (element?.video) {
                                    return (
                                        <div className={style.main} key={index}>
                                            <h1 className={style.title}>{element.header}</h1>
                                            {
                                                element.text?.split('\n').map((element, index) => (
                                                    <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                ))
                                            }
                                            <div className={style.containerCode}>
                                                {
                                                    element.code?.split('\n').map((element, index) => (
                                                        <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                    ))
                                                }
                                            </div>
                                            <div className={style.containerVideo}>
                                                <ReactPlayer
                                                    className={style.containerVideoTamanho}
                                                    url={element.video}
                                                    controls
                                                />
                                            </div>
                                        </div>
                                    )
                                } else if (element?.video && element?.img) {
                                    <div className={style.main} key={index}>
                                        <h1 className={style.title}>{element.header}</h1>
                                        {
                                            element.text?.split('\n').map((element, index) => (
                                                <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                            ))
                                        }
                                        <div className={style.containerCode}>
                                            {
                                                element.code?.split('\n').map((element, index) => (
                                                    <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                ))
                                            }
                                        </div>
                                        <div className={style.containerImage}>
                                            <Image
                                                className={style.containerImageTamanho}
                                                src={element?.img}
                                                alt="Mateus Henrique Canvas"
                                            />
                                        </div>
                                        <div className={style.containerVideo}>
                                            <ReactPlayer
                                                className={style.containerVideoTamanho}
                                                url={element.video}
                                                controls
                                            />
                                        </div>
                                    </div>
                                } else {
                                    return (
                                        <div className={style.main} key={index}>
                                            <h1 className={style.title}>{element.header}</h1>
                                            {
                                                element.text?.split('\n').map((element, index) => (
                                                    <h1 className={style.text} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                ))
                                            }
                                            <div className={style.containerCode}>
                                                {
                                                    element.code?.split('\n').map((element, index) => (
                                                        <h1 className={style.code} key={index}>{element.replace(/\t/g, spaces)}</h1>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        }
                        <WhatsAppButton text={`Olha essa postagem no Blog do Mateus : https://www.mateushenrique.blog.br${props.link}${props.id}`} />
                    </div>
                    <div className={style.comentario}>
                        <h1 className={style.nome}>Nome: </h1>
                        <input
                            type="text"
                            className={style.caixaDeMensagem}
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                        <h1 className={style.nome}>Comentario: </h1>
                        <input
                            type="text"
                            className={style.caixaDeMensagem}
                            value={comentario}
                            onChange={(e) => setComentario(e.target.value)}
                        />
                        <button className={style.botao} onClick={handlePostar}>Postar</button>
                        <div className={style.mensagensPostadas}>
                            {mensagens.map((mensagem, index) => (
                                <div key={index} className={style.mensagemPostada}>
                                    <h2>{mensagem.nome}</h2>
                                    <p>{mensagem.comentario}</p>
                                    <a href={mensagem.link} target="_blank">{mensagem.link}</a>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
