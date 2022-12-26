import { createSlice } from "@reduxjs/toolkit";
import { initialState } from "./state";

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  // reducers are defined below
  reducers: {
    setCount: (state, action) => {
      state.count = action.payload;
    },
    increment: (state) => {
      state.count += 1;
    },
  },
});

export const counterActions = counterSlice.actions;

export default counterSlice;
