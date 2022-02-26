//IMPORT
import { createSlice } from "@reduxjs/toolkit";
//EXPORT REDUX SLICE
export const ProductSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    pending: false,
    error: false,
  },
  reducers: {
    getProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    getProductSuccess: (state, action) => {
      state.pending = false;
      state.products = action.payload;
    },
    getProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    deleteProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    deleteProductSuccess: (state, action) => {
      state.pending = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    updateProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    updateProductSuccess: (state, action) => {
      state.pending = false;
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    updateProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
    addProductStart: (state) => {
      state.pending = true;
      state.error = false;
    },
    addProductSuccess: (state, action) => {
      state.pending = false;
      state.products.push(action.payload);
    },
    addProductFailure: (state) => {
      state.pending = false;
      state.error = true;
    },
  },
});
//EXPORTS
export const {
  getProductStart,
  getProductSuccess,
  getProductFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} = ProductSlice.actions;
export default ProductSlice.reducer;
