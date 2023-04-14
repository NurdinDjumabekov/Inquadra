import React from "react";
import styles from "./User.module.css";

const User = ({ user }) => {
  return (
    <ul className={styles.parent_userBlock}>
      <li>name : {user.name}</li>
      <li>username : {user.username}</li>
      <li>email : {user.email}</li>
      <li>phone : {user.phone}</li>
    </ul>
  );
};

export default User;
