import React from 'react';
import './style.scss';
import CheckUser from '../../components/CheckUser/CheckUser';
import UserInputs from '../../components/DecorPage/UserInputs/UserInputs';
import UserAddresInputs from '../../components/DecorPage/UserAddresInputs/UserAddresInputs';
import { useRef } from 'react';
import DeliveryPay from '../../components/DecorPage/DeliveryPay/DeliveryPay';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NavPath } from '../../common/NavPath/NavPath';
import { listNavDecor } from '../../helpers/LodalData';
import { setError } from '../../store/reducers/stateSlice';
import { useDispatch, useSelector } from 'react-redux';
import { tranformNumber } from '../../helpers/tranformNumber';
import { validateEmail } from '../../helpers/validation';

const DecorZakazPage = () => {
  const refAddres = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { inputsDecor } = useSelector((state) => state.stateSlice);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    // navigate('/');
    // alert('Ваш заказ успешно был оформлен');

    const validations = {
      name: inputsDecor?.name?.text?.length > 3,
      firstName: inputsDecor?.firstName?.text?.length > 3,
      lastName: inputsDecor?.lastName?.text?.length > 3,
      num: tranformNumber(inputsDecor?.num?.text)?.length === 11,
      email: validateEmail(inputsDecor.email.text),
      deliv: inputsDecor?.deliv?.text?.length > 3,
      deliv_home: inputsDecor?.deliv_home?.text?.length > 3,
      deliv_home_num: inputsDecor?.deliv_home_num?.text?.length > 3,
    };

    Object.keys(validations).forEach((key) => {
      const isValid = validations[key];
      if (!isValid) {
        dispatch(setError({ key, error: true }));
        setTimeout(() => {
          dispatch(setError({ key, error: false }));
        }, 3000);
      }
    });
  };

  return (
    <div className="decor">
      <div className="container">
        <div className="decor__inner">
          <NavPath list={listNavDecor} />
          <CheckUser />
          <form onSubmit={sendData}>
            <UserInputs refAddres={refAddres} />
            <UserAddresInputs refAddres={refAddres} />
            <DeliveryPay />
          </form>
        </div>
      </div>
    </div>
  );
};

export default DecorZakazPage;
