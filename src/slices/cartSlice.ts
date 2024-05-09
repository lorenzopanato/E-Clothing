import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../utils/types/Product";
import { toast } from "react-toastify";

interface CartState {
  products: IProduct[];
  subtotal: number;
}

const calculateSubtotal = (products: IProduct[]) => {
  return products.reduce((sum, product) => {
    return sum + (product.price - product.price * 0.2);
  }, 0);
};

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem("cart") || "[]"),
  subtotal: 0,
};

initialState.subtotal = calculateSubtotal(initialState.products);

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProduct>) => {
      const newProduct = action.payload;

      if (state.products.find((product) => product.id === newProduct.id)) {
        toast.info(`${newProduct.title} is already in your cart.`);
      } else {
        state.products.push(newProduct);
        localStorage.setItem("cart", JSON.stringify(state.products));
        state.subtotal += newProduct.price - newProduct.price * 0.2;
        toast.success(`${newProduct.title} added to cart!`);
      }
    },
    removeFromCart: (state, action: PayloadAction<IProduct>) => {
      const productToRemove = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === productToRemove.id
      );
      if (index !== -1) {
        state.products.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.products));
        state.subtotal -= productToRemove.price - productToRemove.price * 0.2; // Subtraindo o preço com desconto do subtotal
        toast.info(`${action.payload.title} removed from cart.`);
      }
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;

export default cartSlice.reducer;
