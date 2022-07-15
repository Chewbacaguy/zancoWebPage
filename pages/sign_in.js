import Link from "next/link";
import SocialNetworks from "../components/home/social_networks";
import Layout from "../components/layout";
import styles from '../styles/SignIn.module.css'

export default function SignIn() {
    return (
        <Layout>
            <div className={styles.container}>
                <SocialNetworks></SocialNetworks>
                <div className={styles.login__card}>
                    <img src="/img/logo_zanco.png" alt="" />
                    <p className={styles.title}>Iniciar Sesión</p>
                    <input className={styles.login__input} type="email" placeholder="Correo" name="" id="" />
                    <br />
                    <input className={styles.login__input} type="password" placeholder="Contraseña" name="" id="" />
                    <br />
                    <br />
                    <button className={styles.login__button}>
                        Ingresar
                    </button>
                    <br />
                    <p className={styles.text__auth}>
                        o ingresar con
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
                        ¿Aun no tienes usuario?
                        <br />
                        <Link href='/sign_up'>
                            <a className={styles.link__register}>Registrate</a>
                        </Link>
                    </p>
                </div>
            </div>
        </Layout >
    );
}