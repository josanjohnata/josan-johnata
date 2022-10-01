import React from 'react';

import styles from './Home.module.css';
import {
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
          
        </main>
      </>
  );
}

export default Home;
