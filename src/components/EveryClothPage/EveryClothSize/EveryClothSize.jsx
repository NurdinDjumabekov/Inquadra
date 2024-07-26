///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///style
import "./style.scss";

////fns
import { changeTemporary } from "../../../store/reducers/stateSlice";

const EveryClothSize = ({ listSizes }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { temporary } = useSelector((state) => state.stateSlice);
  /// храню временный размер и цвет для добавления в избранные

  const clickListMan = (id) => {
    dispatch(changeTemporary({ ...temporary, sizeId: id }));
    //// для временного хранения размеров и цветов
  };

  const noEmpty = listSizes?.length > 0;

  return (
    <ul className={`listSize ${noEmpty && "morePush"}`}>
      {listSizes?.map((item) => (
        <li key={item?.id} onClick={() => clickListMan(item.id)}>
          <p className={temporary?.sizeId == item?.id ? "activeItem" : ""}>
            {item?.sizeName}
          </p>
          <div className="moreSize">
            <div className="moreSize__inner">
              <p>размеры облицовочной плитки продажа коробками</p>
            </div>
          </div>
          <div className="shadowSize"></div>
        </li>
      ))}
    </ul>
  );
};

export default EveryClothSize;
