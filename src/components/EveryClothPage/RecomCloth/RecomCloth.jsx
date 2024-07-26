/////// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import React from "react";

/////// imgs
import heart from "../../../assets/icons/heartWhite.svg";

/////// style
import "./style.scss";

/////// components
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

/////// fns

const RecomCloth = () => {
  const dispatch = useDispatch();

  const { listHistory } = useSelector((state) => state.requestSlice);

  if (listHistory?.length > 0) {
    return (
      <div className="recom">
        <div className="recom__title">
          <h4>Можно дополнить образ, чтобы собрать весь комплект</h4>
          <div>
            <img src={heart} alt="heart" />
          </div>
        </div>
        <ul className="recom__list">
          {listHistory?.map((item) => (
            <RenderEveryCloth item={item} key={item.id} />
          ))}
        </ul>
      </div>
    );
  }
};

export default RecomCloth;
