import {
  getAllTickets,
  getSingleTicket,
  replyTicket,
  updateTicketStatusClosed,
} from "../../api/ticketApi";
import {
  fetchTicketLoading,
  fetchTicketSuccess,
  fetchTicketFail,
  searchTicket,
  fetchSingleTicketFail,
  fetchSingleTicketLoading,
  fetchSingleTicketSuccess,
  replyTicketLoading,
  replyTicketSuccess,
  replyTicketFail,
  closeTicketLoading,
  closeTicketSuccess,
  closeTicketFail,
} from "./TicketSlice";

export const fetchAllTickets = () => async (dispatch: any) => {
  dispatch(fetchTicketLoading());

  try {
    const result = await getAllTickets();
    dispatch(fetchTicketSuccess(result.data.result));
  } catch (error) {
    dispatch(fetchTicketFail(error));
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
    dispatch(fetchSingleTicketFail(error));
  }
};

export const replyOnTicket =
  (_id: string, msgObj: { message: string; sender: string }) =>
  async (dispatch: any) => {
    dispatch(replyTicketLoading());

    try {
      const result = await replyTicket(_id, msgObj);

      if (result.data.status === "error") {
        return dispatch(replyTicketFail(result.data.message));
      }

      if (result.data.status === "success") {
        dispatch(replyTicketSuccess());
        dispatch(fetchSingleTicket(_id));
      }
    } catch (error) {
      dispatch(replyTicketFail(error));
    }
  };

export const closeTicket = (_id: string) => async (dispatch: any) => {
  dispatch(closeTicketLoading());
  try {
    const result = await updateTicketStatusClosed(_id);
    if (result.status === "error") {
      return dispatch(closeTicketFail(result.message));
    }

    dispatch(fetchSingleTicket(_id));

    dispatch(closeTicketSuccess("وضعیت تیکت با موفقیت به روزرسانی شد"));
  } catch (error) {
    console.log(error);
    dispatch(closeTicketFail(error));
  }
};
