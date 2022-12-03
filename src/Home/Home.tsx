import styles from './Home.module.css';
import {
  FolderOpen,
  MediumLogo,
  InstagramLogo,
  DeviceMobile,
  ToggleLeft
} from 'phosphor-react';
import { useNavigate } from 'react-router';

import johnIcon from '../assets/john-icon.png';

function Home() {
  const navigate = useNavigate();

  const redirectMyProjects = () => {
    navigate('/my-projects', { replace: true });
  };

  const redirectSocialMedias = () => {
    navigate('/social-medias', { replace: true });
  };

  const redirectContacts = () => {
    navigate('/contacts', { replace: true });
  };

  return (
      <>
        <main>
          <header className={styles.header}>
            <ToggleLeft size={32} color='#808080' className={styles.toggleLeft} />
            <img src={johnIcon} alt="icon programmer"/>
            <h1 className={styles.title}>Josan Johnata</h1>
            <p className={styles.subtitle}>Full Stack Developer</p>
          </header>
          <section className={styles.sectionMenu}>
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
              <InstagramLogo size={32} className={styles.sectionSocialMedia} />
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
