import styles from '../../styles/home/Boxes.module.css';

export default function Boxes() {
    return (
        <div className={styles.flex__container}>
            <div className={styles.container}>
                <img src='/img/cajas.png' style={{ width: '100%' }} />
                <p className={`mt-4 ${styles.pill}`}>Facilitamos | tus | procesos</p>
            </div>
        </div>
    );
}