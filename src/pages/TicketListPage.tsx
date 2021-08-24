import React, { ChangeEvent } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { BreadCrumbComponent } from "../components/BreadCrumb/BreadCrumbComponent";
import { SearchFormComponent } from "../components/SearchForm/SearchFormComponent";
import { TicketTableComponent } from "../components/TicketTable/TicketTableComponent";
import { fakeTicketData } from "../fakeData";
import { ITicketData } from "../types.ds";

export const TicketListPage = () => {
  const [str, setStr] = useState("");
  const [filteredTickets, setFilteredTickets] = useState(fakeTicketData);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setStr(value);
    searchTickets(value);
  };

  const searchTickets = (search: string) => {
    const displayTicket = fakeTicketData.filter((item: ITicketData) =>
      item.subject.includes(search)
    );
    setFilteredTickets(displayTicket);
  };
  return (
    <>
      <BreadCrumbComponent page={"لیست تیکت ها"} />
      <div className="container bg-white  box-border">
        <div className="header w-full flex px-8 justify-between items-center border-b border-gray-300">
          <Link
            to="/add-ticket"
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-1/2 lg:w-1/5 py-5 rounded-lg text-center"
          >
            ایجاد تیکت جدید
          </Link>
          <SearchFormComponent handleOnChange={handleOnChange} str={str} />
        </div>
        <TicketTableComponent tickets={filteredTickets} />
      </div>
    </>
  );
};
