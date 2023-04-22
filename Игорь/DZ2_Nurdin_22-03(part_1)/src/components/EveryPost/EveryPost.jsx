import React from "react";
import styles from "./EveryPost.module.css";
import { NavLink } from "react-router-dom";

const EveryPost = ({ post }) => {
  return (
    <NavLink to={`${post.id}`}>
      <ul className={styles.block_for_posts}>
        <li>
          <h2>Title</h2>
          <p> {post.title}</p>
        </li>
        <li>
          <h3>Body</h3>
          <p> {post.body}</p>
        </li>
      </ul>
    </NavLink>
  );
};

export default EveryPost;
