import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const MainPage = () => {
  const { answer } = useSelector((state) => state);
  const dispatch = useDispatch(0);
  const [num_1, setNum_1] = useState();
  const [num_2, setNum_2] = useState();

  /////////////////////////////////////////
  // const allFunc = (typeFunc, typeIF) => {
  //   const typeFunc = () => {
  //     dispatch({
  //       type: typeIF,
  //       payload: {
  //         numOne: num_1,
  //         numTwo: num_2,
  //       },
  //     });
  //   };
  // };
  // allFunc(increment, "PLUS");

  const increment = () => {
    dispatch({
      type: "PLUS",
      payload: {
        numOne: num_1,
        numTwo: num_2,
      },
    });
  };

  //////////////////////////////

  const decrement = () => {
    dispatch({
      type: "MINUS",
      payload: {
        numOne: num_1,
        numTwo: num_2,
      },
    });
  };

  //////////////////////////////

  const multiplied = () => {
    dispatch({
      type: "MULTIPLIED",
      payload: {
        numOne: num_1,
        numTwo: num_2,
      },
    });
  };

  //////////////////////////////
  const divided = () => {
    dispatch({
      type: "DIVIDED",
      payload: {
        numOne: num_1,
        numTwo: num_2,
      },
    });
  };

  return (
    <div className="child">
      <p>{answer}</p>
      <input
        placeholder="Введите первое число"
        type="number"
        onChange={(e) => setNum_1(e.target.value)}
      />
      <input
        placeholder="Введите второе число"
        type="number"
        onChange={(e) => setNum_2(e.target.value)}
      />
      <div className="bnts_block">
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={multiplied}>*</button>
        <button onClick={divided}>:</button>
      </div>
    </div>
  );
};

export default MainPage;
