import { useState } from "react";
import { PopUp } from "../popUp";
import styles from "./styles.module.css";

export const Details = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = (e?: any) => {
    e.stopPropagation();
    setShowPopUp((prev) => !prev);
  };
  return (
    <section id="details" className={styles.details} onClick={togglePopUp}>
      <span className={styles.text}>Узнать подробности о консультации</span>
      {showPopUp && <PopUp togglePopUp={togglePopUp}/>}
    </section>
  );
};
