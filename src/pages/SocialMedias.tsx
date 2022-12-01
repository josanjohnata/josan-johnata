import { BackToHome } from "../components/BackToHome";

// import styles from '../Home/Home.module.css';
import styles from './pages.module.css';

import {
  InstagramLogo,
  TiktokLogo,
  YoutubeLogo
} from 'phosphor-react';

export function SocialMedia() {
  return (
    <>
      <BackToHome />
      <h2 className={styles.title}>Social Medias</h2>
      <section className={styles.sectionMenu}>
        <a href='https://www.instagram.com/johndevschool/' target={'_blank'}>
          Instagram
          <InstagramLogo size={32} className={styles.instagramButton} />
        </a>
        <a>
          TikTok
          <TiktokLogo size={32} className={styles.tiktokButton} />
        </a>
        <a href='https://www.youtube.com/channel/UCFpAqLpzaeB3iVNitqvTlcw' target={'_blank'}>
          YouTube
          <YoutubeLogo size={32} className={styles.youtubeButton} />
        </a>
      </section>
    </>
  )
};