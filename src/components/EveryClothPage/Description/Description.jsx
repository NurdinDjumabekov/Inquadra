import React from "react";
import "./style.scss";

export const Description = ({ everyCloth }) => {
  const { productDetails, texture, coating } = everyCloth;

  const listDescr = [
    { id: 1, name: "артикул: ", info: productDetails?.articul },
    { id: 2, name: "материал: ", info: productDetails?.material },
    // { id: 3, name: "размер: ", info: "" },
    { id: 4, name: "цвет: ", info: productDetails?.complect },
    { id: 5, name: "текстура: ", info: texture?.texture_name },
    // { id: 6, name: "тип кладки: ", info: "" },
    { id: 7, name: "тип поверхности: ", info: coating?.type },
    { id: 8, name: "комплектация: ", info: productDetails?.complect },
    { id: 9, name: "страна изготовления: ", info: productDetails?.country },
  ];

  return (
    <div className="descriptions">
      <div className="descriptions__main">
        <div className="moreSescr">
          {listDescr?.map((i) => (
            <div key={i.id}>
              <span>{i.name}</span>
              <p>{i.info || "не выбрано"}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
