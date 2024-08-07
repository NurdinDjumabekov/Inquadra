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

//////// components
import InputMask from "react-input-mask";

/////// style
import "./style.scss";

///////// helpers
import { listMenu } from "../../../helpers/LodalData";
import Sorting from "../../../components/SalePage/Sorting/Sorting";

///// helpers
import { listSorting } from "../../../helpers/LodalData";
import Selects from "../../Selects/Selects";
import { getListProds } from "../../../store/reducers/requestSlice";

const MenuChoice = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { menuActive, active } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);

  const [closing, setClosing] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [inputNum, setInputNum] = useState("");
  const [filterActive, setFilterActive] = useState(false);

  const openMenu = (bool) => {
    if (!bool) {
      setClosing(true);
      setTimeout(() => {
        dispatch(changeMenuActive(false));
        setClosing(false);
      }, 1); // Время должно совпадать с transition в CSS
    } else {
      dispatch(changeMenuActive(true));
    }
  };

  const navPage = (item) => {
    openMenu(false);
    navigate(item.route);
  };

  const changeFilter = (bool) => setFilterActive(bool);

  const onChnage = (key, name, id) => {
    // console.log(key, name, id);
    dispatch(getListProds({ ...active, sorting: id, brandId: activeBrands }));
  };

  const onChangeInput = (e) => {
    const newValue = e.target.value.replace(/\D/g, "");
    setInputNum(newValue);
  };

  console.log(inputNum);
  const consultation = () => {
    if (inputNum?.length != 11) {
      alert("Введите полный номер");
    } else {
      alert("С вами скоро свяжется консультат");
    }
  };

  return (
    <div className={`menuChoice ${menuActive ? "menuChoiceActive" : ""}`}>
      <button
        className={`menuMain menuBurger ${menuActive ? "activeMenu" : ""} `}
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
              {/* <span>+7 999 999 99 99</span> */}
              <InputMask
                mask="+9 999 999-99-99"
                placeholder="+7 999 999 99 99"
                name="number"
                onChange={onChangeInput}
                maskChar={null}
                value={inputNum}
              />
              <button onClick={consultation}>Консультация</button>
            </div>
            <div className="conditions">
              <b>нажимая по кнопке, вы соглашаетесь</b>
              <span onClick={() => navigate("/about")}>
                с условиями обработки персональных данных
              </span>
            </div>
          </div>
        )}
      </div>

      {!menuActive && (
        <div className="select">
          <Selects
            list={listSorting}
            title={""}
            initText={"сортировать по"}
            onChnage={onChnage}
            nameKey={"name"}
          />
        </div>
      )}
    </div>
  );
};

export default MenuChoice;
