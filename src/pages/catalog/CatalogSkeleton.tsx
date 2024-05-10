import { useEffect, useState } from "react";
import FilterMenu from "../../components/filterMenu/FilterMenu";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import SubHeader from "../../components/subHeader/SubHeader";
import { useGetAllProductsQuery } from "../../services/products";
import { LuChevronDown, LuSlidersHorizontal } from "react-icons/lu";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts, sortProducts } from "../../slices/productsSlice";
import { RootState } from "../../store/store";
import { Box, Card, Drawer, Skeleton } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Catalog() {
  const { data: products } = useGetAllProductsQuery();
  const filteredProducts = useSelector(
    (state: RootState) => state.products.products
  );
  const [isFilterOpen, setIsFilterOpen] = useState(true);
  const dispatch = useDispatch();
  const [openFilterDrawer, setOpenFilterDrawer] = useState(false);

  useEffect(() => {
    if (products) dispatch(loadProducts(products));
  }, [products]);

  const sort = (data: string) => {
    dispatch(sortProducts(data));
  };

  const toggleFilterDrawer = () => {
    setOpenFilterDrawer(!openFilterDrawer);
  };

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const DrawerFilter = (
    <Box className="p-6 w-80" role="presentation">
      <FilterMenu />
    </Box>
  );

  return (
    <>
      <SubHeader />
      <Header />

      <main className="flex flex-col items-center px-4 sm:px-11 mt-5 md:mt-16 mb-36 overflow-x-hidden">
        <div className="max-w-screen-2xl w-full flex gap-16">
          <section
            className={`min-w-64 max-w-80 w-full hidden ${
              isFilterOpen ? "lg:block" : "lg:hidden"
            }`}
          >
            <FilterMenu />
          </section>

          <section className="w-full">
            <div className="flex justify-between w-full items-center mb-8">
              <p className="font-medium text-sm">
                Showing 1 - {filteredProducts.length} of{" "}
                {filteredProducts.length} results
              </p>

              <div className="flex gap-5 items-center sm:mr-10">
                <LuSlidersHorizontal
                  size={21}
                  className="block cursor-pointer transition-colors text-primary hover:text-tertiary"
                  title="Filter"
                  onClick={() => {
                    if (window.innerWidth < 1024) {
                      toggleFilterDrawer();
                    } else {
                      toggleFilter();
                    }
                  }}
                />
                <div className="hidden sm:flex items-center gap-3 text-base relative">
                  <select
                    id="sort"
                    className="w-40 md:w-52 border border-gray-400 p-1 px-2.5 text-sm cursor-pointer appearance-none focus-within:outline-none focus-visible:border-primary"
                    onChange={(event) => sort(event.target.value)}
                  >
                    <option value="none">More popular</option>
                    <option value="biggest">Biggest price</option>
                    <option value="lowest">Lowest price</option>
                  </select>

                  <LuChevronDown size={20} className="absolute right-3" />
                </div>
              </div>
            </div>

            <div
              className={`flex justify-center ${
                isFilterOpen && "lg:justify-start"
              } gap-1 sm:gap-6 flex-1 flex-wrap`}
            >
              {[...Array(20)].map((_, index) => (
                <Card
                  key={index}
                  className="rounded flex-1 min-w-44 sm:min-w-60 lg:flex-1 lg:max-w-64group pt-2 pb-4 flex flex-col transition-shadow relative hover:shadow-md"
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
              ))}
            </div>
            <div>
              <Drawer open={openFilterDrawer} onClose={toggleFilterDrawer}>
                {DrawerFilter}
              </Drawer>
            </div>
          </section>
        </div>
      </main>
      <Footer />
      <ToastContainer
        autoClose={1500}
        position="bottom-center"
        className="sm:w-[450px]"
        theme="colored"
      />
    </>
  );
}
