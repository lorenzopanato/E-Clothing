import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  useGetElectronicsQuery,
  useGetJeweleryQuery,
  useGetMensClothingQuery,
  useGetWomensClothingQuery,
} from "../../services/products";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import Footer from "../../components/footer/Footer";
import { Link } from "react-router-dom";
import HomeSkeleton from "./HomeSkeleton";

export default function Home() {
  const { data: mensClothing, isLoading: isLoadingMensClothing } =
    useGetMensClothingQuery();
  const { data: womensClothing, isLoading: isLoadingWomensClothing } =
    useGetWomensClothingQuery();
  const { data: electronics, isLoading: isLoadingElectronics } =
    useGetElectronicsQuery();
  const { data: jewelery, isLoading: isLoadingJewelery } =
    useGetJeweleryQuery();

  if (
    isLoadingMensClothing ||
    isLoadingWomensClothing ||
    isLoadingElectronics ||
    isLoadingJewelery
  ) {
    return <HomeSkeleton></HomeSkeleton>;
  }

  return (
    <>
      <SubHeader />
      <Header />
      <main className="flex flex-col items-center">
        <BannerCarousel />
        <section className="flex max-w-7xl flex-col items-center w-full mt-24">
          <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center px-6">
            <h2 className="font-medium text-3xl">Men's clothing</h2>
            <Link to={"/products"} className="hover:underline">
              Check out all products
            </Link>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 1.8,
              },
              580: {
                slidesPerView: 2.3,
              },
              740: {
                slidesPerView: 2.5,
              },
              800: {
                slidesPerView: 2.9,
              },
              930: {
                slidesPerView: 3.4,
              },
              1000: {
                slidesPerView: 3.6,
              },
              1124: {
                slidesPerView: 3.8,
              },
              1330: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-6 text-lg w-full p-5"
          >
            {mensClothing?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="flex flex-col items-center w-full max-w-7xl mt-24">
          <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center px-6">
            <h2 className="font-medium text-3xl">Women's clothing</h2>
            <Link to={"/products"} className="hover:underline">
              Check out all products
            </Link>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 1.8,
              },
              580: {
                slidesPerView: 2.3,
              },
              740: {
                slidesPerView: 2.5,
              },
              800: {
                slidesPerView: 2.9,
              },
              930: {
                slidesPerView: 3.4,
              },
              1000: {
                slidesPerView: 3.6,
              },
              1124: {
                slidesPerView: 3.8,
              },
              1330: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-6 text-lg w-full p-5"
          >
            {womensClothing?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="flex flex-col items-center w-full max-w-7xl mt-24">
          <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center px-6">
            <h2 className="font-medium text-3xl">Electronics</h2>
            <Link to={"/products"} className="hover:underline">
              Check out all products
            </Link>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 1.8,
              },
              580: {
                slidesPerView: 2.3,
              },
              740: {
                slidesPerView: 2.5,
              },
              800: {
                slidesPerView: 2.9,
              },
              930: {
                slidesPerView: 3.4,
              },
              1000: {
                slidesPerView: 3.6,
              },
              1124: {
                slidesPerView: 3.8,
              },
              1330: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-6 text-lg w-full p-5"
          >
            {electronics?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="flex flex-col items-center w-full max-w-7xl mt-24 mb-32">
          <div className="w-full flex flex-col sm:flex-row gap-y-2 justify-between items-center px-6">
            <h2 className="font-medium text-3xl">Jewelery</h2>
            <Link to={"/products"} className="hover:underline">
              Check out all products
            </Link>
          </div>
          <Swiper
            spaceBetween={80}
            slidesPerView={1.5}
            breakpoints={{
              500: {
                slidesPerView: 1.8,
              },
              580: {
                slidesPerView: 2.3,
              },
              740: {
                slidesPerView: 2.5,
              },
              800: {
                slidesPerView: 2.9,
              },
              930: {
                slidesPerView: 3.4,
              },
              1000: {
                slidesPerView: 3.6,
              },
              1124: {
                slidesPerView: 3.8,
              },
              1330: {
                slidesPerView: 4,
              },
            }}
            className="overflow-x-hidden flex mt-6 text-lg w-full p-5"
          >
            {jewelery?.map((product, index) => (
              <SwiperSlide key={index}>
                <ProductCard product={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      <Footer />
    </>
  );
}
