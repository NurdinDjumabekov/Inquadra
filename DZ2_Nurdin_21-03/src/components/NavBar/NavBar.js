import React from "react";
import { Link } from "react-router-dom";
import classes from "./NavBar.module.css";

export const NavBar = () => {
  return (
    <div className={classes.parent_navBar}>
      <div className="container">
        <ul>
          <li>
            <Link to="/">MainPage</Link>
          </li>
          <li>
            <Link to="/posts">PostsPage</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
