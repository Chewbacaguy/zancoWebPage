import styles from '../../styles/home/WhyZanco.module.css'

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function WhyZanco() {
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.flex__container}>
            <div className={styles.background__gray}>
                <div className={styles.grid__title__image}>
                    <div>
                        <p className={styles.title}>{lang.whyZancoQuestion}</p>
                        <br />
                        <ul className={styles.list__image__red__check}>
                            <li className={styles.list__item}>{lang.whyZancoBullet1}</li>
                            <br />
                            <li className={styles.list__item}>{lang.whyZancoBullet2}</li>
                            <br />
                            <li className={styles.list__item}>{lang.whyZancoBullet3}</li>
                        </ul>
                    </div>
                    <div>
                        <img src='/img/computadora.png' style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
    );
}