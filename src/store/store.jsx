import { configureStore } from "@reduxjs/toolkit";
import { popSliceReducer } from "./popupSlice";
export const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
  reducer: {
    popup: popSliceReducer,
  },
});
