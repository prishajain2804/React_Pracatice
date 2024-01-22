import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [
    { title:'Test',
    price:6,
    description:'This is a first product - amazing!'},
    { title:'Soap',
    price:10,
    description:'This is a second product - amazing!'},
    { title:'ToothBrush',
    price:50,
    description:'This is a third product - amazing!'},
    { title:'HairOil',
    price:70,
    description:'This is a fourth product - amazing!'},
   
  ],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    add(state, action) {
      state.products = [...state.products, action.payload];
    },
  },
});

export const productSliceActions = productSlice.actions;

export default productSlice.reducer;
