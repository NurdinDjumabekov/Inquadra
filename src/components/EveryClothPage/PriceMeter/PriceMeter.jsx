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
import Favourite from "../../../common/Menu/Favourite/Favourite";

///////// fns
import { addBasket } from "../../../store/reducers/requestSlice";

///////// helpers
import { meterFN, returnBasket } from "../../../helpers/meterFN";
import { roundNum } from "../../../helpers/roundNum";

const PriceMeter = ({ count, everyCloth, exists }) => {
  const dispatch = useDispatch();

  const { temporary } = useSelector((state) => state.stateSlice);

  // const { basketList } = useSelector((state) => state.serverSaveSlice);

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
      const data = { ...everyCloth, ...temporary, productId: 1 };
      dispatch(addBasket(data));
      ///// добавляю в корзину через запрос
    }
  };

  const checkWidth = everyCloth?.sizes?.find((i) => i?.id == temporary?.sizeId);
  // const checkWidtsh = everyCloth?.sizes?.find(
  //   (i) => i?.id == temporary?.sizeId
  // );

  // const objBasket = returnBasket(basketList, everyCloth);

  // console.log(objBasket, "objBasket");

  const secondMeter = meterFN(checkWidth?.sizeName || "1х1", everyCloth);

  console.log(checkWidth?.sizeName || "1х1", everyCloth);

  console.log(everyCloth, "everyCloth");

  return (
    <div className="priceMeter">
      <div className="price">
        <div className="meter">
          {exists ? (
            <p>{roundNum(+count * +everyCloth?.price * +secondMeter)}</p>
          ) : (
            <p>{roundNum(+count * +everyCloth?.price * +secondMeter)}</p>
          )}
          <span>руб. </span>
        </div>
        <div className="meter">
          <p className="second">{secondMeter}</p>
          <span> м²</span>
          {/* {everyCloth?.saleType?.type} */}
        </div>
      </div>
      <div className="actions">
        {exists && (
          <div className="counter">
            <button onClick={counterMinus} className="increment">
              <img src={minus} alt=">" />
            </button>
            <div className="count">
              <p>{count}</p>
            </div>
            <button onClick={counterPlus} className={`decrement `}>
              <img src={plus} alt="<" />
            </button>
          </div>
        )}
        {exists ? (
          <button className="actionInBasket">В корзине</button>
        ) : (
          <button
            className="actionInBasket haveBasket"
            onClick={addProdInBasket}
          >
            Добавить в корзину
          </button>
        )}
        <div className={`favouriteAction`}>
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
