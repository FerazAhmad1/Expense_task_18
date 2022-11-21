import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  Cartitem: [],
  notification: null,
};

export const putCartonFirebase = createAsyncThunk("put/putCart", (data) => {
  console.log(data);
  return axios
    .put(
      "https://expense-task-18-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
      data
    )
    .then((response) => response.data);
});
export const getCartfromFirebase = createAsyncThunk("get/getCart", () => {
  return axios
    .get(
      "https://expense-task-18-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
    )
    .then((response) => response.data);
});
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

    notificationHandler: (state, action) => {
      state.notification = action.payload;
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

  extraReducers: (builder) => {
    builder.addCase(putCartonFirebase.pending, (state, action) => {
      state.notification = {
        status: "sending",
        message: "pending",
        title: "requested",
      };
    });
    builder.addCase(putCartonFirebase.fulfilled, (state, action) => {
      state.notification = {
        status: "fullfilled",
        message: "success",
        title: "got the cart",
      };
    });
    builder.addCase(putCartonFirebase.rejected, (state, action) => {
      state.notification = {
        status: "errror",
        message: "failed",
        title: "url is not correct",
      };
    });

    builder.addCase(getCartfromFirebase.fulfilled, (state, action) => {
      state.Cartitem = action.payload;
    });
  },
});

export default CartItemSlice.reducer;
export const {
  totalItem,
  increaseQuantity,
  decreaseQuantity,
  notificationHandler,
} = CartItemSlice.actions;
