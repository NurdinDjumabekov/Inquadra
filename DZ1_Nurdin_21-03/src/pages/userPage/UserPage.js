import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { UsersBlock } from "../../components/navBar/usersBlock/UsersBlock";
import styles from "./userPage.module.css";
export const UserPage = () => {
  const [userList, setUserList] = useState([]);
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };

  ////////////////////
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    axios
      .get(url)
      .then((resp) => resp.data)
      .then((data) => setUserList(data));
  }, []);
  return (
    <>
      <button onClick={goToBack} className="btn_back">
        назад
      </button>
      <div className="container">
        <h3>UserPage</h3>
        {userList.map((item, index) => (
          <UsersBlock item={item} key={index} />
        ))}
      </div>
    </>
  );
};
