import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    { title: "Test Item", quantity: 3, total: 18, price: 6 },
    { title: "Soap", quantity: 10, total: 200, price: 20 },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    add(state, action) {
      state.items = [...state.items, action.payload];
    },
  },
});

export const cartSliceActions = cartSlice.actions;

export default cartSlice.reducer;
