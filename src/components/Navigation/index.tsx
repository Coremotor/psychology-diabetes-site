import { useState } from "react";
import { navItems } from "../../data/nav";

import styles from "./styles.module.css";

export const Navigation = () => {
  const [showNav, setShowNav] = useState(false);
  const toggleNav = () => setShowNav((prev) => !prev);
  return (
    <nav>
      <ul className={styles.list}>
        {navItems.map((item) => (
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
          {navItems.map((item) => (
            <li onClick={toggleNav} key={item.title} className={styles.mobileListItem}>
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
