import { CaretDoubleLeft } from "phosphor-react";
import { useNavigate } from "react-router";
import styles from "./BackToHome.module.css";

export function BackToHome() {
  const navigate = useNavigate()
  const back = () => {
  navigate('/', {replace: true});
  }

  return (
    <button className={styles.backToHome} onClick={() => back()}>
      <CaretDoubleLeft size={32} weight="bold" />
    </button>
  )
};
