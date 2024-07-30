/////// hooks
import React from "react";
import { useDispatch, useSelector } from "react-redux";

////// components
import MyInputs from "../MyInput/MyInputs";
import InputMask from "react-input-mask";

////// fns
import { changeInputsDecor } from "../../../store/reducers/stateSlice";
import { lookNumberConfFN } from "../../../store/reducers/stateSlice";

////// style
import "./style.scss";

const UserInputs = ({ refAddres }) => {
  const dispatch = useDispatch();

  const { dataUser } = useSelector((state) => state.saveDataSlice);

  const { inputsDecor } = useSelector((state) => state.stateSlice);

  const onChange = (e) => {
    const { name, value } = e.target;

    const obj = { [name]: { ...inputsDecor?.[name], text: value } };
    dispatch(changeInputsDecor(obj));
  };

  const openNum = () => dispatch(lookNumberConfFN(true));

  return (
    <div className="userInputAddres">
      <h6>Мои данные</h6>
      <div>
        <MyInputs
          title={"Имя"}
          placeholder={"Александра"}
          onChange={onChange}
          name={"name"}
          error={inputsDecor.name.error}
          value={inputsDecor.name.text}
        />

        <MyInputs
          title={"Фамилия"}
          placeholder={"Александрова"}
          onChange={onChange}
          name={"firstName"}
          error={inputsDecor.firstName.error}
          value={inputsDecor.firstName.text}
        />

        <MyInputs
          title={"Отчество "}
          placeholder={"Александровна"}
          onChange={onChange}
          moreTitle={"(если нет отчества, то пусто)"}
          name={"lastName"}
          error={inputsDecor.lastName.error}
          value={inputsDecor.lastName.text}
        />

        <div className="twoInputs">
          <div className="myInput">
            <span>Номер сотового телефона</span>
            <InputMask
              mask="+9 999 999-99-99"
              placeholder="+7 937 475-75-95"
              name="num"
              onChange={onChange}
            />
          </div>

          {!dataUser?.haveBeen && (
            <div className="choiceCloth" onClick={openNum}>
              Подтвердить номер
            </div>
          )}
        </div>

        <MyInputs
          title={"Электронная почта"}
          placeholder={"womanfromthefuture@icloud.com"}
          onChange={onChange}
          name={"email"}
        />
      </div>
    </div>
  );
};

export default UserInputs;
