import styles from '../../styles/home/Boxes.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function Boxes() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.flex__container}>
            <div className={styles.container}>
                <img src='/img/cajas.png' style={{ width: '100%' }} />
                <p className={`mt-4 ${styles.pill}`}>{lang.boxesMessage}</p>
                <p className='text-center mt-3'>{lang.boxesText}</p>
            </div>
        </div>
    );
}