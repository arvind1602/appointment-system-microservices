import { configureStore } from "@reduxjs/toolkit";
import UserSlice from "../features/UserSlice.js";

const store = configureStore({
  reducer: {
    user: UserSlice,
  },
});

export default store;
