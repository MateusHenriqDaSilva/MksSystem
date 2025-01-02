// No arquivo Config.tsx
import styles from '../../../styles/config.module.css';
import { AiOutlineClose } from "react-icons/ai";

export default function Config({ isOpen, onClose }: any) {
    return (
        <div className={styles.containerGlobal}>
            {isOpen ? (
                <div className={styles.container}>
                    <div className={styles.conteudo}>
                        {/* Conteúdo do modal */}
                        <h1>Bem-vindo</h1>
                        <button className={styles.fechar} onClick={onClose}><AiOutlineClose /></button>
                    </div>
                </div>
            ) : (
                <></>
            )}
        </div>
    );
};