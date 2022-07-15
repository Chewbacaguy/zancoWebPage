import styles from '../../styles/home/SocialNetworks.module.css';
import { Icon } from '@iconify/react';

export default function SocialNetworks() {
    return (
        <div className={styles.social__networks}>
            <div>
                <a className={styles.socials} href="https://www.instagram.com/zanco_ig/" target="_blank" rel="noreferrer">
                    <Icon className={styles.icon} icon="entypo-social:instagram-with-circle" />
                </a>
            </div>
            <div>
                <a className={styles.socials} href="https://linktr.ee/Zanco.lt" target="_blank" rel="noreferrer">
                    <Icon className={styles.icon} icon="simple-icons:linktree" />
                </a>
            </div>
            <div>
                <a className={styles.socials} href="https://www.facebook.com/zancofb" target="_blank" rel="noreferrer">
                    <Icon className={styles.icon} icon="akar-icons:facebook-fill" />
                </a>
            </div>
            <div>
                <a className={styles.socials} href="https://twitter.com/Zanco_tw" target="_blank" rel="noreferrer">
                    <Icon className={styles.icon} icon="entypo-social:twitter-with-circle" />
                </a>
            </div>
        </div>
    );
}