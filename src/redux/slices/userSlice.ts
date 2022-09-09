import { PayloadAction } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
interface SingleCartFace {
  productName: string;
  productAmount: number;
  productPrice: number;
  productTotallPrice: number;
}
interface UserFace {
  username: string;
  password: string;
  avatar: string;
  cart: Array<SingleCartFace>;
}
const initialState: UserFace = {
  username: "admin1",
  password: "admin1Password",
  avatar: "admin1",
  cart: [
    {
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
    addToCart(state, action: PayloadAction<SingleCartFace>) {

    },
  },
});
export const userActions = userSlice.actions
export const userReducer = userSlice.reducer
