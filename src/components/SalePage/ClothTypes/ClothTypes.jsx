////hooks
import { useDispatch, useSelector } from "react-redux";

/////components
import ClothSize from "../ClothSize/ClothSize";
import ClothPrices from "../ClothPrices/ClothPrices";
import CategMenu from "../CategMenu/CategMenu";

///////fns
import { activeBrandsFN } from "../../../store/reducers/stateSlice";
import { changeActive } from "../../../store/reducers/stateSlice";
import { getListCategs } from "../../../store/reducers/requestSlice";

////style
import "./style.scss";

const ClothTypes = () => {
  const dispatch = useDispatch();

  const { categStatus, facture } = useSelector((state) => state.requestSlice);
  const { categKladka, categCoating, listTexture, listColor } = useSelector(
    (state) => state.requestSlice
  );
  const { listCloth, listBrands } = useSelector((state) => state.requestSlice);

  const { activeBrands, active } = useSelector((state) => state.stateSlice);

  const onUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const actionBrands = (id) => {
    dispatch(activeBrandsFN(id));
    dispatch(getListCategs(id));
    onUp();
  };

  const lengthTen = listCloth?.length > 9;

  const onChange = (id, name) => {
    //// меняю кладку, покрытие, оттенки и прочее для сортировки

    if (active?.[name]?.includes(id)) {
      const newList = active?.[name]?.filter((i) => i !== id);
      dispatch(changeActive({ ...active, [name]: newList }));
    } else {
      dispatch(changeActive({ ...active, [name]: [...active?.[name], id] }));
    }
  };

  return (
    <div className="clothTypes">
      <div className="clothTypes__inner">
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

        {/* <ul className="listTypes brands cards">
          {listCards?.map((item) => (
            <li
              key={item?.id}
              className={activeBrands == item?.id ? "activeItem" : ""}
              onClick={() => actionBrands(item?.id)}
            >
              <p>{item?.categoryName}</p>
              <span>{item?.count}</span>
            </li>
          ))}
        </ul> */}

        <CategMenu
          list={categKladka}
          name={"masonry_name"}
          activeState={"kladka"}
          onChange={onChange}
        />

        <CategMenu
          list={categStatus}
          name={"status"}
          activeState={"status"}
          onChange={onChange}
        />

        <CategMenu
          list={categCoating}
          name={"coating_name"}
          activeState={"coating"}
          onChange={onChange}
        />

        <CategMenu
          list={facture}
          name={"facture_name"}
          activeState={"facture"}
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
      </div>

      <ClothPrices />
    </div>
  );
};

export default ClothTypes;
