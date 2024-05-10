import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProductCart } from "../utils/types/Product";
import { toast } from "react-toastify";

interface CartState {
  products: IProductCart[];
  discountedSubtotal: number;
  subtotal: number;
}

const calculateDiscountedSubtotal = (products: IProductCart[]) => {
  return products.reduce((sum, product) => {
    return sum + (product.price - product.price * 0.2) * (product.quantity || 1);
  }, 0);
};

const calculateSubtotal = (products: IProductCart[]) => {
  return products.reduce((sum, product) => {
    return sum + product.price * (product.quantity || 1);
  }, 0);
};

const initialState: CartState = {
  products: JSON.parse(localStorage.getItem("cart") || "[]"),
  discountedSubtotal: 0,
  subtotal: 0,
};

initialState.discountedSubtotal = calculateDiscountedSubtotal(initialState.products);
initialState.subtotal = calculateSubtotal(initialState.products);

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IProductCart>) => {
      const newProduct = action.payload;

      if (state.products.find((product) => product.id === newProduct.id)) {
        toast.info(`${newProduct.title} is already in your cart.`);
      } else {
        state.products.push({ ...newProduct, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.products));
        state.discountedSubtotal += newProduct.price - newProduct.price * 0.2;
        state.subtotal += newProduct.price;
        toast.success(`${newProduct.title} added to cart!`);
      }
    },
    removeFromCart: (state, action: PayloadAction<IProductCart>) => {
      const productToRemove = action.payload;
      const index = state.products.findIndex(
        (product) => product.id === productToRemove.id
      );
      if (index !== -1) {
        const removedProduct = state.products[index];
        state.products.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(state.products));
        state.discountedSubtotal -= (removedProduct.price - removedProduct.price * 0.2) * (removedProduct.quantity || 1);
        state.subtotal -= removedProduct.price * (removedProduct.quantity || 1);
        toast.info(`${action.payload.title} removed from cart.`);
      }
    },
    increaseItemQuantity: (state, action: PayloadAction<IProductCart>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      if (product) {
        product.quantity = product.quantity + 1;
        state.discountedSubtotal = calculateDiscountedSubtotal(state.products);
        state.subtotal = calculateSubtotal(state.products);
      }
    },
    decreaseItemQuantity: (state, action: PayloadAction<IProductCart>) => {
      const product = state.products.find((p) => p.id === action.payload.id);
      
      if (product && product?.quantity > 1) {
        product.quantity -= 1;
        state.discountedSubtotal = calculateDiscountedSubtotal(state.products);
        state.subtotal = calculateSubtotal(state.products);
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseItemQuantity, decreaseItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
