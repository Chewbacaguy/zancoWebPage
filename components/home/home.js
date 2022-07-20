import Link from "next/link";
import styles from "../../styles/home/Home.module.css"
import SocialNetworks from "./social_networks";

export default function Home() {
    return (
        <div className={styles.container}>
            <SocialNetworks></SocialNetworks>

            <img className={styles.home__img} src="/img/home.png" alt="" />

            <div className={styles.container__packaging}>
                <p className={styles.container__title}>Integramos empaque <br /> para tu manufactura</p>
                <br />
                <Link href="/#assemble">
                    <button className={styles.container__button}>Haz tu pedido ↓</button>
                </Link>
            </div>
        </div>
    );
}