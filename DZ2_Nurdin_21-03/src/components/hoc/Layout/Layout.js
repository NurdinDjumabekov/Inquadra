import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { NavBar } from "../../NavBar/NavBar";
import styles from "./Layout.module.css";

export const Layout = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <>
      <NavBar />
      <Outlet />
      <button className={styles.btnBack} onClick={goToBack}>
        back
      </button>
    </>
  );
};
