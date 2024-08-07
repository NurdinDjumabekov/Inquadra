import React from "react";
import "./style.scss";
import MenuChoice from "../../common/Menu/MenuChoice/MenuChoice";

const AboutCompanyPage = () => {
  return (
    <div className="about">
      <div className="container">
        <MenuChoice />
        <div className="about__inner">
          <p>Страница на будщее</p>
        </div>
      </div>
    </div>
  );
};

export default AboutCompanyPage;
