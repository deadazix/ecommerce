import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface UiInterface {
  productStatus: "success" | "pending" | "error";
  isShopListOpen:boolean
}
const initialState: UiInterface = {
  productStatus: "success",
  isShopListOpen:false
};
const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    changeProductStatus(
      state,
      action: PayloadAction<"success" | "pending" | "error">
    ) {
      state.productStatus = action.payload;
    },
    ChangeShopListState(state,action:PayloadAction<boolean>){
      state.isShopListOpen = action.payload
    }
  },
});
export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer