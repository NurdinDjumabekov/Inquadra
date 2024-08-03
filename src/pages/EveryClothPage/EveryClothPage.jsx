///////////hoooks
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

///////// components
import { NavPath } from '../../common/NavPath/NavPath';
import RecomCloth from '../../components/EveryClothPage/RecomCloth/RecomCloth';
import { Description } from '../../components/EveryClothPage/Description/Description';
import MenuSave from '../../common/Menu/MenuSave/MenuSave';

////////// fns
import { getListhistory } from '../../store/reducers/requestSlice';
import { detailedCloth } from '../../store/reducers/requestSlice';
import { changeTemporary } from '../../store/reducers/stateSlice';

///////// helpers
import PriceMeter from '../../components/EveryClothPage/PriceMeter/PriceMeter';
import EveryClothSize from '../../components/EveryClothPage/EveryClothSize/EveryClothSize';
import EveryClothColor from '../../components/EveryClothPage/EveryClothColor/EveryClothColor';
import SkeletonsDetailedPage from '../../common/Skeletons/SkeletonsDetailedPage/SkeletonsDetailedPage';
import Images from '../../components/EveryClothPage/Images/Images';

///////// /style
import './style.scss';

const EveryClothPage = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { id } = params;

  const { everyCloth } = useSelector((state) => state.requestSlice);
  const { temporary } = useSelector((state) => state.stateSlice);

  const { preloader } = useSelector((state) => state.requestSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    dispatch(detailedCloth(id));
    dispatch(getListhistory());
  }, [id]);

  useEffect(() => {
    const type = everyCloth?.saleType?.id;
    dispatch(changeTemporary({ colorId: 0, sizeId: 0, count: 1, type }));
    ///// подставляю state для временного хранения типа размера
  }, [everyCloth]);

  const productName = everyCloth?.collection?.brand?.productName;
  const collectionName = everyCloth?.collection?.collectionName;
  const listNavDecor = [
    { link: productName, path: '/', active: false },
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
                  <span>{collectionName}</span>
                  <b>{everyCloth?.productStatus?.status}</b>
                </div>
                <h5>{productName}</h5>
              </div>
              <div className="prices">
                <p>{everyCloth?.price} рублей за м²</p>
                <span>
                  {everyCloth?.discountActive && <>-{everyCloth?.discount}%</>}
                </span>
              </div>

              <div className="types">
                <EveryClothSize listSizes={everyCloth?.sizes} />

                <EveryClothColor listColor={everyCloth?.colors} />
              </div>

              <PriceMeter count={temporary?.count} everyCloth={everyCloth} />

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
