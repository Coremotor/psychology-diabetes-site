import type { FC } from "react";
import { contacts } from "../../data/contacts";
import styles from "./styles.module.css";

interface Props {
  togglePopUp: () => void;
}

export const PopUp: FC<Props> = ({ togglePopUp }) => {
  return (
    <div className={styles.popup} onClick={togglePopUp}>
      <div className={styles.window}>
        <h2 className={styles.title}>Узнать подробности о консультации</h2>
        <ul className={styles.list}>
          {contacts.map((c) => (
            <li key={c.desc} className={styles.listItem}>
              <a href={c.href} className={styles.listItemLink} target="_blank">
                <img
                  src={c.src}
                  alt={c.href}
                  className={styles.listItemLinkImage}
                />
                <span className={styles.listItemDesc}>{c.desc}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
