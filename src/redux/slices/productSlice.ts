import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface ProductInterface {
  images: string[];
  companyName: string;
  header: string;
  description: string;
  price: number;
  discount: number;
}
const initialState: ProductInterface = {
  header: "full Limited Edition sneakers",
  description:
    "this is one ofof best shoes that exists its and this is just a dummy textof best shoes that exists its and this is just a dummy text best shoes that exists its and this is just a dummy text",
  companyName: "SNEAKER COMPAN",
  images: "image1,image2,image3,image4".split(","),
  price: 250,
  discount: 50,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    changeName(state, action: PayloadAction<string>) {
      state.header = action.payload;
    },
  },
});
export const productActions = productSlice.actions;
export const productReducer = productSlice.reducer;
