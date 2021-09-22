import { createSlice } from "@reduxjs/toolkit";
import { ILoginState } from "../../types";

const initialState: ILoginState = {
  isLoading: false,
  isAuth: false,
  error: "",
};
const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    loginPending: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (state) => {
      state.isLoading = false;
      state.isAuth = true;
    },
    loginFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    loginReset: (state) => {
      state.isLoading = false;
      state.isAuth = false;
      state.error = "";
    },
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail, loginReset } = actions;

export default reducer;
