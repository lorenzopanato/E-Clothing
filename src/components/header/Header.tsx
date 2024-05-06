import { LuHeart, LuShoppingCart } from "react-icons/lu";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center p-5 sm:p-7">
      <nav className="container w-full flex justify-between items-center gap-6 lg:px-6">
        <Link to={"/"} className="font-bold text-2xl italic text-primary">
          E Clothing
        </Link>

        <div className="flex gap-3 items-center">
          <div className="hidden sm:flex w-64 hover:text-primary">
            <SearchBar />
          </div>
          <div className="p-3 rounded-full transition-colors cursor-pointer hover:text-primary hover:bg-secondary">
            <LuHeart size={24} />
          </div>
          <div className="p-3 rounded-full transition-colors cursor-pointer hover:text-primary hover:bg-secondary">
            <LuShoppingCart id="cartIcon" size={24} />
          </div>
        </div>
      </nav>
      <div className="flex sm:hidden w-full py-4 justify-center">
        <SearchBar />
      </div>
    </header>
  );
};

export default Header;
