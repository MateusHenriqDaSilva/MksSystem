import styles from '../styles/skeletonBlog.module.css'

export default function SkeletonBlog() {
    return (
        <div className={styles.container}>
            <div className={styles.cabecalho}>
                
            </div>
            <div className={styles.template}>
                <div className={styles.quadrado}>
                    
                </div>
                <div className={styles.quadrado}>

                </div>
                <div className={styles.quadrado}>
                    
                </div>
            </div>
        </div>
    )
}
