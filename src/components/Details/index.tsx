import {useState} from "react";
import {PopUp} from "components/popUp";

import styles from "./styles.module.css";

const Details = () => {
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

export default Details;
