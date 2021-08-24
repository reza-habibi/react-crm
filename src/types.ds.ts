import { FormEvent } from "react";
import { ChangeEvent } from "react";

export interface ILoginComp {
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password?: string;
}

export type ITicketData ={
  id: number;
  subject: string;
  status: string;
  createdAt: string;
  history?:ITicketHistory[]
}

export type ITicketHistory={
  date:string;
  message:string;
  messageBy:string
}

export interface ISearchFormProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  str: String;
}
