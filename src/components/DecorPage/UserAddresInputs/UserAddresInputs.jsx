///////// hooks
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

/////// components
import MyInputs from '../MyInput/MyInputs';

/////// style
import '../UserInputs/style.scss';

//////// fns
import {
  changeInputsDecor,
  setError,
} from '../../../store/reducers/stateSlice';

////delete
import phone from '../../../assets/icons/phone.svg';
import save from '../../../assets/icons/save.svg';

const UserAddresInputs = ({ refAddres }) => {
  const dispatch = useDispatch();

  const { inputsDecor } = useSelector((state) => state.stateSlice);

  const onChange = (e) => {
    const { name, value } = e.target;
    const obj = { [name]: { ...inputsDecor?.[name], text: value } };
    dispatch(changeInputsDecor(obj));
  };

  return (
    <div className="userInputAddres">
      <h6>Выбрать адрес доставки</h6>

      <div>
        <MyInputs
          title={'Населенный пункт'}
          placeholder={'Москва, Московская область'}
          onChange={onChange}
          refAddres={refAddres}
          name={'deliv'}
          error={inputsDecor.deliv.error}
          value={inputsDecor.deliv.text}
        />

        <MyInputs
          title={'Улица и дом'}
          placeholder={'Кремлевская площадь, 1'}
          onChange={onChange}
          name={'deliv_home'}
          error={inputsDecor.deliv_home.error}
          value={inputsDecor.deliv_home.text}
        />

        <MyInputs
          title={'Квартира '}
          moreTitle={'(если отсутствует, пропустите строку)'}
          placeholder={'1'}
          onChange={onChange}
          name={'deliv_home_num'}
          error={inputsDecor.deliv_home_num.error}
          value={inputsDecor.deliv_home_num.text}
        />

        {/* <MyInputs
          title={`Индекс`}
          placeholder={'1000'}
          onChange={onChange}
          moreTitle={'(если частный дом, то пусто)'}
        /> */}
      </div>
    </div>
  );
};

export default UserAddresInputs;
