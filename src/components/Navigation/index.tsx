import { type FC, useState } from "react";
import { navItemsHeader, navItemsHeaderFull } from "data/nav";
import { PopUp } from "components/PopUp";

import styles from "./styles.module.css";

interface Props {
  isMainPage: boolean;
}

const Navigation: FC<Props> = ({ isMainPage }) => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);

  const [showPopUp, setShowPopUp] = useState(false);
  const togglePopUp = (e?: any) => {
    e.stopPropagation();
    setShowPopUp((prev) => !prev);
  };

  return (
    <nav>
      {showPopUp && <PopUp togglePopUp={togglePopUp} />}
      <ul className={styles.list}>
        {(isMainPage ? navItemsHeader : navItemsHeaderFull).map((item) => (
          <li key={item.title} className={styles.listItem}>
            <a className={styles.link} href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
        <li onClick={toggleNav} key="Контакты" className={styles.listItem}>
          <div className={styles.mobileLink} onClick={togglePopUp}>
            Контакты
          </div>
        </li>
        <li key="Тарифы" className={styles.listItem}>
          <a className={styles.link} href="/tariffs">
            Тарифы
          </a>
        </li>
      </ul>

      <img
        onClick={toggleNav}
        className={styles.burger}
        src={showNav ? "/assets/icons/close.svg" : "/assets/icons/burger.svg"}
        alt="buger"
      />

      {showNav && (
        <ul className={styles.mobileList}>
          {(isMainPage ? navItemsHeader : navItemsHeaderFull).map((item) => (
            <li
              onClick={toggleNav}
              key={item.title}
              className={styles.mobileListItem}
            >
              <a className={styles.mobileLink} href={item.href}>
                {item.title}
              </a>
            </li>
          ))}
          <li
            onClick={toggleNav}
            key="Контакты"
            className={styles.mobileListItem}
          >
            <div className={styles.mobileLink} onClick={togglePopUp}>
              Контакты
            </div>
          </li>
          <li
            onClick={toggleNav}
            key="Тарифы"
            className={styles.mobileListItem}
          >
            <a className={styles.mobileLink} href="/tariffs">
              Тарифы
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navigation;
