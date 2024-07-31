import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";

////// helpers
import { sarchImg, sarchImgSeconds } from "../../../helpers/sarchImg";

///////// /style
import "./style.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Images = () => {
  const { everyCloth } = useSelector((state) => state.requestSlice);

  const listImg = sarchImgSeconds(everyCloth?.photos);

  console.log(everyCloth?.photos, "everyCloth");

  return (
    <>
      <div className="mainContant">
        <div className="dopImg">
          {listImg?.slice(0, 3)?.map((item) => (
            <div key={item?.id}>
              <img src={item?.url} alt="" />
            </div>
          ))}
        </div>
        <div className="mainImg">
          <img src={sarchImg(everyCloth?.photos)?.url} alt="" />
        </div>
      </div>

      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={{
          clickable: true,
        }}
      >
        {everyCloth?.photos?.map((item) => (
          <SwiperSlide>
            <div className="everySlide">
              <img src={item?.url} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Images;
