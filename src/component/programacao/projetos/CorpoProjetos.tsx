"use client";
import Link from 'next/link'
import styles from '../../../styles/corpoProjects.module.css'

type Projetos = [{
    name: string
    description: string
    url: string
}]

const listaDeProjetos: Projetos = [
    {
        name: 'Projeto angular inicial components',
        description: 'LOGIN: teste SENHA: 1234',
        url: 'https://project-angular-film.vercel.app/'
    }
]

export default function CorpoProjetos() {
    return (
        <div className={styles.containerGlobal}>
            {
                listaDeProjetos.map((elemento, key) => {
                    return (
                        <Link href={{ pathname: elemento.url }} passHref key={key}>
                            <div className={styles.containerCardSession} >
                                <div className={styles.containerCabecalho}>
                                    {elemento.name}
                                </div>
                                <div className={styles.containerCorpo}>
                                    {elemento.description}
                                </div>
                            </div>
                        </Link>
                    )
                })
            }
        </div >
    )
}