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
      const isAlready = state.cartItems.find((item) => {
        return item._id === action.payload._id;
      });
      if (!isAlready) {
        const newItem = {
          ...action.payload,
          quantity: 1,
        };
        state.cartItems.push(newItem);
        toast.success("Added to cart");
      } else {
        toast.error("Already exist!");
      }
    },

    deleteCartItems: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload._id
      );
      toast.success("Item deleted from Cart🥰");
    },

    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity < 5) {
        item.quantity += 1;
      } else {
        toast.error("Maximum quantity is 5");
      }
    },

    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        toast.error("Minimum quantity is 1");
      }
    },
  },
});

export const {
  addToCart,
  deleteCartItems,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;

// 🔢 Selector to get total cart price
export const selectTotalPrice = (state) => {
  return state.Cart.cartItems.reduce((total, item) => {
    const price = item.productPrice;
    console.log(total + price * item.quantity);
    return total + price * item.quantity;
  }, 0);
};
