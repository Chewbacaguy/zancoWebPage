import Link from 'next/link';
import styles from '../../styles/home/Signup.module.css';

export default function Signup() {
    return (
        <div className={styles.background__red}>
            <img src='/img/logo_zanco.png' className={styles.logo}></img>
            <br />
            <br />
            <p className={styles.question}>¿Aún no te registras?</p>
            <p className={styles.content}>
                Al registrarte podrás ver reflejado el seguimiento de todos tus proyectos en tiempo real, tendrás acceso a las estadisticas y gráficas del mercado en la industria y contarás con acceso directo al sistema operativo digital.
            </p>
            <br />
            <Link href="/sign_up">
                <button className={styles.register__button}> Registrarse</button>
            </Link>
            <br />
        </div>
    );
}