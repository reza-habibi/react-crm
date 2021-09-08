import axios from "axios";
import { IResultData } from "../types.ds";

const rootUrl = "http://localhost:4030/v1/";
const ticketUrl = rootUrl + "ticket";
const getSingleTicketUrl = rootUrl + "ticket/";
const closeTicketUrl = rootUrl + "ticket/close-ticket/";

export const getAllTickets = () => {
  return new Promise<{ data: IResultData }>(async (resolve, reject) => {
    try {
      const result = await axios.get(ticketUrl, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const getSingleTicket = (_id: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const result = await axios.get(getSingleTicketUrl + _id, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const replyTicket = (
  _id: string,
  msgObj: { message: string; sender: string }
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const result = await axios.put(getSingleTicketUrl + _id, msgObj, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });
      resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

export const updateTicketStatusClosed = (_id: string) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const result = await axios.patch(
        closeTicketUrl + _id,
        {},
        {
          headers: {
            Authorization: sessionStorage.getItem("accessJWT"),
          },
        }
      );

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};

export const createNewTicket = (frmData: any) => {
  console.log("from api", frmData);
  return new Promise<any>(async (resolve, reject) => {
    try {
      const result = await axios.post(ticketUrl, frmData, {
        headers: {
          Authorization: sessionStorage.getItem("accessJWT"),
        },
      });

      resolve(result.data);
    } catch (error) {
      console.log(error.message);
      reject(error);
    }
  });
};
