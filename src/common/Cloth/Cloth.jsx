/////// hooks
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

///// imgs
import deleteImg from "../../assets/icons/deleteGray.svg";
import minus from "../../assets/icons/minus.svg";
import plus from "../../assets/icons/plus.svg";
import basket from "../../assets/icons/saleWhite.svg";
import basketGray from "../../assets/icons/saleWhiteGray.svg";

///// components
import DiscountPrice from "../DiscountPrice/DiscountPrice";
import Favourite from "../Menu/Favourite/Favourite";

////// helpers
import { sarchImg } from "../../helpers/sarchImg";

///// fns
import { lookBasketFN, lookFavoriteFN } from "../../store/reducers/stateSlice";
import {
  addBasket,
  counterBasket,
  deleteBasket,
  searchFN,
} from "../../store/reducers/requestSlice";
import { deleteFavourite } from "../../store/reducers/requestSlice";
import { counterFavourite } from "../../store/reducers/requestSlice";
import { delProdFavourite } from "../../store/reducers/serverSaveSlice";
import { deleteProdBasket } from "../../store/reducers/serverSaveSlice";

///// style
import "./style.scss";
import { listWords } from "../../helpers/LodalData";

const Cloth = ({ item, type }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const { favouriteList } = useSelector((state) => state.serverSaveSlice);
  const { basketList } = useSelector((state) => state.serverSaveSlice);

  const nav = () => {
    ///// скрываю все тени
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    navigate("/basket");
  };

  const deleteFav = () => {
    dispatch(deleteFavourite(item));
    dispatch(delProdFavourite(item)); //// time
  }; /// удаляю через запрос

  const delBasket = () => {
    dispatch(deleteBasket(item));
    dispatch(deleteProdBasket(item)); //// time
  }; /// удаяю через запрос

  const navDetailed = (id) => {
    if (location?.pathname?.includes("every")) {
      navigate(`/every/${id}`);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate(`/every/${id}`);
    }
    ///// скрываю все тени
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    dispatch(searchFN(""));
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

  const counterBasketFN = (typeCounter) => {
    ///// typeCounter 1 - добавляю, 2 - отнимаю
    if (typeCounter === 1) {
      // Добавляю
      dispatch(counterBasket({ typeCounter, item, basketList }));
    } else if (typeCounter === 2) {
      // Минусую
      if (item?.count > 1) {
        dispatch(counterBasket({ typeCounter, item, basketList }));
      } else {
        alert("Количество не может быть меньше 1го");
      }
    }
  };

  const addProdInBasket = () => {
    dispatch(addBasket(item));
    ///// добавляю в корзину через запрос
  };

  if (type == "favourite") {
    return (
      <li className="everyBasket">
        <div className="imgMain">
          <img src={sarchImg(item?.photos)?.url} alt="" />
          {/* <button onClick={navDetailed}>Посмотреть</button> */}
          <p className="kol">{item?.complect}</p>
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
              <span>{item?.collection?.brand?.productName}</span>
              <h6>{item?.collection?.collectionName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <div className="typesProd">
            <div className="typesProd__inner">
              <div className="color">
                <p>{item?.colors?.[0]?.color}</p>
              </div>
              <div className="size">
                <p>{item?.sizes?.[0]?.sizeName}</p>
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
            <button onClick={addProdInBasket}>
              в корзину
              <img src={basketGray} alt="" />
            </button>
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
          <p className="kol">{item?.complect}</p>
          {item?.discountActive && (
            <p className="discount">-{item?.discount}%</p>
          )}
          <div className="favoriteIcon">
            <Favourite obj={item} positionBasket={true} />
          </div>
        </div>
        <div className="infoBlock">
          <div className="title">
            <div>
              <span>{item?.collection?.brand?.productName}</span>
              <h6>{item?.collection?.collectionName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <div className="typesProd">
            <div className="typesProd__inner">
              <div className="color">
                <p>{item?.sizes?.[0]?.sizeName}</p>
              </div>
              <div className="size">
                <p>{item?.colors?.[0]?.color}</p>
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
              <button onClick={() => counterBasketFN(2)} className="increment">
                <img src={minus} alt=">" />
              </button>
              <div className="count">
                <p>{item?.count}</p>
              </div>
              <button onClick={() => counterBasketFN(1)} className="decrement">
                <img src={plus} alt="<" />
              </button>
            </div>
            <button onClick={nav}>Оформить</button>
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
              <span>{item?.collection?.brand?.productName}</span>
              <h6>{item?.collection?.collectionName}</h6>
            </div>
            <b>{item?.productStatus?.status}</b>
          </div>
          <DiscountPrice item={item} />
          <div className="words">
            {listWords?.map((word) => (
              <li>{word}</li>
            ))}
          </div>
          <div className="actions search" onClick={() => navDetailed(item?.id)}>
            <button onClick={() => navDetailed(item?.id)}>Посмотреть</button>
            <Favourite obj={item} search={true} />
          </div>
        </div>
      </li>
    );
  }
};

export default Cloth;
