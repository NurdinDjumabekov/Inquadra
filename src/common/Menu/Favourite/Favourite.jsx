//////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//////// imgs
import favorite from "../../../assets/icons/hart.svg";
import favoriteDisActive from "../../../assets/icons/heartGray.svg";
import heartBlack from "../../../assets/icons/heart.svg";

/////// fns
import { deleteFavourite } from "../../../store/reducers/requestSlice";
import { addFavourite } from "../../../store/reducers/requestSlice";

/////// helpers
import { checkFavourite } from "../../../helpers/checkFavourite";

/////// style
import "./style.scss";

const Favourite = ({ obj, black, disable }) => {
  ///if black = true то подставляю черную сердечку, else серую сердечку

  const dispatch = useDispatch();

  const { favouriteList } = useSelector((state) => state.serverSave);
  ///// добавление и удалени с избранных

  const { temporary } = useSelector((state) => state.stateSlice);

  const changeFavourite = () => {
    const data = { ...obj, ...temporary };

    const haveId = favouriteList?.some((item) => item?.id === obj?.id);

    if (haveId) {
      dispatch(deleteFavourite(data));
      ///// удаляю с избранных через запрос
    } else {
      if (temporary?.sizeId == 0) {
        alert("Выберите размер одежды");
      } else if (temporary?.colorId == 0) {
        alert("Выберите цвет одежды");
      } else {
        alert("Товар добавлен в корзину");
        dispatch(addFavourite(data));
        ///// добавляю в избранные через запрос
      }
    }
  };

  return (
    <button
      className="favoriteBtn"
      onClick={changeFavourite}
      disabled={disable}
    >
      {checkFavourite(obj, favouriteList) ? (
        <img src={favorite} alt="{}" />
      ) : (
        <img src={black ? heartBlack : favoriteDisActive} alt="{}" />
      )}
    </button>
  );
};

export default Favourite;
