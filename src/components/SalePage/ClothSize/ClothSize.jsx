///hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

///style
import "./style.scss";

////fns
import { activeSizeFN, changeActive } from "../../../store/reducers/stateSlice";

//////helpers

const ClothSize = ({ choiceEvery, typeSize }) => {
  ///// if oneCodeId есть, то надо отображать только один размер, который в codeid приходит

  const dispatch = useDispatch();

  const { activeCateg, activeSize } = useSelector((state) => state.stateSlice);
  const { activeColor, activePrice } = useSelector((state) => state.stateSlice);
  const { activeBrands } = useSelector((state) => state.stateSlice);
  const { active } = useSelector((state) => state.stateSlice);

  const { listSize } = useSelector((state) => state.requestSlice);

  const clickListMan = (id) => {
    dispatch(changeActive({ ...active, size: id }));
  };

  const choiceForBasket = (id) => {
    // dispatch(activeSizeEveryFN(id));
  };

  const obj = { 1: "RS1", 2: "777-777", 3: "777-777", 4: "777-777" };

  const mainTitle = typeSize === "up" ? "(верх)" : "(низ)";

  const noEmpty = listSize?.length > 0;

  // if (choiceEvery) {
  //   return (
  //     <div className="sizeParent">
  //       <ul className="listSize">
  //         {listSize?.map((item) => (
  //           <li key={item?.id} onClick={() => choiceForBasket(item?.id)}>
  //             <p className={activeSizeEvery == item?.id ? "activeItem" : ""}>
  //               {item?.sizeName}
  //             </p>
  //             <div className="moreSize">
  //               <div className="moreSize__inner">
  //                 <div className="infoSize">
  //                   <b>размер</b>
  //                   <b>обхват талии</b>
  //                   <b>обхват груди</b>
  //                   <b>обхват бедер</b>
  //                 </div>
  //                 <div className="typesSize">
  //                   <h6>{obj?.[1]}</h6>
  //                   <span>{obj?.[2]}</span>
  //                   <span>{obj?.[3]}</span>
  //                   <span>{obj?.[4]}</span>
  //                 </div>
  //               </div>
  //             </div>
  //             <div className="shadowSize"></div>
  //           </li>
  //         ))}
  //       </ul>
  //     </div>
  //   );
  // }

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
