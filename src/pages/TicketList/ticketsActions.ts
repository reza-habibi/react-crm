import { getAllTickets, getSingleTicket } from "../../api/ticketApi";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
} from "./TicketSlice";

export const fetchAllTickets = () => async (dispatch: any) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTickets();
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error.message));
  }
};

export const filterSearchTicket = (str: string) => (dispatch: any) => {
  dispatch(searchTicket(str));
};

export const fetchSingleTicket = (_id: string) => async (dispatch: any) => {
  dispatch(fetchSingleTicketLoading());

  try {
    const result = await getSingleTicket(_id);
    dispatch(fetchSingleTicketSuccess(result.data.result[0]));
  } catch (error) {
    dispatch(fetchSingleTicketFail(error.message));
  }
};
