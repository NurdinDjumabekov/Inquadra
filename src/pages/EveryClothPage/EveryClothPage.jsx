///////////hoooks
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

///////// components
import { NavPath } from "../../common/NavPath/NavPath";
import RecomCloth from "../../components/EveryClothPage/RecomCloth/RecomCloth";
import { Description } from "../../components/EveryClothPage/Description/Description";
import MenuSave from "../../common/Menu/MenuSave/MenuSave";
import Images from "../../components/EveryClothPage/Images/Images";
import PriceMeter from "../../components/EveryClothPage/PriceMeter/PriceMeter";
import EveryClothSize from "../../components/EveryClothPage/EveryClothSize/EveryClothSize";
import EveryClothColor from "../../components/EveryClothPage/EveryClothColor/EveryClothColor";
import SkeletonsDetailedPage from "../../common/Skeletons/SkeletonsDetailedPage/SkeletonsDetailedPage";
import EveryMasonry from "../../components/EveryClothPage/EveryMasonry/EveryMasonry";

////////// fns
import { getListBasket } from "../../store/reducers/requestSlice";
import { getListhistory } from "../../store/reducers/requestSlice";
import { detailedCloth } from "../../store/reducers/requestSlice";
import { changeTemporary } from "../../store/reducers/stateSlice";

///////// helpers
import { checkBasket, returnBasket } from "../../helpers/meterFN";

///////// /style
import "./style.scss";

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth } = useSelector((state) => state.requestSlice);
  const { temporary } = useSelector((state) => state.stateSlice);
  const { basketList } = useSelector((state) => state.serverSaveSlice);
  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    dispatch(detailedCloth(id));
    dispatch(getListhistory());
    dispatch(getListBasket());
    ///// получаю все необходимые списки
  }, [id]);

  useEffect(() => {
    const type = everyCloth?.saleType?.id;
    const objBasket = returnBasket(basketList, everyCloth);

    const obj = {
      colorId: everyCloth?.colors?.[0]?.id,
      sizeId: everyCloth?.sizes?.[0]?.id,
      masonryId: everyCloth?.masonry?.[0]?.id,
      count: 1,
      type,
    };

    const objWithBasket = {
      colorId: objBasket?.colorId,
      sizeId: objBasket?.sizeId,
      masonryId: objBasket?.masonryId,
      count: objBasket?.count,
      type,
    };

    if (objBasket) {
      console.log(objWithBasket, "objWithBasket");
      dispatch(changeTemporary(objWithBasket));
      ///// беру значение в корзине и подставляю
    } else {
      dispatch(changeTemporary(obj));
      ///// дефолтное значение подставляю (все первое)
    }
    ///// подсталвяю первый цвет, размер и декор по умоланию
  }, [everyCloth]);

  const productName = everyCloth?.collection?.brand?.productName;
  const collectionName = everyCloth?.collection?.collectionName;
  const listNavDecor = [
    { link: productName, path: "/", active: false },
    { link: collectionName, path: `/every/${id}`, active: true },
  ];

  if (preloader) {
    return <SkeletonsDetailedPage />;
  }

  return (
    <>
      <div className="everyCloth">
        <div className="container">
          <NavPath list={listNavDecor} />
          <div className="everyCloth__inner">
            <Images />
            <div className="dopContant">
              <div className="titles">
                <div>
                  <span>{productName}</span>
                  <b>{everyCloth?.productStatus?.status}</b>
                </div>
                <h5>{collectionName}</h5>
              </div>

              <div className="prices">
                <p>{everyCloth?.price} рублей за м²</p>
                <span>
                  {everyCloth?.discountActive && <>-{everyCloth?.discount}%</>}
                </span>
              </div>

              <div className="types">
                <EveryClothSize listSizes={everyCloth?.sizes} />
                <EveryMasonry list={everyCloth?.masonry} />
                <EveryClothColor listColor={everyCloth?.colors} />
              </div>

              <PriceMeter
                count={temporary?.count}
                everyCloth={everyCloth}
                exists={checkBasket(basketList, everyCloth)}
              />

              <Description everyCloth={everyCloth} />
            </div>
          </div>
          <RecomCloth />
        </div>
      </div>
      {/* ///// для адаптивки */}
      <div className="adaptiveAction">
        <MenuSave />
      </div>
    </>
  );
};

export default EveryClothPage;
