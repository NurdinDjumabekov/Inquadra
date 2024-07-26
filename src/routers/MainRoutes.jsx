/////// hooks
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Route, Routes, useLocation } from "react-router-dom";

////// pages
import MainLayouts from "../layouts/MainLayouts/MainLayouts";
import SalePage from "../pages/SalePage/SalePage";
import EveryClothPage from "../pages/EveryClothPage/EveryClothPage";
import BasketPage from "../pages/BasketPage/BasketPage";
import DecorZakazPage from "../pages/DecorZakazPage/DecorZakazPage";

/////// fns
import { getToken } from "../store/reducers/requestSlice";

////// common
import { Preloader } from "../common/Preloader/Preloader";

const MainRoutes = () => {
  const dispatch = useDispatch();

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    dispatch(getToken());
  }, []);

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<MainPage />} /> */}
        <Route element={<MainLayouts />}>
          {/* <Route path="/catalog" element={<ChoiceCatalog />} /> */}
          <Route path="/" element={<SalePage />} />
          <Route path="/every/:id" element={<EveryClothPage />} />
          <Route path="/basket" element={<BasketPage />} />
          <Route path="/decor" element={<DecorZakazPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
      {/* <Preloader /> */}
    </>
  );
};
export default MainRoutes;
