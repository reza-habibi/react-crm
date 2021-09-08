import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  error: "",
  successMsg: "",
};

const newTicketSlice = createSlice({
  name: "addNew",
  initialState,
  reducers: {
    openNewTicketPending: (state) => {
      state.isLoading = true;
    },
    openNewTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.successMsg = payload;
    },
    openNewTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    restSuccessMSg: (state) => {
      state.isLoading = false;
      state.successMsg = "";
    },
  },
});

const { reducer, actions } = newTicketSlice;

export const {
  openNewTicketFail,
  openNewTicketPending,
  openNewTicketSuccess,
  restSuccessMSg,
} = actions;

export default reducer;
