import React, { useState } from "react";
import Styles from "../../Styles/Swiper-Styles/General/GeneralSwiperStyles.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode, Autoplay, Mousewheel } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
// import "swiper/css/effect-fade ";

import SwiperData from "../Data/Sails/SwiperData";

const KnotsRopesSwiper = () => {
  const [sectionData, setsectionData] = useState(SwiperData);
  return (
    <div className={Styles.Wrapper}>
      <Swiper
        speed={800}
        modules={[Navigation, FreeMode, Mousewheel, Autoplay]}
        // autoplay={{
        //   delay: 2000,
        //   disableOnInteraction: false,
        // }}
        grabCursor={true}
        loop
        pagination={{
          dynamicBullets: true,
        }}
        mousewheel={true}
        className={Styles.Swiper}
        breakpoints={{
          360: {
            width: 360,
            slidesPerView: 1,
            spaceBetween: 10,
          },
          380: {
            width: 380,
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          480: {
            width: 480,
            slidesPerView: 1.5,
            spaceBetween: 10,
          },
          768: {
            width: 768,
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1920: {
            width: 1920,
            slidesPerView: 5,
            spaceBetween: 0,
          },
        }}
      >
        {sectionData.map((slide) => {
          const { id, Name, Thumbnail, Link } = slide;

          return (
            <SwiperSlide className={Styles.Slide}>
              <a
                className={Styles.Link}
                target={"_blank"}
                rel={"noreferrer"}
                href={Link}
              >
                <div className={Styles.Card} key={id}>
                  <img
                    src={Thumbnail}
                    alt=""
                    className={Styles.Display_Image}
                  />
                  <p className={Styles.Name}>{Name}</p>
                </div>
              </a>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default KnotsRopesSwiper;
