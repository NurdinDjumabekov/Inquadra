////hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////style
import "./style.scss";

////fns

////components
import Sorting from "../Sorting/Sorting";
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";
import { getListProds } from "../../../store/reducers/requestSlice";

const ClothList = () => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  return (
    <div className="clothList">
      <Sorting />
      <ul className="clothList__inner">
        {listCloth?.length === 0 ? (
          <p className="emptyData">Данных пока что нет</p>
        ) : (
          <>
            {listCloth?.map((item) => (
              <RenderEveryCloth item={item} key={item.id} />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default ClothList;
