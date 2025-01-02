import styles from "../../styles/corpoBlog.module.css"
import Link from 'next/link'
import WhatsAppButton from "./WhatsAppButton"

interface MyNestedObject {
    header?: string
    text: string
    code?: string
}

interface MyObject {
    id: string
    title?: string
    description?: string
    link?: string
    video?: string
    post: MyNestedObject[];
}

export default function CorpoBlog(props: MyObject) {
    return (
        <Link href={{ pathname: `${props.link}${props.id}` }} passHref>
            <div className={styles.containerItem}>
                <h1 className={styles.title}>{props.title}</h1>
                <h1 className={styles.description}>{props.description}</h1>
                <WhatsAppButton text={`Olha essa postagem no Blog do Mateus : https://www.mateushenrique.blog.br${props.link}${props.id}`} />
            </div>
        </Link>
    )
}

