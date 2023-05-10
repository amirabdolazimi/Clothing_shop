import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartProducts: [],
  totalItems: 0,
  totalPrice: 0,
};
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      const product = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(
        (p) => p.id === product.id
      );
      if (existingProductIndex === -1) {
        // state.cartProducts[existingProductIndex].quantity++;
        state.cartProducts.push({ ...product, quantity: 1 });
        state.totalItems++;
        state.totalPrice += product.price;
      }
    },
    incrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(
        (p) => p.id === productId
      );
      if (existingProductIndex !== -1) {
        state.cartProducts[existingProductIndex].quantity++;
        state.totalItems++;
        state.totalPrice += state.cartProducts[existingProductIndex].price;
      }
    },
    decrementQuantity: (state, action) => {
      const productId = action.payload;
      const existingProductIndex = state.cartProducts.findIndex(
        (p) => p.id === productId
      );
      if (
        existingProductIndex !== -1 &&
        state.cartProducts[existingProductIndex].quantity > 1
      ) {
        state.cartProducts[existingProductIndex].quantity--;
        state.totalItems--;
        state.totalPrice -= state.cartProducts[existingProductIndex].price;
      }
    },
    removeProductFromCart: (state, action) => {
      const productId = action.payload.id;
      const productQty = action.payload.quantity;
      const existingProductIndex = state.cartProducts.findIndex(
        (p) => p.id === productId
      );
      state.totalPrice -=
        state.cartProducts[existingProductIndex].price * productQty;
      const filteredProduct = state.cartProducts.filter(
        (p) => p.id !== productId
      );
      state.cartProducts = filteredProduct;
      state.totalItems -= productQty;
    },
  },
});

export const {
  addProductToCart,
  incrementQuantity,
  decrementQuantity,
  removeProductFromCart,
} = cartSlice.actions;
export default cartSlice.reducer;
