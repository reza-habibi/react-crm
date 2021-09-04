import { createSlice } from "@reduxjs/toolkit";
import { ITicketState } from "../../types.ds";

const initialState: ITicketState = {
  tickets: [],
  isLoading: false,
  error: "",
  searchTicketList: [],
};

const ticketListSlice = createSlice({
  name: "ticketList",
  initialState,
  reducers: {
    fetchTicketLoading: (state) => {
      state.isLoading = true;
    },
    fetchTicketSuccess: (state, action) => {
      state.tickets = action.payload;
      state.searchTicketList = action.payload;
      state.isLoading = false;
    },
    fetchTicketFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
    searchTicket: (state, { payload }) => {
      state.searchTicketList = state.tickets.filter((ticket) => {
        if (!payload) return ticket;

        return ticket.subject.includes(payload);
      });
    },
  },
});

const { reducer, actions } = ticketListSlice;

export const {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} = actions;

export default reducer;
