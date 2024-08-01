/////// hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

///// style
import "./style.scss";

///// imgs
import like from "../../../assets/images/likeBlack.png";
import money from "../../../assets/icons/money.svg";
import truck from "../../../assets/icons/truck.svg";

/////// helpers
import {
  confidation,
  link1,
  link2,
  listDelivery,
  listTypePays,
} from "../../../helpers/LodalData";
import { sumTotalBasket } from "../../../helpers/SumTotalBasket";
import { changeInputsDecor } from "../../../store/reducers/stateSlice";

const DeliveryPay = () => {
  const dispatch = useDispatch();

  const { basketList } = useSelector((state) => state.serverSaveSlice);
  const { inputsDecor } = useSelector((state) => state.stateSlice);

  const checkActive = () => {
    dispatch(changeInputsDecor({ checkIfDeliv: !inputsDecor?.checkIfDeliv }));
  };

  const onChnageDeliv = (id) => {
    dispatch(changeInputsDecor({ typeDelivery: id }));
    ///// меняю способ доставки для заказа
  };

  const onChnagePay = (id) => {
    dispatch(changeInputsDecor({ typePay: id }));
    ///// меняю способ оплаты для заказа
  };

  return (
    <div className="deliveryPay">
      <div className="userInputAddres">
        <h6>Выбрать способ доставки</h6>
        <div>
          {listDelivery?.map((item) => (
            <div
              className="everyChoiceDecor"
              onClick={() => onChnageDeliv(item?.id)}
              key={item?.id}
            >
              <div>
                {item?.id == inputsDecor?.typeDelivery ? (
                  <img src={like} alt="like" className="roundImg" />
                ) : (
                  <div className="roundBlock" />
                )}
                <p>{item?.title}</p>
              </div>
              {item?.moreInfo && item?.id == inputsDecor?.typeDelivery && (
                <div className="moreInfo">
                  <p>{item?.moreInfo}</p>
                  <span>необходимо предоставить номер заказа</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="userInputAddres">
        <h6>Выбрать способ оплаты</h6>
        <div>
          {listTypePays?.map((item) => (
            <div
              className="everyChoiceDecor"
              onClick={() => onChnagePay(item?.id)}
              key={item?.id}
            >
              <div>
                {item?.id == inputsDecor?.typePay ? (
                  <img src={like} alt="like" className="roundImg" />
                ) : (
                  <div className="roundBlock" />
                )}
                <p>{item?.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="userInputAddres deliveryPay__moreResult">
        <div className="agreementCofidantion">
          <div onClick={checkActive}>
            {inputsDecor?.checkIfDeliv ? (
              <img src={like} alt="like" className="roundImg" />
            ) : (
              <div className="roundBlock" />
            )}
          </div>
          <div className="moreText">
            <p onClick={checkActive}>{confidation}</p>
            <span> {link1}</span>
            <p onClick={checkActive}> и </p>
            <span> {link2}</span>
          </div>
        </div>
      </div>

      <div className="userInputAddres deliveryPay__moreResult">
        <div className="resultAction">
          <p>Итоговая стоимость вашего заказа</p>
          <div className="action">
            <span>{sumTotalBasket(basketList)} руб.</span>
            <button type="submit" className={"choiceCloth"}>
              Оформить
            </button>
          </div>
          <div className="moreInfo">
            <img src={money} alt="money" />
            <b>минимальная сумма заказа от 10000 руб.</b>
          </div>
          <div className="moreInfo">
            <img src={truck} alt="truck" />
            <b>бесплатная доставка заказа от 20000 руб.</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryPay;
