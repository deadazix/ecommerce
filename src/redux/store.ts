import { configureStore } from "@reduxjs/toolkit";
import { productReducer } from "./slices/productSlice";
import { uiReducer } from "./slices/uiSlice";

export const store = configureStore({
  reducer: {
    product: productReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
