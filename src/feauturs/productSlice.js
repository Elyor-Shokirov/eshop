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

// Liked products'larni yuklash funksiyasi
const loadLikedProducts = () => {
  try {
    const products = localStorage.getItem("likedProducts");
    return products ? JSON.parse(products) : []; // `likedProducts` o'rniga `products` chaqiriladi
  } catch (error) {
    console.log(error.message);
    return [];
  }
};

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    likedArray: [],
    shopCard: [],
    totalPrice: 0,
    totalAmmount: 0,
  },
  reducers: {
    addProducts: (state, { payload }) => {
      state.shopCard = [...state.shopCard, payload];
    },
    likedProducts: (state, { payload }) => {
      state.likedArray = [...state.likedArray, payload];
    },
    unLikeProducts: (state, { payload }) => {
      state.likedArray = state.likedArray.filter(
        (product) => product.id !== payload
      );
    },
    deleteProducts: (state, { payload }) => {
      state.shopCard = state.shopCard.filter((delPro) => delPro.id !== payload);
    },
    changeAnyValue: (state, { payload }) => {
      state.products = payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
  },
});

export const {
  addProducts,
  changeAnyValue,
  likedProducts,
  unLikeProducts,
  deleteProducts,
} = productSlice.actions;

export default productSlice.reducer;
