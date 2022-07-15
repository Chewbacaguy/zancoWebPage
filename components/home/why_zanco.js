import styles from '../../styles/home/WhyZanco.module.css'

export default function WhyZanco() {
    return (
        <div className={styles.background__gray}>
            <div className={styles.grid__title__image}>
                <div>
                    <p className={styles.title}>¿Por qué con Zanco?</p>
                    <br />
                    <ul className={styles.list__image__red__check}>
                        <li className={styles.list__item}>Solucionamos procesos logísticos para la adquisición de materiales y proyectos industriales.</li>
                        <br />
                        <li className={styles.list__item}>Automatizamos la operación integral mediante nuestro sistema operativo digital “M.I” </li>
                        <br />
                        <li className={styles.list__item}>Competimos en precios y proponemos ofertas exclusivas de acuerdo a la necesidad del cliente.</li>
                    </ul>
                </div>
                <div>
                    <img src='/img/computadora.png' style={{ width: '100%' }} />
                </div>
            </div>
        </div>
    );
}