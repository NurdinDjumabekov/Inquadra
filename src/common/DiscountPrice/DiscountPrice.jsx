import React from "react";
import "./style.scss";

const DiscountPrice = ({ item }) => {
  return (
    <div className="prices">
      {item?.discountActive ? (
        <div className="price">
          <span>
            {item?.price} рублей за {item?.saleType?.type}
          </span>
          <b>{item?.discountActive && <p>{item?.discount}</p>}</b>
        </div>
      ) : (
        <p>
          {item?.price} рублей за {item?.saleType?.type}
        </p>
      )}
    </div>
  );
};

export default DiscountPrice;
