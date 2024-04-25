import { LuStar } from "react-icons/lu";
import { IProduct } from "../../utils/types/Product";

export default function ProductCard({ product }: { product: IProduct }) {
  return (
    <div className="w-64 xl:w-72 px-6 pt-2 pb-4 flex flex-col cursor-pointer border border-transparent transition-transform hover:scale-105 hover:border-secondary">
      <div className="h-64 xl:h-80 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={`imagem do produto ${product.title}`}
          className="w-10/12"
        />
      </div>
      <article className="flex flex-col gap-2 mt-2 flex-1">
        <strong className="font-semibold xl:text-lg">
          {product.title.substring(0, 19)}
          {product.title.length >= 20 && "..."}
        </strong>
        <p>{product.description.substring(0, 44)}...</p>
        <div className="flex justify-between mt-3">
          <p className="font-medium">$ {product.price.toFixed(2)}</p>
          <div className="flex items-center gap-2">
            <LuStar size={20} />
            {product.rating.rate.toFixed(1)}
          </div>
        </div>
      </article>
    </div>
  );
}
