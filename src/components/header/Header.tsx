import { LuArrowRight, LuHeart, LuShoppingCart } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartCard from "../cartCard/CartCard";
import EmptyCart from "../../assets/empty-cart.png";

const Header = () => {
  const [openCartDrawer, setOpenCartDrawer] = useState(false);
  const cartItems = useSelector((state: RootState) => state.cart.products);
  const subtotal = useSelector((state: RootState) => state.cart.subtotal);
  const navigate = useNavigate();

  const returnToShop = () => {
    setOpenCartDrawer(false);
    navigate("/");
  };

  const DrawerCart = (
    <Box className="p-6 w-full sm:w-[480px] h-full" role="presentation">
      <section className="flex justify-between items-center">
        <strong className="text-xl font-semibold">Shopping Cart</strong>
        <LuArrowRight
          onClick={() => setOpenCartDrawer(false)}
          size={24}
          className="cursor-pointer"
        />
      </section>
      <hr className="mt-4 mb-6" />
      <section className="flex flex-col gap-6">
        {cartItems.length !== 0 ? (
          <div>
            {cartItems.map((item, index) => (
              <div key={index}>
                <CartCard product={item} />
                <hr className="my-6" />
              </div>
            ))}

            <div className="flex flex-col items-end gap-4 mt-10">
              <div className="flex gap-2 font-semibold w-full">
                <span>Subtotal:</span>
                <span>$ {subtotal.toFixed(2)}</span>
              </div>
              <button className="w-full mb-6 p-3 font-medium text-white bg-primary transition-opacity hover:opacity-90">
                Finalize Purchase
              </button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center mt-16 text-center">
            <img src={EmptyCart} alt="empty cart image" />
            <strong className="font-medium text-lg sm:text-xl mt-3">
              Your cart is empty
            </strong>
            <p className="mt-1 text-sm sm:text-base text-gray-600">
              Looks like you haven't made your choice yet...
            </p>
            <button
              onClick={returnToShop}
              className="w-full p-3 font-medium text-white bg-primary mt-8 transition-opacity hover:opacity-90"
            >
              Shop Now
            </button>
          </div>
        )}
      </section>
    </Box>
  );

  const toggleCartDrawer = () => {
    setOpenCartDrawer(!openCartDrawer);
  };

  return (
    <header className="w-full flex flex-col items-center p-5 sm:p-7">
      <nav className="container w-full flex justify-between items-center gap-6 lg:px-6">
        <Link
          to={"/"}
          className="font-bold text-xl sm:text-2xl italic text-primary"
        >
          E Clothing
        </Link>

        <div className="flex items-center gap-5">
          <div className="hidden sm:flex w-64 hover:text-primary">
            <SearchBar />
          </div>

          <LuHeart className="cursor-pointer hover:text-primary" size={24} />

          <div className="relative">
            <LuShoppingCart
              onClick={toggleCartDrawer}
              className="cursor-pointer hover:text-primary"
              id="cartIcon"
              size={24}
            />
            <span className="rounded-full bg-primary text-white absolute -top-2.5 -right-2.5 text-xs flex items-center justify-center h-5 w-5 font-semibold">
              {cartItems.length}
            </span>
          </div>
        </div>
      </nav>
      <div className="flex sm:hidden w-full py-4 justify-center">
        <SearchBar />
      </div>
      <Drawer anchor="right" open={openCartDrawer} onClose={toggleCartDrawer}>
        {DrawerCart}
      </Drawer>
    </header>
  );
};

export default Header;
