import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductInterface {
  images: string[];
  companyName: string;
  name: string;
  description: string;
  price: number;
  discount: number;
}
const initialState: ProductInterface = {
  name: "full Limited Edition sneakers",
  description:
    "this is one of best shoes that exists its and this is just a dummy text",
  companyName: "SNEAKER COMPAN",
  images: "image1,image2,image3,image4".split(","),
  price: Number((125).toFixed(2)),
  discount: 5 / 10,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
  },
});
export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
