import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../features/CartSlice.js";

const store = configureStore({
  reducer: {
    Cart: cartSlice,
  },
});

export default store;
