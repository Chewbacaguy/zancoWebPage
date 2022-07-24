import Layout from "../components/layout";
import styles from '../styles/SignUp.module.css'
import Link from "next/link";
import SocialNetworks from "../components/home/social_networks";

import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';
import { useState } from "react";

export default function SignUp() {

    const [value, setValue] = useState("initial");

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <Layout>
            <SocialNetworks></SocialNetworks>
            <div className={styles.container}>
                <div className={styles.grid__signup}>
                    <div className={styles.signup__image}></div>
                    <div className={styles.signup__form}>
                        <img src="/img/logo_zanco.png" alt="" />
                        <p className={styles.title}>{lang.registerTitle}</p>
                        <input className={styles.signup__input} type="text" name="" id="" placeholder={lang.registerCompany} />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder={lang.registerEmail} />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder={lang.registerPassword} />
                        <br />
                        <input className={styles.signup__input} type="text" name="" id="" placeholder={lang.registerConfirmPassword} />
                        <br />
                        <select
                            className={styles.signup__input}
                            onChange={(e) =>
                                setValue(e.target.value)
                            }
                            style={{ color: value == "initial" ? 'gray' : "black" }}>
                            <option value="initial" selected disabled>{lang.registerArea}</option>
                            <option value="">{lang.registerSelectOption1}</option>
                            <option value="">{lang.registerSelectOption2}</option>
                            <option value="">{lang.registerSelectOption3}</option>
                            <option value="">{lang.registerSelectOption4}</option>
                            <option value="">{lang.registerSelectOption5}</option>
                            <option value="">{lang.registerSelectOption6}</option>
                        </select>
                        <br />
                        <br />
                        <button className={styles.signup__button}>
                            {lang.registerButton}
                        </button>
                        <br />
                        <p className={styles.text__auth}>
                            {lang.registerOr}
                        </p>
                        <button className={styles.social__auth__button}>
                            <img src="/img/google.png" alt="" />
                        </button>
                        <button className={styles.social__auth__button}>
                            <img src="/img/facebook.png" alt="" />
                        </button>
                        <p className={styles.text__auth}>
                            {lang.registerQuestion}
                            <br />
                            <Link href='/sign_in'>
                                <a className={styles.link__register}>{lang.registerLogin}</a>
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
    );
}