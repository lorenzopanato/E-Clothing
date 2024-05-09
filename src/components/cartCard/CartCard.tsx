import { useState } from "react";
import { IProduct } from "../../utils/types/Product";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import { removeFromCart } from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }: { product: IProduct }) {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };

  return (
    <div className="flex gap-4 items-center">
      <img
        src={product.image}
        className="max-w-16 h-full max-h-[100px]"
        alt={`${product.title} image`}
      />
      <div className="flex flex-col flex-1 gap-5">
        <div className="flex justify-between gap-2 items-start">
          <h2 className="font-medium text-sm">{product.title.slice(0, 60)}</h2>
          <button className="cursor-pointer">
            <LuX size={18} onClick={removeItemFromCart} />
          </button>
        </div>

        <div className="flex flex-1 items-end gap-3">
          <div className="flex border max-w-[70px] w-full h-7 justify-between items-center">
            <button onClick={() => quantity > 1 && setQuantity(quantity - 1)} className="flex items-center justify-center p-1">
              <LuMinus />
            </button>
            <span className="text-sm">{quantity}</span>
            <button onClick={() => setQuantity(quantity + 1)} className="flex items-center justify-center p-1">
              <LuPlus />
            </button>
          </div>

          <div className="flex gap-2 text-sm items-center h-7">
            <p className="font-medium">
              $ {(product.price - product.price * 0.2).toFixed(2)}
            </p>
            <p className="text-gray-500 line-through">
              $ {product.price.toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
