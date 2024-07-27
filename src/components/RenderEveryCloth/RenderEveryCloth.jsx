/////// hooks
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

////// style
import "./style.scss";

////// img
import { sarchImg } from "../../helpers/sarchImg";

////// components
import Favourite from "../../common/Menu/Favourite/Favourite";

const RenderEveryCloth = ({ item }) => {
  ///true - можно добавить в корзину, false - переход на детальный просмотр
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const clickBtn = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${item?.id}`);
    }
  };

  return (
    <li className="every">
      <Favourite obj={item} disable={true} />
      <div onClick={clickBtn} className="favourite"></div>
      <div className="mainCard">
        <div className="mainImg">
          <img src={sarchImg(item?.photos)?.url} alt="img" />
          <h5>{item?.productStatus?.status}</h5>
          <button className="lookDetailed" onClick={clickBtn}>
            Посмотреть
          </button>
        </div>
        <div className="mainCard__content">
          <div className="mainCard__content__title">
            <h6>{item?.price} рублей за м²</h6>
            <b>{item?.discountActive && <p>{item?.discount}</p>}</b>
          </div>
          <span>{item?.brand?.brandName}</span>
          <div className="mainCard__content__decription">
            <p>{item?.productName}</p>
            <b>{item?.kol || 0} шт.</b>
          </div>
        </div>
      </div>
    </li>
  );
};

export default RenderEveryCloth;
