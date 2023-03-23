import React from "react";
import { Link } from "react-router-dom";
import styles from "./PostInfo.module.css";
export const PostInfo = ({ post }) => {
  return (
    <ul className={styles.parent_post}>
      <li>
        <h3>{post.title}</h3>
      </li>
      <li>
        <Link to={`/posts/${post.id}/url`}>{post.url}</Link>
      </li>
    </ul>
  );
};
