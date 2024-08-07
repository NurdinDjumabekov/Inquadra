import React from 'react';
import './style.scss';

import copy from '../../../assets/icons/Copy.svg';
import { useSelector } from 'react-redux';

const GoodSendData = () => {
  const { inputsDecor } = useSelector((state) => state.stateSlice);

  return (
    <>
      <div className="congratularion">
        <p>{inputsDecor?.name?.text}, поздравляем:</p>
        <p>ваш заказ успешно сформирован</p>  
      </div>
      <div className="goodSendData">
        <div className="shadowSend">
          <div className="title">
            <div>
              <b>Номер вашего заказа </b>
              <span>24072024-1</span>
            </div>
            <h4>
              <p>Inquadra</p>
              <span>ceramic home</span>
            </h4>
          </div>
          <div className="title more">
            <div>
              <div>
                <b>Итоговая сумма вашего заказа</b>
                <span>20000 руб.</span>
              </div>
              <div className="secondParent">
                <div className="second">
                  <span>99</span>
                  <b>упаковок</b>
                </div>
                <div className="second">
                  <span>199</span>
                  <b>квадратных метров</b>
                </div>
              </div>
            </div>
            <div>
              <button>
                <p>Скопровать</p>
                <img src={copy} alt="#" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GoodSendData;
