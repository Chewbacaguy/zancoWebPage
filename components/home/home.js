import Link from "next/link";
import styles from "../../styles/home/Home.module.css"
import SocialNetworks from "./social_networks";

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';

export default function Home() {
    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.container}>
            <SocialNetworks></SocialNetworks>

            <img className={styles.home__img} src="/img/collage.png" alt="" />

            <div className={styles.container__packaging}>
                <p className={styles.container__title}>{lang.homePackage1} <br /> {lang.homePackage2}</p>
                <br />
                <Link href="/#assemble">
                    <button className={styles.container__button}>{lang.homeOrder}</button>
                </Link>
            </div>
        </div>
    );
}