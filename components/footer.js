import Link from 'next/link';
import { Icon } from '@iconify/react';
import en from '../locales/en';
import es from '../locales/es';
import { useRouter } from 'next/router';


export default function Footer() {

    const router = useRouter();

    const locale = router.locale;
    console.log(locale);
    const lang = locale === 'es' ? es : en;

    return (
        <footer>
            <div className="container">

                <div className="row row-cols-1 row-cols-lg-4 g-5 text-white">
                    <div className="col-lg">
                        <p style={{ fontWeight: 'bold' }}>
                            <Link href="/">
                                <a className="footer__link" >Zanco</a>
                            </Link>
                        </p>
                        <p></p>
                        <p>{lang.footerSlogan}</p>

                        {/* <div className="footer__subscribe">
                            <input type="email" placeholder="Enter Email" required />
                            <button type="submit"> <i className="uil uil-arrow-right"></i> </button>
                        </div> */}
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}>{lang.footerPermalinks}</p>
                        <ul className="permalinks">
                            <li> <Link href="/"><a>{lang.navHome}</a></Link></li>
                            <li> <Link href="/about"><a>{lang.navAbout}</a></Link></li>
                            <li> <Link href="/contact"><a>{lang.navContact}</a></Link></li>
                            <li> <Link href="/sign_in"><a>{lang.navLogin}</a></Link></li>
                            <li> <Link href="/sign_up"><a>{lang.navRegister}</a></Link></li>
                        </ul>
                    </div>
                    <div className="col-lg ps-5">
                        <p style={{ fontWeight: 'bold' }}> {lang.footerPrivacy}</p>
                        <ul className="privacy">
                            <li><Link href="#"><a>{lang.footerPrivacyPolicy}</a></Link></li>
                            <li><Link href="#"><a>{lang.footerPrivacyTerms}</a></Link></li>
                            <li><Link href="#"><a>{lang.footerPrivacyRefund}</a></Link></li>
                        </ul>
                    </div>

                    <div className="col-lg ps-4">
                        <p style={{ fontWeight: 'bold' }}>{lang.footerContactUs}</p>
                        <p>
                            (+52) 81 2400 4678 <br />
                            santiago.torres@zanco.com.mx
                        </p>
                        <ul className="footer__socials">
                            <li>
                                <a href="https://www.facebook.com/zancofb" target="_blank" rel='noreferrer'> <i className="uil uil-facebook-f"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/zanco_ig/" target="_blank" rel='noreferrer'> <i className="uil uil-instagram-alt"></i></a>
                            </li>
                            <li>
                                <a href="https://twitter.com/Zanco_tw" target="_blank" rel='noreferrer'> <i className="uil uil-twitter"></i></a>
                            </li>
                            <li>
                                <a href="https://linktr.ee/Zanco.lt" target="_blank" rel='noreferrer'>
                                    <Icon icon="simple-icons:linktree" style={{ color: 'white' }}></Icon></a>
                            </li>

                        </ul>
                    </div>

                    <div className="col-lg">
                        <div className="copyright">
                            <small>Copyright &copy; @santorres & @vergaraa._ </small>
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
}