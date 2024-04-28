import { Card, Skeleton } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <SubHeader />
      <Header />
      <main className="flex flex-col items-center">
        <Skeleton
          variant="rectangular"
          width={"100%"}
          height={570}
          className="w-full rounded"
          style={{ maxWidth: "1440px" }}
        />
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
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  variant="outlined"
                  className="w-64 lg:w-72 pb-4"
                >
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={320}
                    className="mb-2"
                  />
                  <Skeleton variant="text" height={40} className="mx-3" />
                  <Skeleton variant="text" height={80} className="mx-3" />
                  <div className="flex justify-between">
                    <Skeleton
                      variant="text"
                      width={140}
                      height={35}
                      className="ml-3"
                    />
                    <Skeleton
                      variant="text"
                      width={80}
                      height={35}
                      className="mr-3"
                    />
                  </div>
                </Card>
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
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  variant="outlined"
                  className="w-64 lg:w-72 pb-4"
                >
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={320}
                    className="mb-2"
                  />
                  <Skeleton variant="text" height={40} className="mx-3" />
                  <Skeleton variant="text" height={80} className="mx-3" />
                  <div className="flex justify-between">
                    <Skeleton
                      variant="text"
                      width={140}
                      height={35}
                      className="ml-3"
                    />
                    <Skeleton
                      variant="text"
                      width={80}
                      height={35}
                      className="mr-3"
                    />
                  </div>
                </Card>
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
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  variant="outlined"
                  className="w-64 lg:w-72 pb-4"
                >
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={320}
                    className="mb-2"
                  />
                  <Skeleton variant="text" height={40} className="mx-3" />
                  <Skeleton variant="text" height={80} className="mx-3" />
                  <div className="flex justify-between">
                    <Skeleton
                      variant="text"
                      width={140}
                      height={35}
                      className="ml-3"
                    />
                    <Skeleton
                      variant="text"
                      width={80}
                      height={35}
                      className="mr-3"
                    />
                  </div>
                </Card>
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
            {[...Array(4)].map((_, index) => (
              <SwiperSlide key={index}>
                <Card
                  key={index}
                  variant="outlined"
                  className="w-64 lg:w-72 pb-4"
                >
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={320}
                    className="mb-2"
                  />
                  <Skeleton variant="text" height={40} className="mx-3" />
                  <Skeleton variant="text" height={80} className="mx-3" />
                  <div className="flex justify-between">
                    <Skeleton
                      variant="text"
                      width={140}
                      height={35}
                      className="ml-3"
                    />
                    <Skeleton
                      variant="text"
                      width={80}
                      height={35}
                      className="mr-3"
                    />
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      <Footer />
    </>
  );
}
