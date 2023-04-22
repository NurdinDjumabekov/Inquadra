import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavLinks.module.css";

const NavLinks = () => {
  return (
    <nav className="container">
      <ul className={styles.parent_nav}>
        <li>
          <NavLink to="/">MainPage</NavLink>
        </li>
        <li>
          <NavLink to="/about">AboutPage</NavLink>
        </li>
        <li>
          <NavLink to="/posts">PostsPage</NavLink>
        </li>
        <li>
          <NavLink to="/createPost">CreatePost</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
