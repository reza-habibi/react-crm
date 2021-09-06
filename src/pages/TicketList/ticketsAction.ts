import { getAllTickets } from "../../api/ticketApi";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
} from "./TicketSlice";

export const fetchAllTickets = () => async (dispatch: any) => {
  dispatch(fetchTicketLoading());

  try {
    const result =await getAllTickets();
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str: string) => (dispatch: any) => {
  dispatch(searchTicket(str));
};
