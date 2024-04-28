import { LuStar } from "react-icons/lu";
import { IProduct } from "../../utils/types/Product";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="w-64 lg:w-72 px-6 pt-2 pb-4 flex flex-col cursor-pointer transition-transform hover:scale-105 hover:shadow">
      <div className="h-64 xl:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={`imagem do produto ${product.title}`}
          className="w-10/12"
        />
      </div>
      <article className="flex flex-col mt-2 flex-1">
        <strong className="font-semibold mt-2">
          {product.title.substring(0, 19)}
          {product.title.length >= 20 && "..."}
        </strong>
        <p className="text-base mt-2">
          {product.description.substring(0, 80)}...
        </p>

        <div className="flex justify-between items-end">
          <div className="flex items-center mt-4 gap-2">
            <p className="font-semibold">
              $ {(product.price - product.price * 0.2).toFixed(2)}
            </p>

            <p className="text-gray-500 line-through text-base">
              $ {product.price.toFixed(2)}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <LuStar size={20} />
            {product.rating.rate.toFixed(1)}
          </div>
        </div>
      </article>
    </div>
  );
}
