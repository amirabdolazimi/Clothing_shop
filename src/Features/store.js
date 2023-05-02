import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./Products/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
