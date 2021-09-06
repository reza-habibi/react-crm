import { createSlice } from "@reduxjs/toolkit";
import { IAddTicketState } from "../../types.ds";

const initialState: IAddTicketState = {
  isLoading: false,
  ticket: {
    subject: "",
    sender: "",
    message: "",
  },
  error: "",
};

const addTicketSlice = createSlice({
  name: "addTicket",
  initialState,
  reducers: {
    addTicketPending: (state) => {
      state.isLoading = true;
    },
    addTicketSuccess: (state, { payload }) => {
      state.isLoading = false;
      state.ticket = payload;
    },
    addTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = addTicketSlice;

export const { addTicketPending, addTicketSuccess, addTicketFail } = actions;

export default reducer;
