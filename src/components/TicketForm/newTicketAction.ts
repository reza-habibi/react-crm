import {
  openNewTicketFail,
  openNewTicketPending,
  openNewTicketSuccess,
} from "./addNewTicketSlicer";

import { createNewTicket } from "../../api/ticketApi";
import { IAddTicketData } from "../../types";

export const openNewTicket =
  (frmData: IAddTicketData) =>
  async (dispatch: (arg0: { payload: any; type: string }) => void) => {
    try {
      dispatch(openNewTicketPending());

      ////call api
      const result = await createNewTicket(frmData);
      console.log(result);
      if (result.status === "error") {
        return dispatch(openNewTicketFail(result.message));
      }
      dispatch(openNewTicketSuccess(result.message));
    } catch (error) {
      console.log(error);
      dispatch(openNewTicketFail(error));
    }
  };
