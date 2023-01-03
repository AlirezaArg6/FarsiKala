import React from "react";
import { GrFormPrevious, GrNext, GrPrevious } from "react-icons/gr";
import { FcPrevious } from "react-icons/fc";
import SwiperCore, { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const PopularBrands = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  return (
    <section id="popularbrands">
      {/* container */}
      <div className="section-container relative">
        <h3 className="text-2xl text-gray-600 mb-6 text-center">
          محبوب ترین برندها
        </h3>
        {/* items */}
        <Swiper
          freeMode={true}
          breakpoints={{
            0: { slidesPerView: 3, spaceBetween: 8 },
            768: { slidesPerView: 5, spaceBetween: 8 },
            1024: { slidesPerView: 8, spaceBetween: 8 },
            // 1500: { slidesPerView: 8, spaceBetween: 8 },
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
          className="mySwiper w-3/5 md:w-[76%] lg:w-[88%]"
        >
          {/* item 1 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 2 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 3 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 4 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 5 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 6 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 7 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 8 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
          {/* item 9 */}
          <SwiperSlide>
            <div className="max-w-[330px] max-h-[330px] mx-auto  flex items-center justify-center md:max-w-[120px] md:max-h-[120px] xl:max-w-[200px] xl:max-h-[330px] ">
              <img
                src="assets/images/brands/311.png"
                alt=""
                className="w-full h-full md:h-full md:max-h-[140px] "
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <button
          ref={navigationNextRef}
          className="absolute top-[50%] translate-y-[-50%]  right-[60px]  flex justify-center items-center p-2 z-10 text-3xl w-10 h-10 bg-white rounded-full"
        >
          <GrNext />
        </button>
        <button
          ref={navigationPrevRef}
          className="absolute top-[50%] translate-y-[-50%] text-red-500 left-[60px]  flex justify-center items-center p-2 z-10 text-3xl w-10 h-10 bg-white rounded-full "
        >
          <FcPrevious />
        </button>
      </div>
    </section>
  );
};
