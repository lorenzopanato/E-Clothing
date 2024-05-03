import FilterMenu from "../../components/filterMenu/FilterMenu";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ProductCard from "../../components/productCard/ProductCard";
import SubHeader from "../../components/subHeader/SubHeader";
import { useGetAllProductsQuery } from "../../services/products";
import { LuChevronDown } from "react-icons/lu";

export default function Products() {
  const { data: products } = useGetAllProductsQuery();

  return (
    <>
      <SubHeader />
      <Header />

      <main className="flex flex-col items-center px-11 mt-20 mb-36">
        <div className="max-w-screen-2xl w-full flex gap-16">
          <FilterMenu />

          <section>
            <div className="flex justify-between w-full items-start">
              <p className="mb-8 font-medium mt-1">
                Showing 1 - 10 of 20 results
              </p>

              <div className="flex items-center gap-3 text-base relative">
                <label htmlFor="sort">Sort by:</label>
                <select
                  id="sort"
                  className="w-32 md:w-52 border border-gray-400 p-1 px-3 cursor-pointer appearance-none focus-within:outline-none focus-visible:border-primary"
                >
                  <option value="none">None</option>
                  <option value="biggest">Biggest price</option>
                  <option value="lowest">Lowest price</option>
                </select>

                <LuChevronDown size={20} className="absolute right-3" />
              </div>
            </div>

            <div className="flex gap-8 flex-1 flex-wrap">
              {products?.map((product, index) => (
                <ProductCard product={product} key={index} />
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
