import styles from '../../styles/home/WhatWeDo.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function WhatWeDo() {
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.flex__container}>
            <div className={styles.background__gray}>
                <p className={styles.title}>{lang.whatWeDoTitle}</p>
                <div className={`${styles.grid__process} mt-5`}>
                    {/* FIRST ROW */}
                    <div className={styles.productionImage}>
                        <img src='/img/engranaje.png' />
                    </div>
                    <div className={styles.divider__up}>
                        <img src='/img/divider_up.png' />
                    </div>
                    <div className={styles.cartImage}>
                        <img src='/img/cart.png' />
                    </div>
                    <div className={styles.divider__down}>
                        <img src='/img/divider_down.png' />
                    </div>
                    <div className={styles.truckImage}>
                        <img src='/img/truck.png' />
                    </div>
                    {/* SECOND ROW */}
                    <div className={styles.productionText}>
                        <p className={styles.subtitle}>{lang.whatWeDoStep1}</p>
                        <p className={styles.content}>
                            {lang.whatWeDoText1}
                        </p>
                    </div>
                    <div></div>
                    <div className={styles.cartText}>
                        <p className={styles.subtitle}>{lang.whatWeDoStep2}</p>
                        <p className={styles.content}>
                            {lang.whatWeDoText2}
                        </p>
                    </div>
                    <div></div>
                    <div className={styles.truckText}>
                        <p className={styles.subtitle}>{lang.whatWeDoStep3}</p>
                        <p className={styles.content}>
                            {lang.whatWeDoText3}
                        </p>
                    </div>
                </div>
            </div>

        </div>
    );
}