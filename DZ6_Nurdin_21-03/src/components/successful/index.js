import React from "react";
import styles from "./successful.module.css";
// import { useSelector } from "react-redux";

const Successful = ({ inputName }) => {
  //   const { userName } = useSelector((state) => state.stateRequestReducer);
  return (
    <div className={styles.successful_parent}>
      <p>Добро пожаловать, {inputName}</p>
      <p> Вы успешно зарегистрированы!!!</p>
    </div>
  );
};

export default Successful;
