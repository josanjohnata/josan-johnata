import { useState } from 'react';

import {
  FolderOpen,
  MediumLogo,
  DeviceMobile,
  ToggleLeft,
  Camera,
  ToggleRight
} from 'phosphor-react';
import { useNavigate } from 'react-router';
import johnIcon from '../assets/john-icon.png';

import styles from './Home.module.css';

function Home() {
  const [isLight, setIsLight] = useState(false);
  const navigate = useNavigate();

  const toggleTheme = () => {
    setIsLight(!isLight);
  };

  const redirectSocialMedias = () => {
    navigate('/social-medias', { replace: true });
  };

  const redirectContacts = () => {
    navigate('/contacts', { replace: true });
  };

  return (
      <>
        <main className={isLight ? styles.lightTheme : styles.darkTheme}>
          <header className={styles.header}>
            <span
              className={isLight ? styles.toggleButton : styles.darkTheme}
              onClick={() => toggleTheme()}
            >
              {
                isLight
                ? <ToggleRight size={32} color='#333' />
                : <ToggleLeft size={32} color='#4EA8DE' />
              }
              Theme
            </span>
            <img src={johnIcon} alt="icon programmer"/>
            <h1 className={isLight ? styles.title : styles.titleDark}>Josan Johnata</h1>
            <p className={isLight ? styles.subtitle : styles.subtitleDark}>Full Stack Developer</p>
          </header>
          <section className={isLight ? styles.lightThemeLight : styles.sectionMenu}>
            <a href={'https://github.com/josanjohnata'} target="_blank">
              My projects
              <FolderOpen size={32} />
            </a>
            <a href='https://medium.com/@josanjohnata' target={'_blank'}>
              Blog
              <MediumLogo size={32} />
            </a>
            <button onClick={() => redirectSocialMedias()}>
              Social medias
              <Camera size={32} />
            </button>
            <button onClick={() => redirectContacts()}>
              Contacts
              <DeviceMobile size={32} />
            </button>
          </section>
          <footer>&copy; Copyright 2020 - 2022 All rights reserved | By Josan Johnata </footer>
        </main>
      </>
  );
}

export default Home;
