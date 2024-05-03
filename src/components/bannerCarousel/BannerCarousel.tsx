import ClothingBanner from "../../assets/clothing.png";
import EletronicsBanner from "../../assets/eletronics.png";
import JaweleryBanner from "../../assets/jewelery.png";
import ClothingMobileBanner from "../../assets/clothing-mobile.webp";
import EletronicsMobileBanner from "../../assets/electronics-mobile.webp";
import JaweleryMobileBanner from "../../assets/jewelery-mobile.webp";
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
    <section className="flex justify-center w-full">
      <div className="w-full overflow-hidden flex items-center rounded relative max-h-[600px] max-w-[1440px] object-f">
        <Swiper
          id="swiper"
          spaceBetween={20}
          slidesPerView={1}
          modules={[Autoplay]}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          onSwiper={setSwiper}
          className="flex text-lg mt-4 w-full"
        >
          <SwiperSlide key={1} className="flex items-end">
            <img
              src={ClothingBanner}
              alt="clothing banner"
              className="rounded w-full hidden sm:block"
              loading="lazy"
            />
            <img
              src={ClothingMobileBanner}
              alt="clothing mobile banner"
              className="rounded w-full block sm:hidden"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide key={2}>
            <img
              src={EletronicsBanner}
              alt="clothing banner"
              className="rounded w-full hidden sm:block"
              loading="lazy"
            />
            <img
              src={EletronicsMobileBanner}
              alt="clothing mobile banner"
              className="rounded w-full block sm:hidden"
              loading="lazy"
            />
          </SwiperSlide>
          <SwiperSlide key={3}>
            <img
              src={JaweleryBanner}
              alt="clothing banner"
              className="rounded w-full hidden sm:block"
              loading="lazy"
            />
            <img
              src={JaweleryMobileBanner}
              alt="clothing mobile banner"
              className="rounded w-full block sm:hidden"
              loading="lazy"
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
