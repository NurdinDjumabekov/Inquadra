///hooks
import { useDispatch } from 'react-redux';
import React from 'react';

/////style
import './style.scss';

////// components
import Favourite from '../../../common/Menu/Favourite/Favourite';

////imgs
import pay1 from '../../../assets/images/pay1.png';
import pay2 from '../../../assets/images/pay2.png';
import deleteImg from '../../../assets/icons/delete.svg';
import info from '../../../assets/icons/Info.svg';
import minus from '../../../assets/icons/minus.svg';
import plus from '../../../assets/icons/plus.svg';
import sale from '../../../assets/icons/saleWhiteGray.svg';

//////components
import { deleteProdBasket } from '../../../store/reducers/serverSaveSlice';
import { addProdBasket } from '../../../store/reducers/serverSaveSlice';
import { removeProdBasket } from '../../../store/reducers/serverSaveSlice';

////helpers
import { sarchImg } from '../../../helpers/sarchImg';

const EveryBasket = ({ item }) => {
  const dispatch = useDispatch();

  const color = item?.colors?.filter((i) => i?.id === item?.colorId); /// цвет
  const colorActive = color?.[0]?.color;

  const size = item?.sizes?.filter((i) => i?.id === item?.sizeId); /// размер
  const sizeActive = size?.[0]?.sizeName;

  console.log(item, 'item');

  return (
    <>
      <div className="basket__every">
        <div className="basket__child">
          <div className="mainImg">
            <img src={sarchImg(item?.photos)?.url} alt="" />
            {/* <img src={item?.photos?.[0]?.url} alt="" /> */}
            <div className="discount">
              <p>-80%</p>
            </div>
            <div className="count">
              <p>28шт</p>
            </div>
            <div className="favoriteIcon">
              <Favourite obj={item} />
            </div>
          </div>
          <div className="dopContant">
            <div className="title">
              <div>
                <span>
                  {item?.collection?.collectionName || 'Керамическая плитка'}
                </span>
                <h6>{item?.collection?.brand?.productName}</h6>
              </div>
              <b>{item?.productStatus?.status}</b>
            </div>

            <div className="sizes">
              <div className="color">
                <p>{sizeActive}</p>
              </div>
              <div className="size">
                <p>{colorActive}</p>
              </div>
            </div>

            <div className="price">
              <div className="color">
                <p>{item?.price * item?.count}</p>
                <span>руб.</span>
              </div>
              <div className="size">
                <p>{item?.price}</p>
                {/* <span>{item?.saleType?.type}</span> */}
                <span>м²</span>
              </div>
            </div>

            <div className="actionsBasket">
              <div className="actionsBasket__counter">
                <button onClick={() => {}}>
                  <img src={minus} alt="<" />
                </button>
                <button>{item?.count}</button>
                <button onClick={() => {}}>
                  <img src={plus} alt="<" />
                </button>
              </div>
              <button className='adaptuveBtn' onClick={() => {}}>
                <img src={sale} alt="" />{' '}
              </button>
            </div>
          </div>
        </div>

        {/* <div className="deleteAction">
          <button onClick={() => dispatch(deleteProdBasket(item))}>
            <img src={deleteImg} alt="delete" />
          </button>
        </div> */}
      </div>
      {/* <div className="line"></div> */}
    </>
  );
};

export default EveryBasket;
