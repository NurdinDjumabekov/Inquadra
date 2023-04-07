import { useDispatch, useSelector } from "react-redux";
import { postUserAction, stopViewAction } from "../redux/actions";
import { useState } from "react";
import Successful from "../components/successful";

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
      <div className="block_welcome">
        <h1>Введите данные для того, чтобы зарегистрироваться</h1>
      </div>
      <div className="block_icon">
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
          type="email"
          placeholder="Email"
          onChange={(e) => setInputEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="website"
          onChange={(e) => setInputWebsite(e.target.value)}
        />
        <div className="block_send_button">
          <button onClick={sendRequest}>send</button>
        </div>
      </div>
      {stateStatus && <Successful inputName={inputName} />}
    </>
  );
};

export default UsersPage;
