import { EnvelopeSimple, LinkedinLogo, WhatsappLogo } from "phosphor-react";
import { BackToHome } from "../components/BackToHome";
import styles from './pages.module.css';

export function Contacts() {
  return (
    <>
      <BackToHome />
      <h2 className={styles.title}>My Contacts</h2>
      <section className={styles.sectionMenu}>
        <a href='https://www.linkedin.com/in/josanjohnata/' target={'_blank'}>
          LinkedIn
          <LinkedinLogo size={32} />
        </a>
        <a href="mailto:josanjohnata@gmail.com.br" target={'_blank'}>
          E-mail
          <EnvelopeSimple size={32} />
        </a>
        <a href='https://wa.me/85998139612' target={'_blank'}>
          WhatsApp
          <WhatsappLogo size={32} />
        </a>
      </section>
    </>
  )
};