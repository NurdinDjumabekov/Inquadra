///////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///////// style
import "./style.scss";

///////// imgs
import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import money from "../../../assets/icons/money.svg";
import truck from "../../../assets/icons/truck.svg";

///////// fns
import { changeTemporary } from "../../../store/reducers/stateSlice";
import { addProdBasket } from "../../../store/reducers/serverSaveSlice";
import Favourite from "../../../common/Menu/Favourite/Favourite";

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

  const addProdInBasket = () => {
    ///// добавляю в корзину
    if (temporary?.sizeId == 0) {
      alert("Выберите размер одежды");
    } else if (temporary?.colorId == 0) {
      alert("Выберите цвет одежды");
    } else {
      alert("Товар добавлен в корзину");
      const data = { ...everyCloth, ...temporary, productId: 1 };
      // dispatch(addBasket(data));
      dispatch(addProdBasket(data));
      ///// добавляю в корзину через запрос
    }
  };

  return (
    <div className="priceMeter">
      <div className="price">
        <div className="meter">
          <p>{count * everyCloth?.price}</p>
          <span>руб. </span>
        </div>
        <div className="meter">
          <p>{count * everyCloth?.price}</p>
          <span>{everyCloth?.saleType?.type}</span>
        </div>
      </div>
      <div className="actions">
        <div className="counter">
          <button onClick={counterMinus} className="increment">
            <img src={minus} alt=">" />
          </button>
          <div className="count">
            <p>{count}</p>
          </div>
          <button onClick={counterPlus} className="decrement">
            <img src={plus} alt="<" />
          </button>
        </div>
        <button onClick={addProdInBasket}>В корзину</button>
        <div className="favouriteAction">
          <Favourite obj={everyCloth} black={true} />
        </div>
      </div>

      <div className="resultAction">
        <div>
          <img src={money} alt="money" />
          <b>минимальная сумма заказа от 10000 руб.</b>
        </div>
        <div>
          <img src={truck} alt="truck" />
          <b>бесплатная доставка заказа от 20000 руб.</b>
        </div>
      </div>
    </div>
  );
};

export default PriceMeter;
