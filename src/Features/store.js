import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Cart/CartSlice";
import productReducer from "./Products/ProductSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
// configure redux-persist to dont lose Shopping-Cart products after Browser refresh
const persistConfig = {
  key: "root",
  storage,
};
const rootReducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
