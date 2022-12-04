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
  const [isLight, setIsLight] = useState(true);
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
        <main className={isLight === true ? styles.lightTheme : styles.darkTheme}>
          <header className={styles.header}>
            <span
              className={styles.toggleButton}
              onClick={() => toggleTheme()}
            >
              {
                isLight === true? <ToggleRight size={32} color='#808080' /> :
                <ToggleLeft size={32} color='#4EA8DE' />
              }
            </span>
            <img src={johnIcon} alt="icon programmer"/>
            <h1 className={styles.title}>Josan Johnata</h1>
            <p className={styles.subtitle}>Full Stack Developer</p>
          </header>
          <section className={isLight === true ? styles.lightTheme : styles.sectionMenu}>
            <a href={'https://github.com/josanjohnata'} target="_blank">
              My projects
              <FolderOpen size={32} className={styles.sectionProjects} />
            </a>
            <a href='https://medium.com/@josanjohnata' target={'_blank'}>
              Blog
              <MediumLogo size={32} className={styles.sectionBlog} />
            </a>
            <button onClick={() => redirectSocialMedias()}>
              Social medias
              <Camera size={32} className={styles.sectionSocialMedia} />
            </button>
            <button onClick={() => redirectContacts()}>
              Contacts
              <DeviceMobile size={32} className={styles.sectionContact} />
            </button>
          </section>
          <footer>&copy; Copyright 2020 - 2022 All rights reserved | By Josan Johnata </footer>
        </main>
      </>
  );
}

export default Home;
