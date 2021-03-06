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
  conversations: ITicketHistory[];
};

export type ITicketHistory = {
  msgAt: string;
  message: string;
  sender: string;
};

export interface ISearchFormProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  str: String;
}

export interface ITicketState {
  tickets: ITicketData[];
  isLoading: boolean;
  error: string;
  replyTicketError: string;
  searchTicketList: any;
  selectedTicket: ITicketData;
  replyMsg: "";
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

export interface IAddTicketState {
  isLoading: boolean;
  ticket: TAddTicket;
  error: string;
}

export type TAddTicket = {
  subject: string;
  sender: string;
  message: string;
};

export type IIsAuth = {
  accessJWT: string;
  message: string;
  refreshJWT: string;
  status: string;
};

export interface IUserState {
  isLoading: boolean;
  user: {
    _id: string;
    name: string;
    email: string;
  };
  error: string;
}

export interface IAddTicketData {
  subject: string;
  sender: string;
  message: string;
  issueDate: string | null;
}

export interface INewUser {
  name: string;
  phone: number;
  email: string;
  company: string;
  address: string;
  password: string;
  confirmPass?: string;
}

export interface IPassError {
  isLengthy: boolean;
  hasUpper: boolean;
  hasLower: boolean;
  hasNumber: boolean;
  hasSpclChr: boolean;
  confirmPass: boolean;
}
