import { configureStore } from "@reduxjs/toolkit";
import GroupSlice from "./GroupSlice";

export const store = configureStore({
  reducer: {
    groups: GroupSlice,
  },
});
