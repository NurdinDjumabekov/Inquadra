/////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

///// imgs
import menu from "../../../assets/icons/adaptive/menuAdaptive.svg";
import filterActiveImg from "../../../assets/icons/filter.svg";
import closeLeft from "../../../assets/icons/adaptive/closeMenu.svg";

/////// fns
import { changeMenuAdaptive } from "../../../store/reducers/stateSlice";

/////// style
import "./style.scss";

/////// components

/////// helpers

const MenuChoiceAdaptive = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { menuAdaptive } = useSelector((state) => state.stateSlice);

  const firstMenu = (bool) => {
    dispatch(changeMenuAdaptive({ ...menuAdaptive, left: bool }));
    ///// для тзменения состояния отображения меню
  };

  const secondMenu = (bool) => {
    dispatch(changeMenuAdaptive({ ...menuAdaptive, right: bool }));
    ///// для тзменения состояния отображения меню
  };

  return (
    <div className="menuChoiceApadtive">
      <button
        className={menuAdaptive?.left ? "active" : ""}
        onClick={() => firstMenu(!menuAdaptive?.left)}
      >
        <img src={menu} alt="menu" />
      </button>
      <div className="types">
        <button
          className={menuAdaptive.right ? "active" : ""}
          onClick={() => secondMenu(!menuAdaptive.right)}
        >
          <img src={filterActiveImg} alt="" />
        </button>
        {menuAdaptive.right && (
          <button onClick={() => secondMenu(!menuAdaptive.right)}>
            <img src={closeLeft} alt="" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MenuChoiceAdaptive;
