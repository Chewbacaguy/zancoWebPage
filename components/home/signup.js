import Link from 'next/link';
import styles from '../../styles/home/Signup.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';


export default function Signup() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.flex__container}>
            <div className={styles.background__red}>
                <img src='/img/logo_zanco.png' className={styles.logo}></img>
                <br />
                <br />
                <p className={styles.question}>{lang.signupTitle}</p>
                <p className={styles.content}>
                    {lang.signupContent}
                </p>
                <br />
                <Link href="https://zanco.zohocreatorportal.com/signup">
                    {/* <button className={styles.register__button}>{lang.signupRegister}</button> */}
                    <button className={styles.register__button} > {lang.signupRegister} </button>
                </Link>
                <br />
            </div>

        </div>
    );
}