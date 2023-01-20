import { FC, useState } from "react";
import { contacts } from "../../data/contacts";
import styles from "./styles.module.css";

export const ContactsListInFooter = () => {
  return (
    <div className={styles.contactsListWrapper}>
      <ul className={styles.contactsList}>
        {contacts.map((c) => (
          <Item item={c} />
        ))}
      </ul>
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
    <li className={styles.contactsListItem}>
      <a
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
        href={item.href}
        className={styles.contactsListItemLink}
        target="_blank"
      >
        <img
          src={hover ? item.srcRed : item.srcWhite}
          alt={item.href}
          className={styles.contactsListItemLinkImage}
        />
      </a>
    </li>
  );
};
