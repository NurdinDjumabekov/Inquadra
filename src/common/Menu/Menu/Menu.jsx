////components
import MenuSave from "../MenuSave/MenuSave";

////hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";

///fns
import { lookBasketFN, lookMenuFN } from "../../../store/reducers/stateSlice";
import { lookFavoriteFN } from "../../../store/reducers/stateSlice";

////style
import "./style.scss";

////imgs
import MenuSearch from "../MenuSearch/MenuSearch";

const Menu = () => {
  const dispatch = useDispatch();

  const { lookFavorite, lookBasket, lookMenu } = useSelector(
    (state) => state.stateSlice
  );

  const { lookSize } = useSelector((state) => state.stateSlice);

  const noneShadow = () => {
    dispatch(lookFavoriteFN(false));
    dispatch(lookBasketFN(false));
    dispatch(lookMenuFN(false));
  };

  const check = lookFavorite || lookBasket || lookMenu;

  return (
    <div className={`menu ${lookSize && "epsIndex"}`}>
      <div className="shadowMenu"></div>
      <div className="container">
        <div className="menu__inner">
          <div className="menu__inner__logo">
            <NavLink to={"/"} className="logo">
              Inquadra
            </NavLink>
            <NavLink to={"/"} className="logoHome">
              ceramic home
            </NavLink>
          </div>
          <MenuSearch />
          <div className="menu__favorite">
            <MenuSave />
          </div>
        </div>
      </div>
      {check && <div className="shadow" onClick={noneShadow}></div>}
    </div>
  );
};

export default Menu;
