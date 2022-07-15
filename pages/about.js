import Layout from "../components/layout";
import styles from '../styles/About.module.css'
export default function About() {
    return (
        <Layout>
            <div className={styles.container}>
                <p className={styles.title}>Nosotros</p>
                <div className={styles.grid__mission__vision}>
                    <div>
                        <p className={styles.subtitle}>Misión</p>
                        <div className={styles.card__mission}>
                            Facilitar la adquisición de materiales de empaque mediante el proceso logístico de nuestro sistema integrador digital MI (Motor Integral).
                        </div>
                        <div className={styles.container__image}>
                            <img src="/img/mission.png" />
                        </div>
                    </div>
                    <div>
                        <p className={styles.subtitle}>Visión</p>
                        <div className={styles.card__vision}>
                            Convertirnos en la empresa líder en distribución industrial de empaque.
                        </div>
                        <div className={styles.container__image}>
                            <img src="/img/vision.png" />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}