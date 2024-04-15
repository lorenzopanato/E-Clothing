import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { fakeStoreApiUrl } from "../utils/api/fakeStoreApi";
import { IProduct } from "../utils/types/Product";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: fakeStoreApiUrl }),
  tagTypes: ["Products", "ProductsResponse"],
  endpoints: (builder) => ({
    getMensClothing: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products/category/men's clothing?limit=4",
        method: "GET",
      }),
    }),
    getWomensClothing: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products/category/women's clothing?limit=4",
        method: "GET",
      }),
    }),
  }),
});

export const { useGetMensClothingQuery, useGetWomensClothingQuery } = productsApi;
