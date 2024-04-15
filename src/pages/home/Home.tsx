import { LuMonitor, LuShirt } from "react-icons/lu";
import BannerCarousel from "../../components/bannerCarousel/BannerCarousel";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import { PiDress } from "react-icons/pi";
import { GiDiamondRing } from "react-icons/gi";
import {
  useGetMensClothingQuery,
  useGetWomensClothingQuery,
} from "../../services/products";

export default function Home() {
  const { data: mensClothing } = useGetMensClothingQuery();
  const { data: womensClothing } = useGetWomensClothingQuery();
  //const bestSellers = [...mensClothing, ...womensClothing];

  return (
    <>
      <SubHeader />
      <Header />
      <main className="flex flex-col items-center">
        <BannerCarousel />
        <section className="flex flex-col items-center w-full max-w-7xl px-12 mt-24 mb-96">
          <h2 className="flex justify-center w-full font-medium text-3xl">
            Our best sellers
          </h2>
          <div>
            {mensClothing?.map((product) => (
              <>
                <p>{product.title}</p>
                <img src={product.image} alt="" className="max-w-40" />
              </>
            ))}
            {womensClothing?.map((product) => (
              <>
                <p>{product.title}</p>
                <img src={product.image} alt="" className="max-w-40" />
              </>
            ))}
          </div>
        </section>

        <section className="flex flex-col items-center w-full container px-12 mt-24">
          <h2 className="flex justify-center w-full font-medium text-3xl">
            Shop by Categories
          </h2>
          <div className="flex gap-x-40 gap-y-20 flex-wrap justify-center w-full px-20 text-2xl font-medium mt-16 text-gray-500">
            <div className="flex flex-col items-center gap-2 cursor-default transition hover:text-primary">
              <LuShirt size={48} className="" />
              <h3>Men's clothing</h3>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-default transition hover:text-primary">
              <PiDress size={48} className="" />
              <h3>Women's clothing</h3>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-default transition hover:text-primary">
              <LuMonitor size={48} className="" />
              <h3>Eletronics</h3>
            </div>
            <div className="flex flex-col items-center gap-2 cursor-default transition hover:text-primary">
              <GiDiamondRing size={48} className="" />
              <h3>Jewelry</h3>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
