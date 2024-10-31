import { createSlice } from "@reduxjs/toolkit";

const loadProducts = () => {
  try {
    const products = localStorage.getItem("products");
    return products ? JSON.parse(products) : [];
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: loadProducts(),
    totalPrice: 0,
    totalAmmount: 0,
  },
  reducers: {
    addProducts: (state, { payload }) => {},
    deleteProducts: (state, { payload }) => {},
    changeAnyValue: (state, { payload }) => {
      state.products = payload;

      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const { addProducts, changeAnyValue } = productSlice.actions;

export default productSlice.reducer;
