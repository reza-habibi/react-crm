import { FormEvent } from "react";
import { ChangeEvent } from "react";

export interface ILoginComp {
  handleOnSubmit: (e: FormEvent<HTMLFormElement>) => void;
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  email: string;
  password?: string;
}

export interface ITicketData {
  id: number;
  subject: string;
  status: string;
  createdAt: string;
}

export interface ISearchFormProps {
  handleOnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  str: String;
}
