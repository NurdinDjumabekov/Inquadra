import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allClearAction, delOneArrAction, plusAction } from "../redux/actions";
import EveryNumber from "../components/EveryNumber/EveryNumber";

const FirstPage = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const { sum, num } = useSelector((state) => state.addFoldingReducer);

  const addNum = () => {
    dispatch(plusAction(input));
    setInput("");
  };
  ///////////////////////////////////

  const allClear = () => {
    dispatch(allClearAction());
    setInput("");
  };

  ///////////////////////////////////
  return (
    <div>
      <input
        className="main_input"
        placeholder="Введите текст"
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="parent_block_btns">
        <button onClick={addNum}>ADD</button>
        <button onClick={allClear}>CLEAR</button>
      </div>
      {/* {console.log(sum, "sum")}
      {console.log(num, "num")} */}
      <ul>
        {sum.map((item, index) => (
          <EveryNumber item={item} key={index} />
        ))}
        <li>{num}</li>
      </ul>
    </div>
  );
};

export default FirstPage;
