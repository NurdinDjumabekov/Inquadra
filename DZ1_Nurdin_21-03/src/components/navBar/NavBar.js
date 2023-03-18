import React from "react";
import { Link, NavLink } from "react-router-dom";
import { AboutPage } from "../../pages/aboutPage/AboutPage";
import { MainPage } from "../../pages/mainPage/MainPage";
import styles from "./navBar.module.css";

export const NavBar = () => {
  return (
    <div className={styles.navBar_parentBlock}>
      <ul className={styles.ul_for_li}>
        <li>
          <NavLink to={"/"} className="link_block">
            MainPage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/about"} className="link_block">
            AboutPage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/block"} className="link_block">
            BlockPage
          </NavLink>
        </li>
        <li>
          <NavLink to={"/contact"} className="link_block">
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to={"/users"} className="link_block">
            Users
          </NavLink>
        </li>
      </ul>
    </div>
  );
};
