import React from "react";
import "./style.scss";
import { useSelector } from "react-redux";

export const Description = ({ everyCloth }) => {
  const { texture, coating, articul, collection } = everyCloth;
  const { productStatus, colors, sizes, masonry, price } = everyCloth;
  const { country, facture } = everyCloth;

  const { temporary } = useSelector((state) => state.stateSlice);

  const colorObj = colors?.find((i) => i?.id == temporary?.colorId);
  const sizeObj = sizes?.find((i) => i?.id == temporary?.sizeId);
  const masonryObj = masonry?.find((i) => i?.id == temporary?.masonryId);

  const listDescr = [
    { id: 1, name: "артикул: ", info: articul },
    { id: 2, name: "категория: ", info: collection?.brand?.productName },
    { id: 3, name: "название: ", info: collection?.collectionName },
    { id: 4, name: "наличие: ", info: productStatus?.status },
    { id: 5, name: "применение: ", info: masonryObj?.masonry_name },
    // { id: 6, name: "изображение: ", info: "" },
    { id: 7, name: "покрытие: ", info: coating?.type },
    { id: 8, name: "текстура: ", info: texture?.texture_name },
    { id: 9, name: "фактура: ", info: facture?.facture_name },
    { id: 10, name: "размер: ", info: sizeObj?.sizeName },
    { id: 11, name: "оттенок: ", info: colorObj?.color },
    { id: 12, name: "цена: ", info: price },
    { id: 13, name: "продажа: ", info: "штука" },
    { id: 14, name: "комплектация: ", info: temporary?.count },
    { id: 15, name: "страна изготовления: ", info: country },
  ];

  return (
    <div className="descriptions">
      <div className="descriptions__main">
        <div className="moreSescr">
          {listDescr?.map((i) => (
            <div key={i.id}>
              <span>{i.name}</span>
              <p className={i?.id === 1 ? "uppercase" : ""}>{i.info}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
