import React from "react";
import "./style.scss";

export const Description = ({ everyCloth }) => {
  return (
    <div className="descriptions">
      <div className="descriptions__main">
        <div className="moreSescr">
          <div>
            <span>артикул: </span>
            <p>{everyCloth?.productDetails?.articul}</p>
          </div>
          <div>
            <span>материал: </span>
            <p>{everyCloth?.productDetails?.material}</p>
          </div>
          <div>
            <span>размер: </span>
            <p>{}</p>
          </div>
          <div>
            <span>цвет: </span>
            <p>{everyCloth?.productDetails?.complect}</p>
          </div>
          <div>
            <span>текстура: </span>
            <p>{}</p>
          </div>
          <div>
            <span>тип кладки: </span>
            <p>{}</p>
          </div>
          <div>
            <span>тип поверхности: </span>
            <p>{}</p>
          </div>
          <div>
            <span>комплектация: </span>
            <p>{everyCloth?.productDetails?.complect}</p>
          </div>
          <div>
            <span>страна изготовления: </span>
            <p>{everyCloth?.productDetails?.country}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
