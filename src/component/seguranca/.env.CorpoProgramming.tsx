import Link from 'next/link'
import styles from './../../../styles/CorpoProgramming.module.css'
import imgBinario from '../../../../public/binario.jpg'
import imgCosmo from '../../../../public/cosmos.jpg'
import imgFrame from '../../../../public/frame.webp'
import Image from 'next/image'

const trabalhos = [
    {
        id: 1,
        titulo: 'Programming Languages',
        data: '07/08/1997',
        horas: '20:30',
        url: '/programming/programminglanguages',
        img: imgBinario
    },
    {
        id: 2,
        titulo: 'Framework',
        data: '07/08/1997',
        horas: '20:30',
        url: '/programming/framework',
        img: imgFrame
    },
    {
        id: 3,
        titulo: 'Projects',
        data: '07/08/1997',
        horas: '20:30',
        url: '/projects',
        img: imgCosmo
    },
]

export default function CorpoSeguranca() {
    return (
        <div className={styles.ContainerGlobal}>
            <div className={styles.cartaoEspaco}>
                {
                    trabalhos.map((elemento, key) => {
                        return (
                            <Link href={elemento.url} passHref key={key}>
                                <div className={styles.cartao} key={key}>
                                    <Image className={styles.imagem}
                                        src={elemento.img}
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                    />
                                    <h1 className={styles.cartaoLetras} key={elemento.id}>{elemento.titulo}</h1>
                                </div>
                            </Link>
                        )
                    })
                }

            </div>
        </div >
    )
}