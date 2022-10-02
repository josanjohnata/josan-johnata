import styles from './Home.module.css';
import {
  FolderOpen,
  MediumLogo,
  InstagramLogo,
  DeviceMobile,
  ToggleLeft
} from 'phosphor-react';

function Home() {
  return (
      <>
        <main>
          <header className={styles.header}>
            <ToggleLeft size={32} color='#808080' className={styles.toggleLeft} />
            <img src='src/assets/icon-programer.png' alt="icon programmer" testID='home-image-header' />
            <h1 className={styles.title}>Josan Johnata</h1>
            <p className={styles.subtitle}>Full Stack Developer</p>
          </header>
          <section className={styles.sectionMenu}>
            <button>
              My projects
              <FolderOpen size={32} className={styles.sectionProjects} />
            </button>
            <button>
              Blog
              <MediumLogo size={32} className={styles.sectionBlog} />
            </button>
            <button>
              Social medias
              <InstagramLogo size={32} className={styles.sectionSocialMedia} />
            </button>
            <button>
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
