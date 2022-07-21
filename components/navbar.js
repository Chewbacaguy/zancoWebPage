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
        router.push('/', '/', { locale });
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
                        <Link href='/contact'>
                            <a className={styles.nav__item}>{lang.navContact}</a>
                        </Link>
                        <Link href='/sign_in'>
                            <a className={`${styles.nav__item} ${styles.nav__item__login}`}>{lang.navLogin}</a>
                        </Link>
                        <Link href='/sign_up'>
                            <a className={`${styles.nav__item} ${styles.nav__item__register}`}>{lang.navRegister}</a>
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
        // <nav className={`navbar navbar-expand-lg navbar-dark ${router.pathname == '/contact' || router.pathname == '/packaging' ? '' : 'bg-transparent '} fixed-top`} style={{ height: '6rem', color: 'white!important' }}>
        //     <div id='#nav' className={`container-fluid`}>
        //         <Link href="/">
        //             <a className={`${styles.abs} navbar-brand`}>
        //                 <Image src="/img/logo_zanco.png" height='70px' width='70px' />
        //             </a>
        //         </Link>
        //         <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNavbar">
        //             <span className="navbar-toggler-icon"></span>
        //         </button>
        //         <div className={`container-lg ${styles.navbarBg}`}>
        //             <div className={`navbar-collapse collapse `} id="collapseNavbar">
        //                 <ul className={`navbar-nav ${styles.navbarAlignment}`}>
        //                     <li className="nav-item ">
        //                         <Link href="/"  >
        //                             <a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/" ? styles.activeLink : ""}`}>Home</a>
        //                         </Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href='/#about'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#about" ? styles.activeLink : ""}`}>{lang.navAbout}</a></Link>
        //                     </li>
        //                     {/* <li className="nav-item">
        //                         <Link href='/#testimonials'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#testimonials" ? styles.activeLink : ""}`}>Testimonials</a></Link>
        //                     </li> */}
        //                     <li className="nav-item">
        //                         <Link href='/#faqs'><a className={`nav-link ${styles.navlinkleft} ${router.asPath == "/#faqs" ? styles.activeLink : ""}`}>FAQs</a></Link>
        //                     </li>
        //                     <li className="nav-item">
        //                         <Link href="/contact">
        //                             <a className={`nav-link ${styles.navlinkleft} ${router.pathname == "/contact" ? styles.activeLink : ""}`}>{lang.navContact}</a>
        //                         </Link>
        //                     </li>
        //                 </ul>
        //                 <ul className={`navbar-nav ms-auto`}>
        //                     <li className='nav-link mt-2'>
        //                         <Link href="/home">
        //                             <a className={`nav-link px-5 ${styles.navlinkright} ${styles.navLogin}`}>{lang.navLogin}</a>
        //                         </Link>
        //                     </li>
        //                     <li className='nav-item mt-2'>
        //                         <a className='nav-link'>
        //                             <select className="form-select" onChange={changeLanguage} >
        //                                 <option value='es' onChange={changeLanguage} defaultValue={locale}>Español</option>
        //                                 <option value='en' onChange={changeLanguage} defaultValue={locale}>English</option>
        //                             </select>
        //                         </a>
        //                     </li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>
        // </nav>
    );
}