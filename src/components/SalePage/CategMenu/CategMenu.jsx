/////// hooks
import React, { useState, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/////// style
import './style.scss';

/////// imgs
import check from '../../../assets/icons/check.svg';

const CategMenu = ({ list, name, activeState, onChange }) => {
  const dispatch = useDispatch();
  const { activeCateg, active } = useSelector((state) => state.stateSlice);
  // const { active } = useSelector((state) => state.requestSlice);

  const [length, setLength] = useState(false);
  const contentRef = useRef(null);

  const actionCateg = (id) => {
    // window.scrollTo({ top: 0, behavior: "smooth" });
    onChange(id, activeState);
  };

  const noEmpty = list?.length > 0;

  const moreInfo = list?.length > 6;

  const viewAll = () => setLength(!length);

  const listData = list?.slice(0, length ? list?.length : 6);

  return (
    <ul ref={contentRef} className={`menuCateg ${noEmpty && 'morePush'}`}>
      {listData?.map((item) => (
        <li key={item?.id} onClick={() => actionCateg(item?.id)}>
          <div className="checkBox">
            {active?.[activeState]?.includes(item?.id) && (
              <img src={check} alt="\/" />
            )}
          </div>
          <p>{item?.[name]}</p>
        </li>
      ))}
      {moreInfo && !length && (
        <li className="moreInfo" onClick={viewAll}>
          Показать все
        </li>
      )}
    </ul>
  );
};

export default CategMenu;
