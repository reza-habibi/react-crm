import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { BreadCrumbComponent } from "../../components/BreadCrumb/BreadCrumbComponent";
import { SearchFormComponent } from "../../components/SearchForm/SearchFormComponent";
import { TicketTableComponent } from "../../components/TicketTable/TicketTableComponent";
import { RootState } from "../../store";
import { fetchAllTickets } from "./ticketsAction";
import { Loading } from "../../components/Loading/Loading";

export const TicketListPage = () => {
  const dispatch = useDispatch();
  const ticketsReducer = useSelector((state: RootState) => state.Tickets);
  const { isLoading, error, tickets, searchTicketList } = ticketsReducer;

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  if (isLoading) return <Loading />;

  if (error)
    return (
      <div
        dir="ltr"
        x-data="{ show: true }"
        x-show="show"
        className="w-full  my-2 rounded-r-md px-6 border-l-4 -ml-4 border-gray-100 bg-yellow-400"
      >
        <div className="flex items-center py-4">
          <i className="fas fa-exclamation-circle rounded-full fill-current text-4xl text-gray-800"></i>
          <div className="ml-5">
            <h1 className="font-bold text-gray-800 text-3xl">Warning !!!</h1>
            <p className="text-gray-800 my-0 text-2xl">{error}</p>
          </div>
        </div>
      </div>
    );

  return (
    <div>
      <BreadCrumbComponent page={"لیست تیکت ها"} />
      <div className="lg:container mx-5 px-5 bg-white  box-border rounded-xl mb-5">
        <div className="header pt-5 w-full flex flex-col lg:flex-row px-8 justify-between items-center border-b border-gray-300">
          <Link
            to="/add-ticket"
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-1/2 lg:w-1/5 py-5 rounded-lg text-center"
          >
            ایجاد تیکت جدید
          </Link>
          <SearchFormComponent />
        </div>
        <TicketTableComponent tickets={searchTicketList} />
      </div>
    </div>
  );
};
