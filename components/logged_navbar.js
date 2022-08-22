import Image from 'next/image';
import styles from '../styles/Navbar.module.css';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import es from '../locales/es';
import en from '../locales/en';

export default function Navbar() {
    const router = useRouter();

    const locale = router.locale;
    console.log(locale);
    const lang = locale === 'es' ? es : en;

    const changeLanguage = (e) => {
        const locale = e.target.checked ? 'es' : 'en';
        console.log(locale);
        router.push(router.pathname, router.asPath, { locale });
    }

    return (
        <nav className={`${styles.background} navbar navbar-expand-lg navbar-dark`}>
            <div className="container">
                <Link href='/'>
                    <a className="navbar-brand">
                        <img src="/img/logo_zanco.png" />
                    </a>
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link href='/'>
                            <a className={styles.nav__item} aria-current="page">{lang.navHome}</a>
                        </Link>
                        <Link href='/about'>
                            <a className={styles.nav__item}>{lang.navAbout}</a>
                        </Link>
                        <Link href='#'>
                            <a className={styles.nav__item}>{lang.navLogout}</a>
                        </Link>
                        <a className={styles.nav__item} >
                            <label className={styles.toggle}>
                                <input type='checkbox' checked={locale == 'es' ? 'checked' : ''} className={styles.checkbox} onChange={changeLanguage} />
                                <span className={styles.slider}></span>
                                <span className={styles.labels} data-on="ES" data-off="EN"></span>
                            </label>
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}