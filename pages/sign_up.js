import Layout from "../components/layout";
import styles from '../styles/SignUp.module.css'
import Link from "next/link";
import SocialNetworks from "../components/home/social_networks";

export default function SignUp() {
    return (
        <Layout>
            <SocialNetworks></SocialNetworks>
            <div className={styles.container}>
                <div className={styles.grid__signup}>
                    <div className={styles.signup__image}></div>
                    <div className={styles.signup__form}>
                        <img src="/img/logo_zanco.png" alt="" />
                        <p className={styles.title}>Registro</p>
                        <input className={styles.signup__input} type="text" name="" id="" placeholder="Nombre de empresa" />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder="Correo" />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder="Contraseña" />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder="Confirma contraseña" />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder="Areas de interes" />
                        <br />
                        <br />
                        <button className={styles.signup__button}>
                            Registrarse
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
                        <p className={styles.text__auth}>
                            ¿Ya tienes cuenta?
                            <br />
                            <Link href='/sign_in'>
                                <a className={styles.link__register}>Inicia sesión</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}