import axios from "axios";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} from "./TicketSlice";

export const fetchAllTickets = () => async (dispatch: any) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await axios.get("http://localhost:4030/v1/ticket", {
      headers: {
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImUxQGUuY29tIiwiaWF0IjoxNjMwNzU0MzIwLCJleHAiOjE2MzA3NTUyMjB9.HTE3QsrK2CPjNsq0DMkkoPShUd9qxzcXJni0a8cSkP8",
      },
    });
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str: string) => (dispatch: any) => {
  dispatch(searchTicket(str));
};
