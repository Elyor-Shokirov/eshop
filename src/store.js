import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./feauturs/CounterSlice";
import productReducer from "./feauturs/productSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
