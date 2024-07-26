/////// hooks
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

///// imgs
import deleteImg from "../../assets/icons/deleteGray.svg";

///// components
import DiscountPrice from "../DiscountPrice/DiscountPrice";
import Favourite from "../Menu/Favourite/Favourite";

////// helpers
import { sarchImg } from "../../helpers/sarchImg";

///// fns
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import { addProdFavourite } from "../../store/reducers/serverSave";
import { everyClothFN } from "../../store/reducers/requestSlice";

///// style
import "./style.scss";

const Cloth = ({ item, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const nav = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("basket");
  };

  const color = item?.colors?.filter((i) => i.id == item?.activeColorEvery);

  const size = item?.sizes?.filter((i) => i.id == item?.activeSizeEvery);

  const changeFavourite = (obj) => dispatch(addProdFavourite(obj));

  const navDetailed = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.location.reload();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${item?.id}`);
      dispatch(everyClothFN(item));
    }
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
  };

  if (type == "favourite") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
          <button onClick={navDetailed}>Посмотреть</button>
        </div>
        <div className="infoBlock">
          <div className="title">
            <div>
              <span>{item?.brand?.brandName}</span>
              <h6>{item.productName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <DiscountPrice item={item} />
          <div className="sizes">
            <div className="sizes__inner">
              <Favourite obj={item} />
              <button
                className="actionDelete"
                onClick={() => changeFavourite(item)}
              >
                <img src={deleteImg} alt="x" />
              </button>
            </div>
          </div>
          <div className="actions">
            <button className="choiceCloth favouriteBtnNone" onClick={nav}>
              Выбрать характеристики
            </button>
            {/* <Favourite obj={item} /> */}
          </div>
        </div>
      </li>
    );
  }

  if (type == "basket") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
          <button onClick={navDetailed}>Посмотреть</button>
        </div>
        <div className="infoBlock">
          <div className="title">
            <div>
              <span>{item?.brand?.brandName}</span>
              <h6>{item.productName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <DiscountPrice item={item} />
          <div className="sizes">
            <div className="sizes__inner">
              <Favourite obj={item} />
              <button
                className="actionDelete"
                onClick={() => changeFavourite(item)}
              >
                <img src={deleteImg} alt="x" />
              </button>
            </div>
          </div>
          <div className="actions">
            <button className="choiceCloth favouriteBtnNone" onClick={nav}>
              Выбрать характеристики
            </button>
            {/* <Favourite obj={item} /> */}
          </div>
        </div>
      </li>
    );
  }

  if (type == "search") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
        </div>
        <div className="infoBlock forSearch">
          <div className="title">
            <div>
              <span>{item?.typeProd}</span>
              <h6>{item.productName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <DiscountPrice item={item} />
          <div className="words">
            {item?.listWords?.map((word) => (
              <li>{word}</li>
            ))}
          </div>
          <div className="actions">
            <button className="choiceCloth favouriteBtnNone" onClick={nav}>
              Посмотреть
            </button>
            <Favourite obj={item} />
          </div>
        </div>
      </li>
    );
  }
};

export default Cloth;
