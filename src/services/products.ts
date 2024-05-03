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
    getElectronics: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products/category/electronics?limit=4",
        method: "GET",
      }),
    }),
    getJewelery: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products/category/jewelery?limit=4",
        method: "GET",
      }),
    }),
    getProductById: builder.query<IProduct, number>({
      query: (id: number) => ({
        url: `/products/${id}`,
        method: "GET",
      }),
    }),
    getProductsByCategory: builder.query<IProduct[], string | undefined>({
      query: (category: string) => ({
        url: `/products/category/${category}`,
        method: "GET",
      }),
    }),
    getAllProducts: builder.query<IProduct[], void>({
      query: () => ({
        url: "/products",
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetMensClothingQuery,
  useGetWomensClothingQuery,
  useGetElectronicsQuery,
  useGetJeweleryQuery,
  useGetProductByIdQuery,
  useGetProductsByCategoryQuery,
  useGetAllProductsQuery,
} = productsApi;
