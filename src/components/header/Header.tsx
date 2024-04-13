import { Box, Drawer } from "@mui/material";
import { useState } from "react";
import { LuHeart, LuMenu, LuShoppingCart, LuX } from "react-icons/lu";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: "center", color: "var(--secondary)" }}
    >
      <div className="px-10 pt-6 pb-12 flex items-center justify-between">
        <Link to={"/"} className="font-semibold text-2xl italic hover:text-white">
          E Clothing
        </Link>
        <LuX size={30} className="cursor-pointer hover:text-white" />
      </div>
      <ul className="flex flex-col gap-6 items-start pl-10 text-xl">
        <li className="font-medium cursor-pointer hover:text-white">
          <Link to={"/"}>Home</Link>
        </li>
        <li className="cursor-pointer hover:text-white">
          <Link to={"/"}>Best Sellers</Link>
        </li>
        <li className="cursor-pointer hover:text-white">
          <Link to={"/"}>Categories</Link>
        </li>
        <li className="cursor-pointer hover:text-white">
          <Link to={"/"}>Products</Link>
        </li>
      </ul>
    </Box>
  );

  const container =
    window !== undefined ? () => window.document.body : undefined;

  return (
    <header className="w-full flex flex-col items-center p-7 text-primary">
      <nav className="container w-full flex justify-between items-center gap-6">
        <Link to={"/"} className="font-semibold text-2xl italic">
          E Clothing
        </Link>

        <ul className="hidden gap-10 items-center lg:flex">
          <li className="font-medium cursor-pointer hover:text-primary">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="text-tertiary cursor-pointer hover:text-primary">
            <Link to={"/"}>Best Sellers</Link>
          </li>
          <li className="text-tertiary cursor-pointer hover:text-primary">
            <Link to={"/"}>Categories</Link>
          </li>
          <li className="text-tertiary cursor-pointer hover:text-primary">
            <Link to={"/"}>Products</Link>
          </li>
        </ul>

        <div className="flex gap-3 items-center">
          <div className="hidden md:flex w-64">
            <SearchBar />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <LuHeart size={24} />
          </div>
          <div className="p-3 rounded-full hover:bg-gray-100 transition-colors cursor-pointer">
            <LuShoppingCart id="cartIcon" size={24} />
          </div>

          <div
            onClick={handleDrawerToggle}
            className="block lg:hidden p-3 rounded-full cursor-pointer hover:bg-gray-100 transition-colors"
          >
            <LuMenu size={26} />
          </div>
        </div>
      </nav>
      <div className="flex md:hidden w-full py-4 justify-center">
        <SearchBar />
      </div>

      <div>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          anchor="right"
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", xl: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: "100%",
              maxWidth: 400,
              backgroundColor: "var(--primary)",
            },
          }}
        >
          {drawer}
        </Drawer>
      </div>
    </header>
  );
};

export default Header;
