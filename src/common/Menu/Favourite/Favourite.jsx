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
import { addProdFavourite } from "../../../store/reducers/serverSaveSlice";

/////// helpers
import { checkFavourite } from "../../../helpers/checkFavourite";

/////// style
import "./style.scss";

const Favourite = ({ obj, black, disable }) => {
  ///if black = true то подставляю черную сердечку, else серую сердечку

  const dispatch = useDispatch();

  const { favouriteList } = useSelector((state) => state.serverSaveSlice);
  ///// добавление и удалени с избранных

  const { temporary } = useSelector((state) => state.stateSlice);

  const changeFavourite = () => {
    const data = { ...obj, ...temporary };

    if (checkFavourite(data, favouriteList)) {
      dispatch(deleteFavourite(data));
      ///// удаляю с избранных через запрос
    } else {
      if (temporary?.sizeId == 0) {
        alert("Выберите размер одежды");
      } else if (temporary?.colorId == 0) {
        alert("Выберите цвет одежды");
      } else {
        dispatch(addFavourite(data));
        dispatch(addProdFavourite(data)); //// time
        ///// добавляю в избранные через запрос
      }
    }
  };

  const active = checkFavourite(obj, favouriteList);

  return (
    <button
      className={`favoriteBtn ${active ? "activeFav" : ""}`}
      onClick={changeFavourite}
      disabled={disable}
    >
      {active ? (
        <img src={favorite} alt="{}" />
      ) : (
        <img src={black ? heartBlack : favoriteDisActive} alt="{}" />
      )}
    </button>
  );
};

export default Favourite;
