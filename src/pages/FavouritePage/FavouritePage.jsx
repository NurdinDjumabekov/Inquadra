///hooks
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

/////style
import "./style.scss";

//////components
import { NavPath } from "../../common/NavPath/NavPath";
import MenuSave from "../../common/Menu/MenuSave/MenuSave";
import GoMainPage from "../../common/GoMainPage/GoMainPage";
import Cloth from "../../common/Cloth/Cloth";

////helpers
import { listNavFavourite } from "../../helpers/LodalData";

///// fns
import { getListBasket } from "../../store/reducers/requestSlice";
import { getListFavourite } from "../../store/reducers/requestSlice";

const FavouritePage = () => {
  ///// только для адаптивки (будет отображаться только в мобильной версии от 930px)
  const dispatch = useDispatch();

  const { favouriteList } = useSelector((state) => state.serverSaveSlice);

  useEffect(() => {
    dispatch(getListFavourite());
    dispatch(getListBasket());
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div className="favourite">
      <div className="container">
        <NavPath list={listNavFavourite} />
        <div className="favourite__inner">
          {favouriteList?.map((item, index) => (
            <Cloth item={item} key={index} type={"favourite"} />
          ))}
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

export default FavouritePage;
