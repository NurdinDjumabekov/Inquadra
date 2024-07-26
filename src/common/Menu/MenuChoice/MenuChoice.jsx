/////// hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

///// imgs
import menu from "../../../assets/icons/menu.svg";
import filter from "../../../assets/icons/filter.svg";
import filterActiveImg from "../../../assets/icons/filterActive.svg";
import krest from "../../../assets/icons/krestGray.svg";
import call from "../../../assets/icons/call.svg";

/////// fns
import { changeMenuActive } from "../../../store/reducers/stateSlice";

/////// style
import "./style.scss";

///////// helpers
import { listMenu } from "../../../helpers/LodalData";

const MenuChoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menuActive } = useSelector((state) => state.stateSlice);

  const [closing, setClosing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [filterActive, setFilterActive] = useState(false);

  const openMenu = (bool) => {
    if (!bool) {
      setClosing(true);
      setTimeout(() => {
        dispatch(changeMenuActive(false));
        setClosing(false);
      }, 600); // Время должно совпадать с transition в CSS
    } else {
      dispatch(changeMenuActive(true));
    }
  };

  const navPage = (item) => {
    openMenu(false);
    navigate(item.route);
  };

  const changeFilter = (bool) => setFilterActive(bool);

  return (
    <div className={`menuChoice ${menuActive ? "menuChoiceActive" : ""}`}>
      <button
        className={`menuMain menuBurger ${menuActive ? "activeMenu" : ""} ${
          closing ? "closing" : ""
        } ${hovered ? "hovered" : ""}`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <p onClick={() => openMenu(true)}>меню</p>
        {!menuActive ? (
          <img src={menu} alt="menu" onClick={() => openMenu(true)} />
        ) : (
          <>
            <img src={krest} alt="x" onClick={() => openMenu(false)} />
            <div className="lineVertical"></div>
            <ul className={`activeMenuList ${closing ? "closing" : ""}`}>
              {listMenu?.map((i) => (
                <li key={i.id} onClick={() => navPage(i)}>
                  {i?.name}
                </li>
              ))}
            </ul>
          </>
        )}
      </button>
      <div className="filterShadow">
        <button
          className={`menuMain filterBlock ${
            filterActive ? "filterActive" : ""
          }`}
        >
          <p onClick={() => changeFilter(!filterActive)}>
            подобрать мне плитку
          </p>
          {filterActive ? (
            <img
              src={filterActiveImg}
              alt="filter"
              onClick={() => changeFilter(false)}
            />
          ) : (
            <img src={filter} alt="filter" onClick={() => changeFilter(true)} />
          )}
        </button>
        {filterActive && (
          <div className="filterActiveMore">
            <div className="call">
              <img src={call} alt="call" />
              <span>+7 999 999 99 99</span>
              <button>Консультация</button>
            </div>
            <div className="conditions">
              <b>нажимая по кнопке, вы соглашаетесь</b>
              <span> с условиями обработки персональных данных</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuChoice;
