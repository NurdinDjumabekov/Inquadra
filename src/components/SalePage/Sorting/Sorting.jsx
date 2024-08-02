import React from "react";
import { useDispatch, useSelector } from "react-redux";

///// style
import "./style.scss";

///// imgs
import krestWhite from "../../../assets/icons/krestWhite.svg";

///// fns

////// components
import Selects from "../../../common/Selects/Selects";

///// helpers
import { listSorting } from "../../../helpers/LodalData";

const Sorting = () => {
  const dispatch = useDispatch();

  const reset = () => {};

  const onChnage = (key, name, id) => {
    // console.log(key, name, id);
  };

  return (
    <div className="sorting">
      {/* {true ? (
        <div />
      ) : (
        <div className="filter" onClick={reset}>
          <p>сбросить фильтр</p>
          <button>
            <img src={krestWhite} alt="x" />
          </button>
        </div>
      )} */}
      <div className="selectFilter"></div>
    </div>
  );
};

export default Sorting;
