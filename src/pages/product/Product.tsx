import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import {
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
} from "../../services/products";
import { LuChevronLeft, LuChevronRight, LuStar } from "react-icons/lu";
import Footer from "../../components/footer/Footer";
import ProductCard from "../../components/productCard/ProductCard";
import { Tab, Tabs } from "@mui/material";
import { useState } from "react";
import ReviewCard from "../../components/reviewCard/ReviewCard";
import ProductSkeleton from "./ProductSkeleton";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {
  const { id } = useParams();
  const { data: product, isLoading: isLoadingProduct } = useGetProductByIdQuery(
    Number(id)
  );
  const { data: productsByCategory, isLoading: isLoadingCategoryProducts } =
    useGetProductsByCategoryQuery(product?.category);
  const [tab, setTab] = useState<number>(0);
  const [slider, setSlider] = useState<any>(null);

  const nextSlide = () => {
    slider.slickNext();
  };

  const prevSlide = () => {
    slider.slickPrev();
  };

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

  if (isLoadingCategoryProducts || isLoadingProduct) {
    return <ProductSkeleton></ProductSkeleton>;
  }

  var sliderSettings = {
    dots: true,
    speed: 500,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 2.5,
        },
      },
      {
        breakpoint: 740,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 625,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1.5,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <SubHeader />
      <Header />

      <main className="mt-5 sm:mt-16 mb-36 flex flex-col items-center">
        <section className="flex flex-col px-6 lg:flex-row items-center lg:items-start gap-8 sm:gap-16 lg:gap-32 justify-center max-w-screen-xl">
          <img
            src={product?.image}
            alt={`imagem do produto ${product?.title}`}
            className="max-w-xs md:max-w-sm xl:max-w-md container w-full"
          />

          <div className="w-full lg:max-w-xl flex flex-col">
            <p className="font-medium text-sm sm:text-base">
              {product?.category.charAt(0).toUpperCase()}
              {product?.category.slice(1)} //{" "}
              <strong className="text-primary font-semibold">
                {product?.title}
              </strong>
            </p>
            <h1 className="font-semibold text-2xl sm:text-3xl mt-2">{product?.title}</h1>
            <p className="mt-2 sm:mt-4 text-sm sm:text-base text-justify">{product?.description}</p>
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
              <p className="font-semibold text-xl sm:text-2xl">
                ${" "}
                {product && (product?.price - product?.price * 0.2).toFixed(2)}
              </p>
              <p className="text-gray-400 line-through text-lg sm:text-xl">
                $ {product?.price.toFixed(2)}
              </p>
            </div>
            <p className="font-medium mt-1 text-sm sm:text-base">
              Up to 10 x $ {product && (product?.price / 10).toFixed(2)}{" "}
              interest free
            </p>
            <div className="mt-10 lg:mt-16">
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
            <p className="text-justify text-sm sm:text-base">
              {product?.description}
            </p>
          </CustomTabPanel>
          <CustomTabPanel value={tab} index={1}>
            <div className="text-sm sm:text-base">
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
        <section className="text-start w-full max-w-screen-xl mt-10 sm:mt-16 px-4 relative">
          <h2 className="font-medium text-xl sm:text-2xl mb-8">
            Related Products
          </h2>
          <div className="relative">
            <div className="w-full bottom-[60%] flex justify-between items-center absolute">
              <LuChevronLeft
                size={46}
                className="cursor-pointer z-50"
                onClick={prevSlide}
              />

              <LuChevronRight
                size={46}
                className="cursor-pointer z-50"
                onClick={nextSlide}
              />
            </div>
            <div className="px-10">
              <Slider
                {...sliderSettings}
                className="pb-8"
                ref={(slider) => setSlider(slider)}
              >
                {productsByCategory?.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </Slider>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
