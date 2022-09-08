import Link from 'next/link';
import styles from '../../styles/home/SuggestionBox.module.css';

import { useRouter } from 'next/router';
import en from '../../locales/en';
import es from '../../locales/es';


export default function SuggestionBox() {

    const router = useRouter();

    const locale = router.locale;
    const lang = locale === 'es' ? es : en;

    return (
        <div className={styles.flex__container}>
            <div className={styles.background__red}>
                
                <br />
                <br />
                <p className={styles.question}>{lang.suggestionTitle}</p>
                <img src='/img/suggestionBox.svg' className={styles.logo}></img>
             
                <a href="https://freesuggestionbox.com/pub/yafbhaa">
                    <button className={styles.register__button}>{lang.suggestionsButtonTitle}</button>
                </a>
                <br />
            </div>

        </div>
    );
}