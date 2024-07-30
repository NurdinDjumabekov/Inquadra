////hooks
import { useDispatch, useSelector } from "react-redux";

/////components
import ClothSize from "../ClothSize/ClothSize";
import ClothPrices from "../ClothPrices/ClothPrices";
import CategMenu from "../CategMenu/CategMenu";
import MenuChoiceAdaptive from "../../../common/Menu/MenuChoiceAdaptive/MenuChoiceAdaptive";

///////fns
import { activeBrandsFN } from "../../../store/reducers/stateSlice";
import { changeActive } from "../../../store/reducers/stateSlice";
import { getListCategs } from "../../../store/reducers/requestSlice";

////style
import "./style.scss";
import { useState } from "react";
import { NavPath } from "../../../common/NavPath/NavPath";
import { searchBrand } from "../../../helpers/tranformNumber";

const ClothTypesAdaptive = () => {
  ///// есть такая же компонента только для desktop, а это для адаптивки
  const dispatch = useDispatch();

  const { categStatus } = useSelector((state) => state.requestSlice);
  const { categKladka, categCoating, listTexture, listColor } = useSelector(
    (state) => state.requestSlice
  );
  const { listCloth, listBrands } = useSelector((state) => state.requestSlice);
  const { activeBrands, active } = useSelector((state) => state.stateSlice);
  const { menuAdaptive } = useSelector((state) => state.stateSlice);

  const onUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actionBrands = (id) => {
    dispatch(activeBrandsFN(id));
    dispatch(getListCategs(id));
    onUp(); //// скролл вверх
    // setCollection(false); /// сразу закрываю меню
    // setTypes(true); /// сразу открываю второе меню
  };

  const onChange = (id, name) => {
    //// меняю кладку для сортировки
    if (active?.[name]?.includes(id)) {
      const newList = active?.[name]?.filter((i) => i !== id);
      dispatch(changeActive({ ...active, [name]: newList }));
    } else {
      dispatch(changeActive({ ...active, [name]: [...active?.[name], id] }));
    }
  };

  return (
    <div className="clothTypesAdaptive">
      <NavPath list={searchBrand(listBrands, activeBrands)} />
      <MenuChoiceAdaptive />
      <div className="clothTypes__inner">
        {menuAdaptive?.left && (
          <ul className="listTypes brands">
            {listBrands?.map((item) => (
              <li
                key={item?.id}
                className={activeBrands === item?.id ? "activeItem" : ""}
                onClick={() => actionBrands(item?.id)}
              >
                <p>{item?.brandName}</p>
                <span>{item?.productCount || 0}</span>
              </li>
            ))}
          </ul>
        )}

        {menuAdaptive?.right && (
          <>
            <CategMenu
              list={categKladka}
              name={"masonry_name"}
              activeState={"kladka"}
              onChange={onChange}
            />

            <CategMenu
              list={categCoating}
              name={"coating_name"}
              activeState={"coating"}
              onChange={onChange}
            />

            <ClothSize />

            <CategMenu
              list={listTexture}
              name={"texture_name"}
              activeState={"texture"}
              onChange={onChange}
            />

            <CategMenu
              list={listColor}
              name={"color"}
              activeState={"color"}
              onChange={onChange}
            />

            <ClothPrices />
          </>
        )}
      </div>
    </div>
  );
};

export default ClothTypesAdaptive;
