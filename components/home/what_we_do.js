import styles from '../../styles/home/WhatWeDo.module.css';

export default function WhatWeDo() {
    return (
        <div className={styles.background__gray}>
            <p className={styles.title}>Nuestro proceso</p>
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
                    <p className={styles.subtitle}>1. Producción</p>
                    <p className={styles.content}>
                        Se da luz verde al proyecto. ¡Manos a la obra!
                    </p>
                </div>
                <div></div>
                <div className={styles.cartText}>
                    <p className={styles.subtitle}>2. Integración</p>
                    <p className={styles.content}>
                        Coordinación de operación y logística.
                    </p>
                </div>
                <div></div>
                <div className={styles.truckText}>
                    <p className={styles.subtitle}>3. Entrega</p>
                    <p className={styles.content}>
                        ¡Abracadabra!
                        Finalizamos tu pedido con éxito.
                    </p>
                </div>
            </div>
        </div>
    );
}