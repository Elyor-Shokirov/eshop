import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import { IoIosWarning } from "react-icons/io";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    likedArray: [],
    shopCard: [],
    totalAmmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addProducts: (state, { payload }) => {
      const exist = state.shopCard.find((item) => item.id == payload.id);
      if (exist) {
        toast("Bu maxsulot qo'shilgan", {
          icon: IoIosWarning({ className: "text-yellow-500" }),
        });
      } else {
        state.shopCard = [...state.shopCard, payload];
        productSlice.caseReducers.calculateTotal(state);
        toast.success("Maxsulot qo'shildi", {
          style: {
            border: "1px solid #4caf50",
            padding: "16px",
            background: "#4caf50",
            color: "#fff",
            fontFamily: "Montserrat",
            fontWeight: 300,
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#4caf50",
          },
        });
      }
    },
    incrementAmount: (state, { payload }) => {
      const item = state.shopCard.find((product) => product.id == payload.id);
      item.amount += 1;
      productSlice.caseReducers.calculateTotal(state);
    },
    decrementAmount: (state, { payload }) => {
      const item = state.shopCard.find((product) => product.id == payload.id);
      item.amount -= 1;
      productSlice.caseReducers.calculateTotal(state);
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
      productSlice.caseReducers.calculateTotal(state);
    },
    changeAnyValue: (state, { payload }) => {
      state.products = payload;
      localStorage.setItem("products", JSON.stringify(state.products));
    },
    calculateTotal: (state) => {
      let allProductCounter = 0;
      let allProductPrice = 0;
      state.shopCard.forEach((product) => {
        allProductPrice += product.amount * product.price;
        allProductCounter += product.amount;
      });
      state.totalAmmount = allProductCounter;
      state.totalPrice = allProductPrice;
      localStorage.setItem("products", JSON.stringify(state));
    },
  },
});

export const {
  addProducts,
  changeAnyValue,
  likedProducts,
  unLikeProducts,
  deleteProducts,
  incrementAmount,
  decrementAmount,
} = productSlice.actions;

export default productSlice.reducer;
