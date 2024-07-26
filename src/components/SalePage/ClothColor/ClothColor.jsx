///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////imgs
import img3 from "../../../assets/images/bigImg.png";

///style
import "./style.scss";

///fns
import { activeColorFN } from "../../../store/reducers/stateSlice";

const ClothColor = () => {
  const dispatch = useDispatch();

  const { lookSize, activeColor } = useSelector((state) => state.stateSlice);

  const { listColor } = useSelector((state) => state.requestSlice);

  const click = (id) => {
    // dispatch(activeColorFN(id));
  };

  return (
    <div className={`clothColor ${lookSize && "moreNoneActive"}`}>
      <div className="mainTitle">
        <h3>Цветовая палитра</h3>
      </div>
      <ul className="listColor">
        {listColor?.map((item) => (
          <li
            key={item?.id}
            className={`list ${activeColor == item.id && "activeItem"}`}
            onClick={() => click(item.id)}
          >
            <img src={item?.color} alt="imgColor" className="miniImg" />
            <div className="activeImg">
              {/* <img src={item?.color} alt="imgColorBig" /> */}
              <img src={img3} alt="imgColorBig" />
            </div>
            <div className="shadowWhite" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ClothColor;
