import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  CartVisible: false,
};

const CartuiSlice = createSlice({
  name: "cartui",
  initialState,
  reducers: {
    toggle: (state, action) => {
      state.CartVisible = !state.CartVisible;
    },
  },
});

export default CartuiSlice.reducer;
export const { toggle } = CartuiSlice.actions;
