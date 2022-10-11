import { FC, useEffect, useState } from "react";
import { navItemsHeader, navItemsHeaderFull } from "../../data/nav";

import styles from "./styles.module.css";

interface Props {
  isMainPage: boolean;
}

export const Navigation: FC<Props> = ({ isMainPage }) => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev); 

  return (
    <nav>
      <ul className={styles.list}>
        {(isMainPage ? navItemsHeader : navItemsHeaderFull).map((item) => (
          <li key={item.title} className={styles.listItem}>
            <a className={styles.link} href={item.href}>
              {item.title}
            </a>
          </li>
        ))}
      </ul>

      <img
        onClick={toggleNav}
        className={styles.burger}
        src={showNav ? "/assets/icons/close.svg" : "/assets/icons/burger.svg"}
        alt="buger"
      />

      {showNav && (
        <ul className={styles.mobileList}>
          {navItemsHeader.map((item) => (
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
        </ul>
      )}
    </nav>
  );
};
