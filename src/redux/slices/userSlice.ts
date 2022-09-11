import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import { randomBytes } from "crypto";
export interface SingleShopFace {
  productId:number,
  productName: string;
  productAmount: number;
  productPrice: number;
  productTotallPrice: number;
}
interface UserFace {
  username: string;
  password: string;
  avatar: string;
  shop: Array<SingleShopFace>;
}
const initialState: UserFace = {
  username: "admin1",
  password: "admin1Password",
  avatar: "admin1",
  shop: [
    {
      productId:1,
      productName: "Full Limited Edition Sneakers",
      productAmount: 2,
      productPrice: 125,
      productTotallPrice: 250,
    },
  ],
};
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<SingleShopFace>) {

    },
  },
});
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
