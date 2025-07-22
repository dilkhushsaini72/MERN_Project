import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const isAlready = state.cartItems.some((item) => {
        return item._id === action.payload._id;
      });

      if (!isAlready) {
        state.cartItems.push(action.payload);
        toast.success("Added to cart");
      } else {
        toast.error("Already exist!");
        return;
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
