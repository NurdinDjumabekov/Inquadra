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
import Favourite from "../../../common/Menu/Favourite/Favourite";

const Images = () => {
  const { everyCloth } = useSelector((state) => state.requestSlice);

  const listImg = sarchImgSeconds(everyCloth?.photos);

  const countImg = everyCloth?.photos?.length === 1;

  return (
    <>
      <div className={`mainContant ${countImg ? "onePhoto" : ""}`}>
        <div className="dopImg">
          {listImg?.slice(0, 3)?.map((item, index) => (
            <div key={index}>
              <img src={item?.url} alt="" />
            </div>
          ))}
        </div>
        <div className="mainImg">
          <img src={sarchImg(everyCloth?.photos)?.url} alt="" />
          <div className="imageInnerBlock">
            <Favourite obj={everyCloth} black={false} />
          </div>
        </div>
      </div>

      <div className="sliderMain">
        <Swiper
          modules={[Pagination]}
          className="mySwiper"
          pagination={{
            clickable: true,
          }}
        >
          {everyCloth?.photos?.map((item) => (
            <SwiperSlide key={item?.id}>
              <div className="everySlide">
                <img src={item?.url} alt="" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <Favourite obj={everyCloth} black={false} />
      </div>
    </>
  );
};

export default Images;
