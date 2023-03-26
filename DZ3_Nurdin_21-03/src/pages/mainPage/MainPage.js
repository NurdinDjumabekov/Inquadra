import React from "react";
import styles from "./MainPage.module.css";
import { useSelector, useDispatch } from "react-redux";

const MainPage = () => {
  const { number } = useSelector((state) => state);
  const dispatch = useDispatch();
  const counrPlus = () => {
    dispatch({
      type: "COUNT_PLUS",
    });
  };
  const counrMinus = () => {
    dispatch({
      type: "COUNT_MINUS",
    });
  };
  const restart = () => {
    dispatch({
      type: "RESTART",
    });
  };
  return (
    <>
      <h1>MainPage</h1>
      <div className={styles.parent_block}>
        <h2>{number}</h2>
        <div className={styles.btns_block}>
          <button onClick={counrMinus}>-</button>
          <button onClick={restart}>RESTART</button>
          <button onClick={counrPlus}>+</button>
        </div>
      </div>
    </>
  );
};

export default MainPage;
