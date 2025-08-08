import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";

const initialState = {
  cartItems: [],
};

export const syncCartWithBackend = createAsyncThunk(
  "Cart/syncCartWithBackend",
  async (cartItems, { rejectWithValue }) => {
    try {
      console.log();
      const response = await fetch("/api/cart-items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cartItems), // cartItems should include quantity
      });

      return await response.json();
    } catch (error) {
      console.error("Failed to fetch cart items:", error);
    }
  }
);

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        toast.success("Added to cart");
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

    setCartItems: (state, action) => {
      state.cartItems = action.payload;
    },
  },
});

export const {
  addToCart,
  deleteCartItems,
  incrementQuantity,
  decrementQuantity,
  setCartItems,
} = cartSlice.actions;

export default cartSlice.reducer;

// 🔢 Selector to get total cart price
export const selectTotalPrice = (state) => {
  return state.Cart.cartItems.reduce((total, item) => {
    // Handles undefined/null/empty string and non-numeric values
    const price = Number(item.productPrice);
    const quantity = Number(item.quantity) || 1;
    if (isNaN(price)) return total; // skip if price is not a number
    return total + price * quantity;
  }, 0);
};
