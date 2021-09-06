import { FormEvent } from "react";
import { ChangeEvent } from "react";

export interface ILoginComp {
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password?: string;
}

export type ITicketData = {
  _id: any;
  subject: string;
  status: string;
  openAt: string;
  history?: ITicketHistory[];
};

export type ITicketHistory = {
  date: string;
  message: string;
  messageBy: string;
};

export interface ISearchFormProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  str: String;
}

export interface ITicketState {
  tickets: ITicketData[];
  isLoading: boolean;
  error: string;
  searchTicketList: any;
}

export type IResultData = {
  status: string;
  result: ITicketData[];
};

export interface ILoginState {
  isLoading: boolean;
  isAuth: boolean;
  error: string;
}

export type IIsAuth = {
  accessJWT: string;
  message: string;
  refreshJWT: string;
  status: string;
};
