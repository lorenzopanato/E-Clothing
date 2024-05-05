import { LuShoppingCart, LuStar } from "react-icons/lu";
import { IProduct } from "../../utils/types/Product";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { BsEyeFill } from "react-icons/bs";

export default function ProductCard({ product }: { product: IProduct }) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div
      onClick={() => navigate(`/product/${product.id}`)}
      className={`rounded ${
        location.pathname === "/" ? "flex-1 min-w-44 sm:min-w-56 lg:min-w-56 lg:flex-1 lg:max-w-64" : "w-64"
      } group px-4 pt-2 pb-4 flex flex-col cursor-pointer transition-shadow relative hover:shadow-md`}
    >
      <div
        className={`h-40 sm:h-64 flex items-center justify-center overflow-hidden`}
      >
        <img
          src={product.image}
          alt={`imagem do produto ${product.title}`}
          className="w-7/12 sm:w-9/12 group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="absolute top-6 -right-5 group-hover:right-5 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button
          className="flex justify-center items-center text-white w-12 h-12 bg-sky-950 hover:bg-primary transition-colors shadow-xl"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <LuShoppingCart color="white" size={22} />
        </button>
        <Link
          to={`/product/${product.id}`}
          className="w-12 h-12 bg-secondary hover:bg-slate-100 flex justify-center items-center text-primary shadow-xl"
        >
          <BsEyeFill size={18} />
        </Link>
      </div>
      <article className="flex flex-col mt-1 flex-1">
        <strong className="font-semibold text-sm sm:text-base mt-2">
          {product.title.substring(0, 19)}
          {product.title.length >= 20 && "..."}
        </strong>
        <p className="text-sm sm:text-base mt-1 sm:mt-2 text-justify">
          {product.description.substring(0, 68)}...
        </p>

        <div className="flex justify-between max-h-14 items-end">
          <div className="flex flex-col-reverse items-start sm:flex-row sm:items-end mt-6 sm:gap-3">
            <p className="font-medium text-base sm:text-lg">
              $ {(product.price - product.price * 0.2).toFixed(2)}
            </p>

            <p className="text-gray-500 line-through text-sm sm:text-base">
              $ {product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-2 text-sm sm:text-base">
            <LuStar size={20} />
            {product.rating.rate.toFixed(1)}
          </div>
        </div>
      </article>
    </div>
  );
}
