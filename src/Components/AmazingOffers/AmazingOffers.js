import React, { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import { GrNext, GrPrevious } from "react-icons/gr";
import { BiChevronLeft } from "react-icons/bi";
import { ProductBox } from "../ProductBox/ProductBox";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const AmazingOffers = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section id="amazingOffers" className="mb-6 p-4">
      <div className="section-container bg-mainColor rounded-lg p-4">
        <div className="flex ">
          {/* amazing offer banner */}
          <div className="flex flex-col space-y-10 items-center w-2/5 lg:w-[12%]">
            <img src="amazing-offers.png" alt="" className="h-72 w-34" />
            <a
              href=""
              className="flex text-white items-center text:xs md:text-lg"
            >
              نمایش همه
              <BiChevronLeft className="mr-2" size={20} />
            </a>
          </div>{" "}
          {/* swiper */}
          <Swiper
            freeMode={true}
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 8 },
              768: { slidesPerView: 2, spaceBetween: 8 },
              1024: { slidesPerView: 4, spaceBetween: 8 },
              1500: { slidesPerView: 5, spaceBetween: 8 },
            }}
            grabCursor={true}
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
            scrollbar={{ draggable: true }}
            loop={true}
            modules={[Navigation]}
            className="mySwiper w-3/5 lg:w-[88%]"
          >
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>
            <SwiperSlide>
              <ProductBox />
            </SwiperSlide>

            <button
              ref={navigationNextRef}
              className="absolute top-[50%] translate-y-[-50%] right-[20px] border flex justify-center items-center p-2 z-10 text-3xl w-10 h-10 bg-white rounded-full"
            >
              <GrNext />
            </button>
            <button
              ref={navigationPrevRef}
              className="absolute top-[50%] translate-y-[-50%] left-[20px] border flex justify-center items-center p-2 z-10 text-3xl w-10 h-10 bg-white rounded-full "
            >
              <GrPrevious color="red" />
            </button>
          </Swiper>
        </div>
      </div>
    </section>
  );
};
