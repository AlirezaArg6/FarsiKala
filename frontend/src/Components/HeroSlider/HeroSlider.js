import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import SwiperCore, { Pagination, Navigation, Autoplay } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "../../styles/customSwiper.css";

export const HeroSlider = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section id="heroSlider" className="hidden lg:block -mt-2 ">
      <Swiper
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        onSwiper={(swiper) => {
          // Delay execution for the refs to be defined
          setTimeout(() => {
            // Override prevEl & nextEl now that refs are defined
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.params.navigation.nextEl = navigationNextRef.current;

            // Re-init navigation
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        autoplay={true}
        scrollbar={{ draggable: true }}
        loop={true}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper relative"
      >
        <SwiperSlide className="overflow-hidden">
          <img src="assets/images/hero/1-scaled-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img src="assets/images/hero/2-scaled-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img src="assets/images/hero/3-scaled-1.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide className="overflow-hidden">
          <img src="assets/images/hero/47-scaled-1.jpg" alt="" />
        </SwiperSlide>
        <button
          ref={navigationNextRef}
          className="absolute top-[50%] translate-y-[-50%] right-[50px] z-10 text-3xl"
        >
          <GrNext />
        </button>
        <button
          ref={navigationPrevRef}
          className="absolute top-[50%] translate-y-[-50%] left-[50px] z-10 text-3xl"
        >
          <GrPrevious color="red" />
        </button>
      </Swiper>
    </section>
  );
};
