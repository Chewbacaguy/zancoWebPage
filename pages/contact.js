import Layout from '../components/layout'
import styles from '../styles/Contact.module.css'
import { Icon } from '@iconify/react';


import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';

export default function Contact() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <Layout>
            <section id="contact">
                <div className="container">
                    <aside>
                        <h4> {lang.contactTitle}</h4>
                        <p>{lang.contactText} </p>

                        <div className="info">
                            <article>
                                <span className="icon"><i className="uil uil-envelope"></i></span>
                                <div className="details">
                                    <h5>{lang.contactChat}</h5>
                                    <small>{lang.contactChatText}</small>
                                    <p>paulo.escobar@zanco.com.mx</p>

                                </div>
                            </article>
                            <article>
                                <span className="iconify" data-icon="uil:map-marker"></span>
                                <div className="details">
                                    <h5>{lang.contactOffice}</h5>
                                    <small>{lang.contactOfficeText}</small>
                                    <p>Monterrey, Nuevo Leon</p>
                                    <p>Carretera Nacional</p>
                                </div>
                            </article>
                            <article>
                                <Icon icon="akar-icons:phone"></Icon>
                                <div className="details">
                                    <h5>{lang.contactPhone}</h5>
                                    <small>{lang.contactPhoneText}</small>
                                    <p>+(52) 81-24-00-46-78</p>
                                </div>
                            </article>



                        </div>
                    </aside>
                    <form action="https://formspree.io/f/mgedzrpg" method="POST">
                        <input type="text" name="Name" placeholder={lang.contactInputName} required />
                        <input type="email" name="Email Address" placeholder={lang.contactInputEmail} required />
                        <input type="numer" name="Phone Number" placeholder={lang.contactInputPhone} required />
                        <textarea name="Message" placeholder={lang.contactInputMessage} required></textarea>
                        <button type="submit" className="btn">Send</button>
                    </form>
                </div>

            </section>

        </Layout>
    );
}