import { useDispatch, useSelector } from "react-redux";
import {
  changeStatusAction,
  postUserAction,
  stopViewAction,
} from "../redux/actions";
import { useState } from "react";

const UsersPage = () => {
  const dispatch = useDispatch();
  const [inputName, setInputName] = useState("");
  const [inputSurName, setInputSurName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputWebsite, setInputWebsite] = useState("");
  const { stateStatus } = useSelector((state) => state.stateRequestReducer);
  //   console.log(stateStatus);
  const sendRequest = () => {
    dispatch(postUserAction(inputName, inputSurName, inputEmail, inputWebsite));
    dispatch(stopViewAction());
  };

  return (
    <>
      <div>UsersPage</div>
      <div>
        <input
          type="text"
          placeholder="name"
          onChange={(e) => setInputName(e.target.value)}
        />
        <input
          type="text"
          placeholder="surname"
          onChange={(e) => setInputSurName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="website"
          onChange={(e) => setInputWebsite(e.target.value)}
        />
        <button onClick={sendRequest}>send</button>
      </div>
      {stateStatus && <div>Вы успешно зареганы!!!</div>}
    </>
  );
};

export default UsersPage;
