import styles from '../styles/skeleton.module.css';

export default function Skeleton() {
    return (
        <div className={styles.main}>
            {[...Array(8)].map((_, i) => (
                <div key={i} className={styles.skeleton}>
                    <div className={styles.shimmer}>id: loading...</div>
                    <div className={styles.shimmer}>name: loading...</div>
                    <div className={styles.shimmer}>brand: loading...</div>
                    <div className={styles.shimmer}>description: loading...</div>
                    <div className={styles.shimmer}>price: loading...</div>
                </div>
            ))}
        </div>
    );
}
