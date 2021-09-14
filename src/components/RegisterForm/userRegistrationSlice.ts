import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  message: "",
};

const userRegistrationSlice = createSlice({
  name: "userRegister",
  initialState,
  reducers: {
    registrationPending: (state) => {
      state.isLoading = true;
    },
    registrationSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.status = "success";
      state.message = payload;
    },
    registrationFail: (state, { payload }) => {
      state.isLoading = false;
      state.status = "error";
      state.message = payload;
    },
  },
});

export const { registrationPending, registrationSuccess, registrationFail } =
  userRegistrationSlice.actions;

export default userRegistrationSlice.reducer;
