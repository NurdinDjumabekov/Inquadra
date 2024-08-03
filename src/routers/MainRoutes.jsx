/////// hooks
import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

////// pages
import MainLayouts from '../layouts/MainLayouts/MainLayouts';
import SalePage from '../pages/SalePage/SalePage';
import EveryClothPage from '../pages/EveryClothPage/EveryClothPage';
import BasketPage from '../pages/BasketPage/BasketPage';
import DecorZakazPage from '../pages/DecorZakazPage/DecorZakazPage';
import AboutCompanyPage from '../pages/AboutCompanyPage/AboutCompanyPage';
import DeliveryPage from '../pages/DeliveryPage/DeliveryPage';
import GiftCardPage from '../pages/GiftCardPage/GiftCardPage';
import PartnerPage from '../pages/PartnerPage/PartnerPage';
import DsiccountsPage from '../pages/DsiccountsPage/DsiccountsPage';
import ContactsPage from '../pages/ContactsPage/ContactsPage';

/////// fns
import { getToken } from '../store/reducers/requestSlice';
import FavouritePage from '../pages/FavouritePage/FavouritePage';

const MainRoutes = () => {
  const dispatch = useDispatch();

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
          <Route path="/favourite" element={<FavouritePage />} />
          <Route path="/decor" element={<DecorZakazPage />} />
          {/* ////// страницы в меню */}
          <Route path="/about" element={<AboutCompanyPage />} />
          <Route path="/deliver" element={<DeliveryPage />} />
          <Route path="/gifts" element={<GiftCardPage />} />
          <Route path="/partner" element={<PartnerPage />} />
          <Route path="/discounts" element={<DsiccountsPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
        </Route>
        {/* <Route path="*" element={<NotFoundPage />} /> */}
      </Routes>
      {/* <MoreInfo /> */}
    </>
  );
};
export default MainRoutes;

////////////////////////////////// адаптивка

// @media (max-width: 1289px) {
//   gap: 10px;
// }
