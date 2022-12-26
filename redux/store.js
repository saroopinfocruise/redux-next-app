import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../store/slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});
// this is the root store
