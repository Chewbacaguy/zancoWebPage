import Link from "next/link";
import SocialNetworks from "../components/home/social_networks";
import Layout from "../components/layout";
import styles from '../styles/SignIn.module.css'

import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';

export default function SignIn() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <Layout>
            <div className={styles.container}>
                <SocialNetworks></SocialNetworks>
                <div className={styles.login__card}>
                    <img src="/img/logo_zanco.png" alt="" />
                    <p className={styles.title}>{lang.loginTitle}</p>
                    <input className={styles.login__input} type="email" placeholder={lang.loginEmail} name="" id="" />
                    <br />
                    <input className={styles.login__input} type="password" placeholder={lang.loginPassword} name="" id="" />
                    <br />
                    <br />
                    <button className={styles.login__button}>
                        {lang.loginButton}
                    </button>
                    <br />
                    <p className={styles.text__auth}>
                        {lang.loginOr}
                    </p>
                    <button className={styles.social__auth__button}>
                        <img src="/img/google.png" alt="" />
                    </button>
                    <button className={styles.social__auth__button}>
                        <img src="/img/facebook.png" alt="" />
                    </button>
                    <br />
                    <br />
                    <p className={styles.text__auth}>
                        {lang.loginQuestion}
                        <br />
                        <Link href='/sign_up'>
                            <a className={styles.link__register}>{lang.loginRegister}</a>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout >
    );
}