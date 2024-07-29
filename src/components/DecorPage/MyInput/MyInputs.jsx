import React, { useEffect, useState } from "react";
import "./style.scss";
import { useSelector } from "react-redux";

const MyInputs = (props) => {
  const { title, placeholder, name, moreTitle } = props;
  const { onChange, required, email, refAddres } = props;
  const { error, value } = props;

  const { inputsDecor } = useSelector((state) => state.stateSlice);

  const check = inputsDecor?.[name]?.error;
  const errText = inputsDecor?.[name]?.errText;

  return (
    <div className={`myInput ${check ? "errorValidated" : ""}`}>
      <span>
        {title}
        {moreTitle && <i>{moreTitle}</i>}
      </span>
      <input
        type={email ? "email" : "text"}
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        required={required}
        email={email}
        ref={refAddres}
        value={inputsDecor?.[name]?.text}
      />
      {true && <b>{errText}</b>}
    </div>
  );
};

export default MyInputs;
