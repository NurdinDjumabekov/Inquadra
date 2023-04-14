import React from "react";
import styles from "./User.module.css";

const User = ({ user }) => {
  return (
    <div className={styles.parent_userBlock}>
      <li>name : {user.name}</li>
      <li>username : {user.username}</li>
    </div>
  );
};

export default User;
