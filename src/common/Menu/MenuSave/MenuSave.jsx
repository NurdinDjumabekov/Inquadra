////// hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// imgs
import favorite from "../../../assets/icons/heart.svg";
import favoriteWhite from "../../../assets/icons/heartWhite.svg";
import sale from "../../../assets/icons/sale.svg";
import saleWhite from "../../../assets/icons/saleWhite.svg";

////// style
import "./style.scss";

////// fns
import { lookBasketFN } from "../../../store/reducers/stateSlice";
import { lookFavoriteFN } from "../../../store/reducers/stateSlice";
import { getListBasket } from "../../../store/reducers/requestSlice";
import { getListFavourite } from "../../../store/reducers/requestSlice";

////// components
import Cloth from "../../Cloth/Cloth";

const MenuSave = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket } = useSelector((state) => state.stateSlice);

  const { basketList } = useSelector((state) => state.serverSaveSlice);
  const { favouriteList } = useSelector((state) => state.serverSaveSlice);

  const lookMyFavorite = () => {
    dispatch(lookFavoriteFN(!lookFavorite));

    if (!lookFavorite) {
      // dispatch(getListFavourite());  /// time
      ///// get список избранных
    }
  };

  useEffect(() => {
    dispatch(getListFavourite());
    dispatch(getListBasket());
  }, []);

  const lookMyBasket = () => {
    dispatch(lookBasketFN(!lookBasket));

    if (!lookBasket) {
      // dispatch(getListBasket());  /// time
      ///// get список корзины
    }
  };

  return (
    <>
      <div className="blockFavorite">
        <button
          className={`btnAction ${lookFavorite && "activeFavorite"}`}
          onClick={lookMyFavorite}
        >
          <p>{favouriteList?.length}</p>
          <img src={lookFavorite ? favoriteWhite : favorite} alt="favorite" />
        </button>
        {lookFavorite && (
          <ul className="favorite__modal">
            {favouriteList?.length == 0 ? (
              <p className="emptyFavourite">Список избранных пустой</p>
            ) : (
              <>
                {favouriteList?.map((item, index) => (
                  <Cloth item={item} key={index} type={"favourite"} />
                ))}
              </>
            )}
          </ul>
        )}
      </div>

      <div className="blockFavorite">
        <button
          className={`btnAction ${lookBasket && "activeFavorite"}`}
          onClick={lookMyBasket}
        >
          <p>{basketList?.length}</p>
          <img src={lookBasket ? saleWhite : sale} alt="sale" />
        </button>
        {lookBasket && (
          <ul className="favorite__modal">
            {basketList?.length == 0 ? (
              <p className="emptyFavourite">Корзина пустая</p>
            ) : (
              <>
                {basketList?.map((item, index) => (
                  <Cloth item={item} key={index} type={"basket"} />
                ))}
              </>
            )}
          </ul>
        )}
      </div>
    </>
  );
};

export default MenuSave;
