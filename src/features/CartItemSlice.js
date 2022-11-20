import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cartitem: [],
};

const CartItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    totalItem: (state, action) => {
      state.Cartitem = state.Cartitem.concat(action.payload);

      console.log(state.Cartitem, action.payload);
    },
  },
});

export default CartItemSlice.reducer;
export const { totalItem } = CartItemSlice.actions;
