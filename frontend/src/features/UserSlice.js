import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
  name: "users",
  initialState: { details: {}, active: false },
  reducers: {
    userDetails: (state, action) => {
      state.user = action.payload;
    },
    login: (state) => {
      state.active = true;
    },
    logout: (state) => {
      state.active = false;
    },
  },
});

export const { userDetails, login, logout } = UserSlice.actions;

export default UserSlice.reducer;
