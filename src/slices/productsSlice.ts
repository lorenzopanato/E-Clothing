import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IProduct } from "../utils/types/Product";
import { IFilter } from "../utils/types/Filter";

interface ProductsState {
  products: IProduct[];
  originalProducts: IProduct[];
  search: string;
}

const initialState: ProductsState = {
  products: [],
  originalProducts: [],
  search: "",
};

export const productsSlice = createSlice({
  name: "productsSlice",
  initialState,
  reducers: {
    loadProducts: (state, action: PayloadAction<IProduct[]>) => {
      state.products = action.payload;
      state.originalProducts = action.payload;
    },
    searchProducts: (state, action: PayloadAction<string>) => {
      const search = action.payload;
      state.search = search.toLowerCase();
      state.products = state.originalProducts.filter((product) =>
        product.title.toLowerCase().includes(search)
      );
    },
    sortProducts: (state, action: PayloadAction<string>) => {
      if (action.payload === "biggest") {
        state.products.sort((p1, p2) => p2.price - p1.price);
      } else if (action.payload === "lowest") {
        state.products.sort((p1, p2) => p1.price - p2.price);
      } else {
        state.products = [...state.originalProducts];
      }
    },
    filterProducts: (state, action: PayloadAction<IFilter>) => {
      const { priceRange, categories } = action.payload;

      const filteredByPrice = state.originalProducts.filter(
        (product) =>
          product.price >= priceRange[0] && product.price <= priceRange[1]
      );

      const filteredByCategories = categories.length
        ? filteredByPrice.filter((product) =>
            categories.includes(product.category)
          )
        : filteredByPrice;

      state.products = filteredByCategories;
    },
  },
});

export const { loadProducts, searchProducts, sortProducts, filterProducts } =
  productsSlice.actions;

export default productsSlice.reducer;
