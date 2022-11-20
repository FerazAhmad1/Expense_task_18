import { configureStore } from "@reduxjs/toolkit";
import CartuiReducer from "../features/CartuiSlice";
import CartItemReducer from "../features/CartItemSlice";

const store = configureStore({
  reducer: {
    cartui: CartuiReducer,
    item: CartItemReducer,
  },
});

export default store;
