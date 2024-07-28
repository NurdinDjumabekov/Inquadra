/////// hooks
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

/////// style
import "./style.scss";

////// components
import InputMask from "react-input-mask";

/////// store
import { numberUserFN } from "../../store/reducers/stateSlice";
import { sendNumberFN } from "../../store/reducers/requestSlice";

/////// helpers
import { tranformNumber } from "../../helpers/tranformNumber";
import { useRef } from "react";

const CheckUser = () => {
  const dispatch = useDispatch();

  const { numberUser } = useSelector((state) => state.stateSlice);
  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const [look, setLook] = useState(1);

  const sendNums = () => {
    if (tranformNumber(numberUser)?.length === 11) {
      dispatch(sendNumberFN(numberUser));
      setLook(3);
    } else {
      alert("Введен некорректный номер телефона");
    }
  };

  const first = look === 1;
  const second = look === 2;
  const third = look === 3;

  const objTitle = {
    1: "Вы зарегистрированы? ",
    2: "Авторизация по номеру телефона ",
    3: `Регистрация по номеру телефона:  `,
  };

  //////////////////////// для подтверждения номера

  const [code, setCode] = useState({ num1: "", num2: "", num3: "", num4: "" });

  const refs = {
    num1: useRef(null),
    num2: useRef(null),
    num3: useRef(null),
    num4: useRef(null),
  };

  const handleInputChange = (name, value) => {
    if (/^\d*$/.test(value)) {
      setCode((prevCode) => ({ ...prevCode, [name]: value }));

      if (value !== "") {
        switch (name) {
          case "num1":
            refs.num2.current.focus();
            break;
          case "num2":
            refs.num3.current.focus();
            break;
          case "num3":
            refs.num4.current.focus();
            break;
          default:
            break;
        }
      }
    }
  };

  const handleKeyPress = (name, key) => {
    if (key === "Backspace" && code[name] === "") {
      switch (name) {
        case "num4":
          refs.num3.current.focus();
          break;
        case "num3":
          refs.num2.current.focus();
          break;
        case "num2":
          refs.num1.current.focus();
          break;
        default:
          break;
      }
    }
  };

  if (!dataUser?.haveBeen) {
    return (
      <div className="checkUser">
        <h5>
          {objTitle?.[look]} {third && <b> {numberUser}</b>}
        </h5>
        {first && (
          <button className="choiceCloth" onClick={() => setLook(2)}>
            Войти
          </button>
        )}
        {second && (
          <div className="sendNum">
            <InputMask
              mask="+9 999 999-99-99"
              placeholder="+7"
              name="number"
              onChange={(e) => dispatch(numberUserFN(e.target.value))}
              value={numberUser}
            />
            <button className="choiceCloth" onClick={sendNums}>
              Подтвердить номер
            </button>
          </div>
        )}
        {third && (
          <div className="modalNumConf">
            <div className="inputs">
              <input
                type="text"
                maxLength={1}
                onChange={(e) => handleInputChange("num1", e.target.value)}
                onKeyDown={(e) => handleKeyPress("num1", e.nativeEvent.key)}
                ref={refs.num1}
                value={code?.num1}
              />
              <input
                type="text"
                maxLength={1}
                onChange={(e) => handleInputChange("num2", e.target.value)}
                onKeyDown={(e) => handleKeyPress("num2", e.nativeEvent.key)}
                ref={refs.num2}
                value={code?.num2}
              />
              <input
                type="text"
                maxLength={1}
                onChange={(e) => handleInputChange("num3", e.target.value)}
                onKeyDown={(e) => handleKeyPress("num3", e.nativeEvent.key)}
                ref={refs.num3}
                value={code?.num3}
              />
              <input
                type="text"
                maxLength={1}
                onChange={(e) => handleInputChange("num4", e.target.value)}
                onKeyDown={(e) => handleKeyPress("num4", e.nativeEvent.key)}
                ref={refs.num4}
                value={code?.num4}
              />
            </div>
            <button className="btnSend" onClick={sendNums}>
              Подтвердить код
            </button>
          </div>
        )}
        {third ? (
          <p>
            введите последние четыре цифры номера, совершившего сейчас вам
            звонок
          </p>
        ) : (
          <p>
            если вы не зарегистрированы, то <span>нажмите здесь</span>
          </p>
        )}
      </div>
    );
  }
};

export default CheckUser;
