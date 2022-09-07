import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
export interface UiInterface {
  productStatus: "success" | "pending" | "error";
}
const initialState: UiInterface = {
  productStatus: "success",
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
  },
});
export const uiActions = uiSlice.actions
export const uiReducer = uiSlice.reducer