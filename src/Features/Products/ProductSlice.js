import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAsyncProducts = createAsyncThunk(
  "getAsyncProducts",
  async (_, { rejectWithValue }) => {
    try {
      const products = await axios.get("https://fakestoreapi.com/products");
      return products.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const initialState = {
  loading: false,
  products: [],
  error: null,
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAsyncProducts.pending, (state, action) => {
      return { ...state, loading: true, products: [], error: null };
    });
    builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
      return {
        ...state,
        loading: false,
        error: null,
        products: action.payload,
      };
    });
    builder.addCase(getAsyncProducts.rejected, (state, action) => {
      return { ...state, loading: false, error: action.error, products: null };
    });
  },
});

// export const {} = productSlice.actions;
export default productSlice.reducer;
