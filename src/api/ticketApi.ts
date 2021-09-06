import axios from "axios";
import { IResultData, TAddTicket } from "../types.ds";

export const getAllTickets = () => {
  return new Promise<{ data: IResultData }>(async (resolve, reject) => {
    try {
      const result = await axios.get("http://localhost:4030/v1/ticket", {
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

export const addTicket = () => {
  return new Promise<{ data: TAddTicket }>(async (resolve, reject) => {
    try {
      const result = await axios.post("http://localhost:4030/v1/ticket", {
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
