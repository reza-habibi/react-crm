import axios from "axios";
import { IResultData } from "../types.ds";

const rootUrl = "http://localhost:4030/v1/";
const getAllTicketUrl = rootUrl + "ticket";
const getSingleTicketUrl = rootUrl + "ticket/";

export const getAllTickets = () => {
  return new Promise<{ data: IResultData }>(async (resolve, reject) => {
    try {
      const result = await axios.get(getAllTicketUrl, {
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
