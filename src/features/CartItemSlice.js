import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  Cartitem: [],
};

const CartItemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    totalItem: (state, action) => {
      const index = state.Cartitem.findIndex(
        (product) => product.title === action.payload.title
      );
      if (index >= 0) {
        state.Cartitem[index].quantity += 1;
      } else {
        state.Cartitem = state.Cartitem.concat(action.payload);
      }
    },

    increaseQuantity: (state, action) => {
      const index = state.Cartitem.findIndex(
        (product) => product.title === action.payload
      );
      state.Cartitem[index].quantity += 1;
    },
    decreaseQuantity: (state, action) => {
      const index = state.Cartitem.findIndex(
        (product) => product.title === action.payload
      );

      if (state.Cartitem[index].quantity === 1) {
        state.Cartitem = state.Cartitem.filter(
          (product) => product.title !== action.payload
        );
      } else {
        state.state.Cartitem[index].quantity =
          state.Cartitem[index].quantity - 1;
      }
    },
  },
});

export default CartItemSlice.reducer;
export const { totalItem, increaseQuantity, decreaseQuantity } =
  CartItemSlice.actions;
