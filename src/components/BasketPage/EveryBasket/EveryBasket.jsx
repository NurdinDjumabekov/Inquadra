///hooks
import React from "react";

/////style
import "./style.scss";

////imgs
import pay1 from "../../../assets/images/pay1.png";
import pay2 from "../../../assets/images/pay2.png";
import minus from "../../../assets/images/minus.png";
import plus from "../../../assets/images/plus.png";
import deleteImg from "../../../assets/icons/delete.svg";
import info from "../../../assets/icons/Info.svg";

//////components
import { deleteProdBasket } from "../../../store/reducers/serverSaveSlice";
import { addProdBasket } from "../../../store/reducers/serverSaveSlice";
import { removeProdBasket } from "../../../store/reducers/serverSaveSlice";

////helpers
import { sarchImg } from "../../../helpers/sarchImg";
import { useDispatch } from "react-redux";

const EveryBasket = ({ item }) => {
  const dispatch = useDispatch();

  const color = item?.colors?.filter((i) => i?.id === item?.colorId); /// цвет
  const colorActive = color?.[0]?.color;

  const size = item?.sizes?.filter((i) => i?.id === item?.sizeId); /// размер
  const sizeActive = size?.[0]?.sizeName;

  console.log(item);

  return (
    <>
      <div className="basket__every">
        <div className="basket__child">
          <div className="mainImg">
            <img src={sarchImg(item?.photos)?.url} alt="" />
          </div>
          <div className="dopContant">
            <div className="title">
              <div>
                <span>{item?.brand?.brandName}</span>
                <h6>{item.productName}</h6>
              </div>
              <b>{item?.productStatus?.status}</b>
            </div>

            <div className="sizes">
              <div className="color">
                <p>{sizeActive}</p>
              </div>
              <div className="size">
                <p>{colorActive}</p>
              </div>
            </div>

            <div className="price">
              <div className="color">
                <p>{item?.price * item?.count}</p>
                <span>руб.</span>
              </div>
              <div className="size">
                <p>{item?.price}</p>
                <span>{item?.saleType?.type}</span>
              </div>
            </div>

            <div className="actionsBasket">
              <div className="actionsBasket__counter">
                <button onClick={() => {}}>-</button>
                <button>{item?.count}</button>
                <button onClick={() => {}}>+</button>
              </div>
              <button onClick={() => {}}>В корзину</button>
            </div>
          </div>
        </div>

        <div className="deleteAction">
          <button onClick={() => dispatch(deleteProdBasket(item))}>
            <img src={deleteImg} alt="delete" />
          </button>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default EveryBasket;
