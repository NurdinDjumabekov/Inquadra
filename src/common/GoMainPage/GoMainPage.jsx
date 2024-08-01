///hooks
import React from "react";
import { useNavigate } from "react-router-dom";

/////style
import "./style.scss";

const GoMainPage = () => {
  const navigate = useNavigate();

  ///// толька для адаптивки с размера 930px
  return (
    <div className="goMain">
      <p>
        Продолжить выбирать качественные, красивые, премиальные и иные плитки,
        чтобы воссоздать у себя дома то, что действительно хочешь и давно об
        этом мечтаешь
      </p>

      <button onClick={() => navigate("/")}>В каталог магазина</button>
    </div>
  );
};

export default GoMainPage;
