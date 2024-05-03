import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} from "../../services/products";
import Footer from "../../components/footer/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, Skeleton, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ReviewCard from "../../components/reviewCard/ReviewCard";

export default function Product() {
  const { id } = useParams();
  const { data: product } = useGetProductByIdQuery(Number(id));
  const { data: productsByCategory } = useGetProductsByCategoryQuery(
    product?.category
  );
  const [tab, setTab] = useState<number>(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setTab(newValue);
  };

  interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }

  const CustomTabPanel = ({ value, index, children }: TabPanelProps) => {
    return (
      <div hidden={value !== index}>
        {value === index && <div className="mt-4">{children}</div>}
      </div>
    );
  };

  return (
    <>
      <SubHeader />
      <Header />

      <main className="mt-16 mb-36 flex flex-col items-center overflow-hidden">
        <section className="flex flex-col px-6 lg:flex-row items-center lg:items-start gap-10 justify-center w-full max-w-screen-xl">
          <Skeleton
            variant="rounded"
            width={448}
            height={520}
            className="max-w-xs md:max-w-sm xl:max-w-md container w-full"
          />

          <div className="flex flex-col w-full flex-1 lg:max-w-xl">
            <Skeleton variant="text" height={32} width={"80%"} />
            <Skeleton variant="text" height={46} width={"100%"} />
            <Skeleton
              variant="text"
              height={135}
              width={"100%"}
            />
            <Skeleton variant="text" height={42} width={260} />

            <div className="flex gap-3 items-center mt-4">
              <Skeleton variant="text" height={56} width={120} />
              <Skeleton variant="text" height={50} width={100} />
            </div>

            <Skeleton variant="text" height={32} width={260} />

            <div className="mt-10">
              <button className="w-full p-3.5 rounded text-white border border-primary font-medium bg-primary transition-opacity hover:opacity-90">
                Buy Now
              </button>
              <button className="w-full p-3.5 rounded text-tertiary mt-3 border font-medium border-primary transition-colors hover:bg-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
        <section className="my-8 max-w-screen-xl w-full px-6 lg:mt-16">
          <Tabs
            value={tab}
            onChange={handleTabChange}
            variant="scrollable"
            allowScrollButtonsMobile
            scrollButtons="auto"
            aria-label="basic tabs example"
            sx={{
              ".MuiTabs-indicator": {
                backgroundColor: "#121212",
              },
            }}
          >
            <Tab
              sx={{
                color: "black",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  color: "#252d3b",
                },
              }}
              label="Description"
            />
            <Tab
              sx={{
                color: "black",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  color: "#252d3b",
                },
              }}
              label="Aditional info"
            />
            <Tab
              sx={{
                color: "black",
                "&.Mui-selected": {
                  fontWeight: "bold",
                  color: "#252d3b",
                },
              }}
              label="Reviews"
            />
          </Tabs>
          <CustomTabPanel value={tab} index={0}>
            <p>{product?.description}</p>
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <div>
              <span className="font-semibold">Category: </span>
              <span>{product?.category}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">Original price: </span>
              <span>$ {product?.price.toFixed(2)}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">Rating: </span>
              <span>{product?.rating.rate}</span>
            </div>
            <div className="mt-2">
              <span className="font-semibold">Reviews: </span>
              <span>{product?.rating.count}</span>
            </div>
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={2}>
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
          </CustomTabPanel>
        </section>
        <hr className="w-full max-w-screen-xl" />
        <section className="text-start w-full max-w-screen-xl mt-16 px-4">
          <h2 className="font-medium text-2xl mb-4">Related Products</h2>
          <Swiper
            spaceBetween={60}
            slidesPerView={1.3}
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
                slidesPerView: 4.4,
              },
            }}
            className="flex mt-6 text-lg w-full"
          >
            {productsByCategory?.map((_p, index) => (
              <SwiperSlide key={index}>
                 <Card
                  key={index}
                  variant="outlined"
                  className="w-64 pb-4"
                >
                  <Skeleton
                    variant="rectangular"
                    width={"100%"}
                    height={280}
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
