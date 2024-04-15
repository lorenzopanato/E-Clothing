import ClothingBanner from "../../assets/clothing.png";
import EletronicsBanner from "../../assets/eletronics.png";
import JaweleryBanner from "../../assets/jewelery.png";
import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

export default function BannerCarousel() {
  const [swiper, setSwiper] = useState<any>(null);

  const handleScrollLeft = () => {
    if (swiper) swiper.slidePrev();
  };

  const handleScrollRight = () => {
    if (swiper) swiper.slideNext();
  };


  return (
    <section className="flex justify-center sm:mt-6">
      <div className="container w-full sm:w-11/12 overflow-hidden flex items-center relative" style={{ maxHeight: "570px" }}>
        <Swiper
          id="swiper"
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          className="flex text-lg overflow-x-hidden mt-4"
        >
          <SwiperSlide key={1}>
            <img
              src={ClothingBanner}
              alt="clothing banner"
              className="rounded w-full "
            />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <img
              src={EletronicsBanner}
              alt="clothing banner"
              className="rounded w-full "
            />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <img
              src={JaweleryBanner}
              alt="clothing banner"
              className="rounded w-full "
            />
          </SwiperSlide>
        </Swiper>
        <div className="flex justify-between w-full absolute items-center h-full">
          <LuChevronLeft size={64} onClick={handleScrollLeft} className="text-gray-500 z-50 opacity-30 cursor-pointer hover:opacity-40" />
          <LuChevronRight size={64} onClick={handleScrollRight} className="text-gray-400 z-50 opacity-30 cursor-pointer hover:opacity-40" />
        </div>
      </div>
    </section>
  );
}
