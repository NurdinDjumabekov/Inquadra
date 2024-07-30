/////hooks
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// components
import ClothList from "../../components/SalePage/ClothList/ClothList";
import ClothTypes from "../../components/SalePage/ClothTypes/ClothTypes";
import SkeletonsSalePage from "../../common/Skeletons/SkeletonsSalePage/SkeletonsSalePage";

////styles
import "./style.scss";

////fns
import { getListBrands } from "../../store/reducers/requestSlice";
import { getListCateg } from "../../store/reducers/requestSlice";
import { getListProds } from "../../store/reducers/requestSlice";
import ClothTypesAdaptive from "../../components/SalePage/ClothTypesAdaptive/ClothTypesAdaptive";

const SalePage = () => {
  const dispatch = useDispatch();

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getListCateg());
    dispatch(getListBrands());
    dispatch(getListProds());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (preloader) {
    return <SkeletonsSalePage />;
  }

  return (
    <div className="sale">
      <div className="container">
        <div className="sale__inner">
          <>
            <ClothTypes />
            {/* //// для desktop */}
            <ClothTypesAdaptive />
            {/* //// для mobile */}
          </>
          <ClothList />
        </div>
      </div>
    </div>
  );
};

export default SalePage;
