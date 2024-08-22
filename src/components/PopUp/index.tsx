import { type FC, useState } from "react";
import { contacts } from "data/contacts";

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
            <Item item={c} key={c.href} />
          ))}
        </ul>
      </div>
    </div>
  );
};

interface ItemProps {
  item: {
    srcWhite: string;
    srcRed: string;
    href: string;
    desc: string;
  };
}

const Item: FC<ItemProps> = ({ item }) => {
  const [hover, setHover] = useState(false);
  const toggleHover = () => setHover(!hover);

  return (
    <li key={item.desc} className={styles.listItem}>
      <a
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href={item.href}
        className={styles.listItemLink}
        target="_blank"
      >
        <img
          src={hover ? item.srcRed : item.srcWhite}
          alt={item.href}
          className={styles.listItemLinkImage}
        />
        <span className={styles.listItemDesc}>{item.desc}</span>
      </a>
    </li>
  );
};
