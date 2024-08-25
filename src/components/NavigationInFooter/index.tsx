import { type FC, useState } from "react";
import { navItemsFooter, navItemsFooterFull } from "data/nav";
import { PopUp } from "components/PopUp";

import styles from "./styles.module.css";

interface Props {
  isMainPage: boolean;
}

export const NavigationInFooter: FC<Props> = ({ isMainPage }) => {
  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = (e?: any) => {
    e.stopPropagation();
    setShowPopUp((prev) => !prev);
  };

  return (
    <>
      {showPopUp && <PopUp togglePopUp={togglePopUp} />}
      <ul className={styles.list}>
        {(isMainPage ? navItemsFooter : navItemsFooterFull).map((item) => (
          <li key={item.title} className={styles.listItem}>
            <a
              id={item.title}
              className={styles.link}
              href={item.title === "Контакты" ? "#" : item.href}
              onClick={
                item.title === "Контакты"
                  ? togglePopUp
                  : () => {
                      return;
                    }
              }
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};
