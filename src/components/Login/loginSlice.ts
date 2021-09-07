import { createSlice } from "@reduxjs/toolkit";
import { ILoginState } from "../../types.ds";

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
  },
});

const { reducer, actions } = loginSlice;

export const { loginPending, loginSuccess, loginFail  } = actions;

export default reducer;
