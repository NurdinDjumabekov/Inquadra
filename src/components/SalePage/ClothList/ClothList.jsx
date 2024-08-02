////hooks
import { useDispatch, useSelector } from "react-redux";

////style
import "./style.scss";

////fns

////components
import RenderEveryCloth from "../../RenderEveryCloth/RenderEveryCloth";

const ClothList = () => {
  const dispatch = useDispatch();

  const { listCloth } = useSelector((state) => state.requestSlice);

  return (
    <div className="clothList">
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
