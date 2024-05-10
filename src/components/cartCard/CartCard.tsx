import { IProductCart } from "../../utils/types/Product";
import { LuMinus, LuPlus, LuX } from "react-icons/lu";
import {
  decreaseItemQuantity,
  increaseItemQuantity,
  removeFromCart,
} from "../../slices/cartSlice";
import { useDispatch } from "react-redux";

export default function ProductCard({ product }: { product: IProductCart }) {
  const dispatch = useDispatch();

  const removeItemFromCart = () => {
    dispatch(removeFromCart(product));
  };

  const increaseQuantity = () => {
    dispatch(increaseItemQuantity(product));
  };

  const decreaseQuantity = () => {
    dispatch(decreaseItemQuantity(product));
  };

  return (
    <div className="flex gap-4 items-center h-[75px]">
      <img
        src={product.image}
        className="max-w-16 max-h-[100px]"
        alt={`${product.title} image`}
      />
      <div className="flex flex-col flex-1 justify-between h-full bg">
        <div className="flex justify-between gap-2 items-start">
          <h2 className="font-medium text-sm">{product.title.slice(0, 60)}</h2>
          <button className="cursor-pointer">
            <LuX size={18} onClick={removeItemFromCart} />
          </button>
        </div>

        <div className="flex flex-1 items-end gap-3">
          <div className="flex border max-w-[70px] w-full h-7 justify-between items-center">
            <button
              onClick={decreaseQuantity}
              className="flex items-center justify-center p-1"
            >
              <LuMinus />
            </button>
            <span className="text-sm">{product.quantity}</span>
            <button
              onClick={increaseQuantity}
              className="flex items-center justify-center p-1"
            >
              <LuPlus />
            </button>
          </div>

          <div className="flex gap-2 text-sm items-center h-7">
            <p className="font-medium">
              ${" "}
              {(
                (product.price - product.price * 0.2) *
                product.quantity
              ).toFixed(2)}
            </p>
            <p className="text-gray-500 line-through">
              $ {(product.price * product.quantity).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
