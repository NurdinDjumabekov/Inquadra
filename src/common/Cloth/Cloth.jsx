/////// hooks
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

///// imgs
import deleteImg from "../../assets/icons/deleteGray.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import basket from "../../assets/icons/saleWhite.svg";

///// components
import DiscountPrice from "../DiscountPrice/DiscountPrice";
import Favourite from "../Menu/Favourite/Favourite";

////// helpers
import { sarchImg } from "../../helpers/sarchImg";

///// fns
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import { deleteBasket } from "../../store/reducers/requestSlice";
import { deleteFavourite } from "../../store/reducers/requestSlice";
import { counterFavourite } from "../../store/reducers/requestSlice";
import { everyClothFN } from "../../store/reducers/requestSlice";
import { delProdFavourite } from "../../store/reducers/serverSaveSlice";
import { deleteProdBasket } from "../../store/reducers/serverSaveSlice";

///// style
import "./style.scss";

const Cloth = ({ item, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { favouriteList } = useSelector((state) => state.serverSaveSlice);

  const nav = () => {
    ///// скрываю все тени
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("basket");
  };

  const color = item?.colors?.filter((i) => i?.id === item?.colorId); /// цвет
  const colorActive = color?.[0]?.color;

  const size = item?.sizes?.filter((i) => i?.id === item?.sizeId); /// размер
  const sizeActive = size?.[0]?.sizeName;

  const deleteFav = () => {
    dispatch(deleteFavourite(item));
    dispatch(delProdFavourite(item)); //// time
  }; /// удаляю через запрос

  const delBasket = () => {
    dispatch(deleteBasket(item));
    dispatch(deleteProdBasket(item)); //// time
  }; /// удаяю через запрос

  const navDetailed = () => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${item?.id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${item?.id}`);
      dispatch(everyClothFN(item));
    }
    ///// скрываю все тени
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
  };

  const counterFN = (typeCounter) => {
    ///// typeCounter 1 - добавляю, 2 - отнимаю
    if (typeCounter === 1) {
      // Добавляю
      dispatch(counterFavourite({ typeCounter, item, favouriteList }));
    } else if (typeCounter === 2) {
      // Минусую
      if (item?.count > 1) {
        dispatch(counterFavourite({ typeCounter, item, favouriteList }));
      } else {
        alert("Количество не может быть меньше 1го");
      }
    }
  };

  if (type == "favourite") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
          {/* <button onClick={navDetailed}>Посмотреть</button> */}
          <p className="kol">{item?.productDetails?.complect}</p>
          {item?.discountActive && (
            <p className="discount">-{item?.discount}%</p>
          )}
          <div className="favoriteIcon">
            <Favourite obj={item} />
          </div>
        </div>
        <div className="infoBlock">
          <div className="title">
            <div>
              <span>{item?.brand?.brandName}</span>
              <h6>{item.productName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <div className="typesProd">
            <div className="typesProd__inner">
              <div className="color">
                <p>{sizeActive}</p>
              </div>
              <div className="size">
                <p>{colorActive}</p>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="meter">
              <p>{item?.count * item?.price}</p>
              <span>руб. </span>
            </div>
            <div className="meter">
              <p>{item?.count * item?.price}</p>
              <span>{item?.saleType?.type}</span>
            </div>
          </div>
          <div className="actions">
            <div className="counter">
              <button onClick={() => counterFN(2)} className="increment">
                <img src={minus} alt=">" />
              </button>
              <div className="count">
                <p>{item?.count}</p>
              </div>
              <button onClick={() => counterFN(1)} className="decrement">
                <img src={plus} alt="<" />
              </button>
            </div>
            <button onClick={() => {}}>в корзину</button>
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
          {/* <button onClick={navDetailed}>Посмотреть</button> */}
          <p className="kol">{item?.productDetails?.complect}</p>
          {item?.discountActive && (
            <p className="discount">-{item?.discount}%</p>
          )}
          <div className="favoriteIcon">
            <Favourite obj={item} />
          </div>
        </div>
        <div className="infoBlock">
          <div className="title">
            <div>
              <span>{item?.brand?.brandName}</span>
              <h6>{item.productName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <div className="typesProd">
            <div className="typesProd__inner">
              <div className="color">
                <p>{sizeActive}</p>
              </div>
              <div className="size">
                <p>{colorActive}</p>
              </div>
            </div>
          </div>
          <div className="price">
            <div className="meter">
              <p>{item?.count * item?.price}</p>
              <span>руб. </span>
            </div>
            <div className="meter">
              <p>{item?.count * item?.price}</p>
              <span>{item?.saleType?.type}</span>
            </div>
          </div>
          <div className="actions">
            <div className="counter">
              <button onClick={() => counterFN(2)} className="increment">
                <img src={minus} alt=">" />
              </button>
              <div className="count">
                <p>{item?.count}</p>
              </div>
              <button onClick={() => counterFN(1)} className="decrement">
                <img src={plus} alt="<" />
              </button>
            </div>
            <button onClick={nav}>В корзину</button>
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
          <div className="actions search">
            <button onClick={nav}>Посмотреть</button>
            <Favourite obj={item} />
          </div>
        </div>
      </li>
    );
  }
};

export default Cloth;
