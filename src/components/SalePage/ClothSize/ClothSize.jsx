///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///style
import "./style.scss";

////fns
import { changeActive } from "../../../store/reducers/stateSlice";

//////helpers

const ClothSize = () => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { active } = useSelector((state) => state.stateSlice);

  const { listSize } = useSelector((state) => state.requestSlice);

  const clickListMan = (id) => {
    dispatch(changeActive({ ...active, size: id }));
  };

  const noEmpty = listSize?.length > 0;

  return (
    <ul className={`listSize ${noEmpty && "morePush"}`}>
      {listSize?.map((item) => (
        <li key={item?.id} onClick={() => clickListMan(item.id)}>
          <p className={active?.size == item?.id ? "activeItem" : ""}>
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

export default ClothSize;
