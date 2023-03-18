import React from "react";
import styles from "./usersBlock.module.css";

export const UsersBlock = ({ item }) => {
  return (
    <div>
      <ul className={styles.parent_for_li}>
        <li>
          <p>{item.name}</p>
        </li>
        <li>
          <p>{item.email}</p>
        </li>
      </ul>
    </div>
  );
};
