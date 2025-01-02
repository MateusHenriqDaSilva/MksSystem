import Link from 'next/link'
import styles from '../../styles/selecaoMenu.module.css'

const trabalhos = [
    {
        id: 1,
        titulo: 'Linguagens',
        url: '/programacao/linguagens',
    }, {
        id: 2,
        titulo: 'Framework',
        url: '/programacao/framework',
    }, {
        id: 3,
        titulo: 'Projetos',
        url: '/programacao/projetos',
    },
]

export default function SelecaoMenuProgramacao() {
    return (
        <div className={styles.cartaoEspaco}>
            {
                trabalhos.map((elemento, key) => {
                    return (
                        <Link href={{ pathname: elemento.url }} passHref key={key}>
                            <div className={styles.cartao} key={key}>
                                <h1 className={styles.cartaoLetras} key={elemento.id}>{elemento.titulo}</h1>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    )
}