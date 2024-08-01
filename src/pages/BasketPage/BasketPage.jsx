////// hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

////// components
import Promocode from "../../components/BasketPage/BasketPage/Promocode";
import EveryBasket from "../../components/BasketPage/EveryBasket/EveryBasket";
import { NavPath } from "../../common/NavPath/NavPath";
import MenuSave from "../../common/Menu/MenuSave/MenuSave";
import GoMainPage from "../../common/GoMainPage/GoMainPage";
import ConfirmPrice from "../../components/BasketPage/ConfirmPrice/ConfirmPrice";

/////// helpers
import { listNavBasket } from "../../helpers/LodalData";

/////// fns
import { getListFavourite } from "../../store/reducers/requestSlice";
import { getListBasket } from "../../store/reducers/requestSlice";

/////// style
import "./style.scss";

const BasketPage = () => {
  const dispatch = useDispatch();

  const { basketList } = useSelector((state) => state.serverSaveSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(getListFavourite());
    dispatch(getListBasket());
  }, []);

  return (
    <div className="basket">
      <div className="container">
        <NavPath list={listNavBasket} />
        <div className="basket__inner">
          {basketList?.map((item) => (
            <EveryBasket item={item} key={item.id} />
          ))}
          <div className="actions">
            <Promocode />
            <ConfirmPrice />
          </div>
          <GoMainPage />
        </div>
      </div>
      {/* ///// для адаптивки */}
      <div className="adaptiveAction">
        <MenuSave />
      </div>
    </div>
  );
};

export default BasketPage;
