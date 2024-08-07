import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";
import { debounce } from "@mui/material";

//// imgs
import loop from "../../../assets/icons/loop.svg";
import del from "../../../assets/icons/deleteGray.svg";

///// style
import "./style.scss";

///// componnets
import Cloth from "../../Cloth/Cloth";
import { searchFN, searchListFN } from "../../../store/reducers/requestSlice";

////// fns
import { searchCloth } from "../../../store/reducers/requestSlice";
import { list } from "../../../helpers/LodalData";

const MenuSearch = () => {
  const dispatch = useDispatch();

  const { search, searchList } = useSelector((state) => state.requestSlice);

  const clear = (e) => {
    dispatch(searchFN(""));
    dispatch(searchListFN([]));
    ////// очищаю input
  };

  const onChange = (e) => {
    const text = e?.target?.value;

    dispatch(searchFN(text));
    searchData(text);
    search?.length === 0 && dispatch(searchListFN([]));
    ///// очищаю или ищу данные
  };

  const searchData = useCallback(
    debounce((text) => {
      if (text?.length > 1) {
        // dispatch(searchCloth(text));
        // Выполнение поиска с заданными параметрами

        // //// временно
        dispatch(searchListFN(list)); /// time
      }
    }, 500),
    []
  );

  const haveData = search?.length > 0;
  const emptyList = searchList?.length === 0;

  return (
    <>
      <div className={`menu__input ${haveData && "searchMore"}`}>
        <input onChange={onChange} placeholder="плитка оникс" value={search} />
        <img src={loop} alt="loop" className="loop" />
        {haveData && (
          <img src={del} alt="loop" className="del" onClick={clear} />
        )}

        {haveData && !emptyList && (
          <ul className="contentSearch">
            {searchList?.map((item, index) => (
              <Cloth item={item} key={index} type={"search"} />
            ))}
          </ul>
        )}
      </div>
      {haveData && <div className="shadow" onClick={clear}></div>}
    </>
  );
};

export default MenuSearch;
