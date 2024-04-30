import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} from "../../services/products";
import { LuStar } from "react-icons/lu";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";

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

      <main className="mt-16 mb-36 px-8 flex flex-col items-center">
        <section className="flex flex-col lg:flex-row items-center lg:items-start gap-16 lg:gap-32 justify-center max-w-screen-xl">
          <img
            src={product?.image}
            alt={`imagem do produto ${product?.title}`}
            className="max-w-xs md:max-w-sm xl:max-w-md container w-full"
          />

          <div className="w-full lg:max-w-xl flex flex-col">
            <p className="font-medium">
              {product?.category.charAt(0).toUpperCase()}
              {product?.category.slice(1)} //{" "}
              <strong className="text-primary font-semibold">
                {product?.title}
              </strong>
            </p>
            <h1 className="font-semibold text-3xl mt-2">{product?.title}</h1>
            <p className="mt-4">{product?.description}</p>
            <p className="flex gap-2 items-center mt-4">
              <LuStar size={21} />
              <LuStar size={21} />
              <LuStar size={21} />
              <LuStar size={21} />
              <LuStar size={21} />
              <span className="mr-1 font-medium">{product?.rating.rate}</span>
              <span>({product?.rating.count} Reviews)</span>
            </p>
            <div className="flex gap-3 items-center mt-8">
              <p className="font-semibold text-2xl">
                ${" "}
                {product && (product?.price - product?.price * 0.2).toFixed(2)}
              </p>
              <p className="text-gray-400 line-through text-xl">
                $ {product?.price.toFixed(2)}
              </p>
            </div>
            <p className="font-medium mt-1">
              Up to 10 x $ {product && (product?.price / 10).toFixed(2)}{" "}
              interest free
            </p>
            <div className="mt-10 lg:mt-16">
              <button className="w-full p-4 rounded text-white border border-primary font-medium bg-primary transition-opacity hover:opacity-90">
                Buy Now
              </button>
              <button className="w-full p-4 rounded text-tertiary mt-3 border font-medium border-primary transition-colors hover:bg-secondary">
                Add to Cart
              </button>
            </div>
          </div>
        </section>
        <section className="my-8 max-w-screen-xl w-full lg:mt-16">
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
          <CustomTabPanel value={tab} index={2}></CustomTabPanel>
        </section>
        <hr className="w-full max-w-screen-xl" />
        <section className="text-start w-full max-w-screen-xl mt-16">
          <h2 className="font-medium text-2xl mb-4">Related Products</h2>
          <Swiper
            spaceBetween={45}
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
                slidesPerView: 4.4,
              },
            }}
            className="flex mt-6 text-lg w-full p-5"
          >
            {productsByCategory?.map((p) => (
              <SwiperSlide key={p.id}>
                <ProductCard key={p.id} product={p} />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      </main>
      <Footer />
    </>
  );
}
