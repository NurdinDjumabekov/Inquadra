import React from "react";
import { useNavigate } from "react-router-dom";

const BlockPage = () => {
  const navigate = useNavigate();
  const goToBack = () => {
    navigate(-1);
  };
  return (
    <>
      <button onClick={goToBack} className="btn_back">
        назад
      </button>
      <div className="container">
        <h3>BlockPage</h3>
      </div>
    </>
  );
};

export default BlockPage;
