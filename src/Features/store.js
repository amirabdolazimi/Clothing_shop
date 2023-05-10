import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";
import productReducer from "./Products/ProductSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
    cart: cartReducer,
  },
});
