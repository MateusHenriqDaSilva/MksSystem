import styles from './../../styles/subCabecalho.module.css'
import Link from 'next/link'


const listaMenuItens = [
    {
        id: 1,
        titulo: 'Instagram',
        link: 'https://www.instagram.com/_teus.exe/'
    }, {
        id: 2,
        titulo: 'Linkedin',
        link: 'https://www.linkedin.com/in/mateus-henrique-309402198/'
    },
    {
        id: 3,
        titulo: 'Github',
        link: 'https://github.com/MateusHenriqDaSilva'
    },
    {
        id: 4,
        titulo: 'Facebook',
        link: 'https://www.facebook.com/profile.php?id=100009415090594'
    },
    {
        id: 5,
        titulo: 'Whatsapp',
        link: 'https://wa.me/message/364HZ5KCV7OIM1'
    }
]

export default function SubCabecalho() {
    return (
        <div className={styles.SubCabecalhoEspacoGlobal}>
            <div className={styles.SubCabecalhoEspaco}>
                {
                    listaMenuItens.map((elemento, key) => {
                        return (
                            <Link href={elemento.link} passHref key={key} className={styles.listaItens}>
                                {elemento.titulo}
                            </Link>
                        )
                    })
                }
            </div>
            <b className={styles.bordaFinal}></b>
        </div>
    )
}

