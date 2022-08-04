import Layout from "../components/layout";
import styles from '../styles/About.module.css';

import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';

export default function About() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <Layout>
            <div className={styles.container}>
                <p className={styles.title}>Nosotros</p>
                <div className={styles.grid__mission__vision}>
                    <div>
                        <p className={styles.subtitle}>{lang.aboutUsMission}</p>
                        <div className={styles.card__mission}>
                            {lang.aboutUsMissionText}
                        </div>
                        <div className={styles.container__image}>
                            <img src="/img/mission.png" />
                        </div>
                    </div>
                    <div>
                        <p className={styles.subtitle}>{lang.aboutUsVision}</p>
                        <div className={styles.card__vision}>
                            {lang.aboutUsVisionText}
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