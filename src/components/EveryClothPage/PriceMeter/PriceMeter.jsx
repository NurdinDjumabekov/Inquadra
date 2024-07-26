///////// hooks
import React from "react";

///////// style
import "./style.scss";

///////// imgs
import arrowCounter from "../../../assets/icons/arrowCounter.svg";
import { useDispatch, useSelector } from "react-redux";
import { changeTemporary } from "../../../store/reducers/stateSlice";

const PriceMeter = ({ count, everyCloth }) => {
  const dispatch = useDispatch();

  const { temporary } = useSelector((state) => state.stateSlice);

  const counterPlus = () => {
    dispatch(changeTemporary({ ...temporary, count: count + 1 }));
  };

  const counterMinus = () => {
    if (count > 1) {
      dispatch(changeTemporary({ ...temporary, count: count - 1 }));
    } else {
      dispatch(changeTemporary({ ...temporary, count: 1 }));
    }
  };

  return (
    <div className="priceMeter">
      <div className="price">
        <p>{count * everyCloth?.price}</p>
        <p>руб.</p>
      </div>
      <div className="meter">
        <p>{count * 1}</p>
        <p>{everyCloth?.saleType?.type}</p>
      </div>
      <div className="counter">
        <div className="counter__num">
          <p>{count}</p>
        </div>
        <div className="counter__btn">
          <button onClick={counterPlus}>
            <img src={arrowCounter} alt=">" />
          </button>
          <button onClick={counterMinus}>
            <img src={arrowCounter} alt="<" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default PriceMeter;
