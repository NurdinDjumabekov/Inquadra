///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////fns
import { changeTemporary } from "../../../store/reducers/stateSlice";

///style
import "./style.scss";

const EveryClothColor = ({ listColor }) => {
  const dispatch = useDispatch();

  const { temporary } = useSelector((state) => state.stateSlice);

  const clickListMan = (id) => {
    dispatch(changeTemporary({ ...temporary, colorId: id }));
  };

  const noEmpty = listColor?.length > 0;

  return (
    <ul className={`listColor ${noEmpty && "morePush"}`}>
      {listColor?.map((item) => (
        <li key={item?.id} onClick={() => clickListMan(item.id)}>
          <p className={temporary?.colorId == item?.id ? "activeItem" : ""}>
            {item?.color}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default EveryClothColor;
