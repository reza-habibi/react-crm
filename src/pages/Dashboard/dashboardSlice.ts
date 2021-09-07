import { createSlice } from "@reduxjs/toolkit";
import { IUserState } from "../../types.ds";

const initialState: IUserState = {
  isLoading: false,
  user: {
    _id: "",
    name: "",
    email: "",
  },
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserPending: (state) => {
      state.isLoading = true;
    },
    getUserSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.user = payload;
    },
    getUserFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = userSlice;

export const { getUserPending, getUserSuccess, getUserFail } = actions;

export default reducer;
