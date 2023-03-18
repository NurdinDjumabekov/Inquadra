import React from "react";
import { useNavigate } from "react-router-dom";

export const ContactsPage = () => {
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
        <h3>ContactsPage</h3>
      </div>
    </>
  );
};
