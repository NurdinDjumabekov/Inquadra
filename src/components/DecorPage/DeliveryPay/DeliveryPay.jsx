/////// hooks
import React, { useState } from "react";
import { useSelector } from "react-redux";

///// style
import "./style.scss";

///// imgs
import like from "../../../assets/images/likeBlack.png";

/////// helpers
import { confidation, link1, link2 } from "../../../helpers/LodalData";
import { sumTotalBasket } from "../../../helpers/SumTotalBasket";

const DeliveryPay = () => {
  const [state1, setState1] = useState(true);

  const { basketList } = useSelector((state) => state.serverSaveSlice);

  return (
    <div className="deliveryPay">
      <div className="userInputAddres deliveryPay__moreResult">
        <div className="agreementCofidantion">
          <div onClick={() => setState1(!state1)}>
            {state1 ? (
              <div className="roundBlock" />
            ) : (
              <img src={like} alt="like" className="roundImg" />
            )}
          </div>
          <div className="moreText">
            <p onClick={() => setState1(!state1)}>{confidation}</p>
            <span> {link1}</span>
            <p onClick={() => setState1(!state1)}> и </p>
            <span> {link2}</span>
          </div>
        </div>
      </div>

      <div className="userInputAddres deliveryPay__moreResult">
        <div className="resultAction">
          <p>Итоговая стоимость вашего заказа</p>
          <div className="action">
            <span>{sumTotalBasket(basketList)} руб.</span>
            <button type="submit" disabled={state1} className={"choiceCloth"}>
              Оформить
            </button>
          </div>
          <b>минимальная сумма заказа от 10000 руб.</b>
          <b>бесплатная доставка заказа от 20000 руб.</b>
          <b>доставка рассчитывается при оформлении заказа</b>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPay;
