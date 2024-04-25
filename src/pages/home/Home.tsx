import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  useGetElectronicsQuery,
  useGetMensClothingQuery,
  useGetWomensClothingQuery,
} from "../../services/products";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";

export default function Home() {
  const { data: mensClothing } = useGetMensClothingQuery();
  const { data: womensClothing } = useGetWomensClothingQuery();
  const { data: electronics } = useGetElectronicsQuery();

  return (
    <>
      <SubHeader />
      <Header />
      <main className="flex flex-col items-center">
        <BannerCarousel />
        <section className="flex flex-col items-center w-full max-w-7xl mt-24">
          <h2 className="flex justify-center w-full font-medium text-3xl">
            Men's clothing
          </h2>
          <Swiper
            slidesPerView={1.2}
            breakpoints={{
              420: {
                slidesPerView: 1.5,
              },
              500: {
                slidesPerView: 1.8,
              },
              680: {
                slidesPerView: 2.2,
              },
              800: {
                slidesPerView: 2.6,
              },
              930: {
                slidesPerView: 3.2,
              },
              1124: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-12 text-lg w-full p-5 gap-10"
          >
            {mensClothing?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="flex flex-col items-center w-full max-w-7xl mt-24">
          <h2 className="flex justify-center w-full font-medium text-3xl">
            Women's clothing
          </h2>
          <Swiper
            slidesPerView={1.2}
            breakpoints={{
              420: {
                slidesPerView: 1.5,
              },
              500: {
                slidesPerView: 1.8,
              },
              680: {
                slidesPerView: 2.2,
              },
              800: {
                slidesPerView: 2.6,
              },
              930: {
                slidesPerView: 3.2,
              },
              1124: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-12 text-lg w-full p-5 gap-10"
          >
            {womensClothing?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="flex flex-col items-center w-full max-w-7xl mt-24 mb-96">
          <h2 className="flex justify-center w-full font-medium text-3xl">
            Electronics
          </h2>
          <Swiper
            slidesPerView={1.2}
            breakpoints={{
              420: {
                slidesPerView: 1.5,
              },
              500: {
                slidesPerView: 1.8,
              },
              680: {
                slidesPerView: 2.2,
              },
              800: {
                slidesPerView: 2.6,
              },
              930: {
                slidesPerView: 3.2,
              },
              1124: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-12 text-lg w-full p-5 gap-10"
          >
            {electronics?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
    </>
  );
}
