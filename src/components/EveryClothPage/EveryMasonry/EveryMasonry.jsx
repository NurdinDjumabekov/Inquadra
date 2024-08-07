///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////fns
import { changeTemporary } from "../../../store/reducers/stateSlice";

///style
import "./style.scss";

const EveryMasonry = ({ list }) => {
  const dispatch = useDispatch();

  const { temporary } = useSelector((state) => state.stateSlice);

  const clickListMan = (id) => {
    dispatch(changeTemporary({ ...temporary, masonryId: id }));
  };

  const noEmpty = list?.length > 0;

  return (
    <ul className={`listMensory ${noEmpty && "morePush"}`}>
      {list?.map((item) => (
        <li key={item?.id} onClick={() => clickListMan(item.id)}>
          <p className={temporary?.masonryId == item?.id ? "activeItem" : ""}>
            {item?.masonry_name}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default EveryMasonry;
