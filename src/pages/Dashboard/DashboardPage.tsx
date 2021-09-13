import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { BreadCrumbComponent } from "../../components/BreadCrumb/BreadCrumbComponent";
import { Loading } from "../../components/Loading/Loading";
import { RootState } from "../../store";
import { ITicketData } from "../../types";
import { fetchAllTickets } from "../TicketList/ticketsActions";

export const DashboardPage = () => {
  const dispatch = useDispatch();
  const ticketsReducer = useSelector((state: RootState) => state.Tickets);
  const { isLoading, error, tickets } = ticketsReducer;
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchAllTickets());
  }, [dispatch]);

  const pendingTickets = tickets.filter(
    (ticket: ITicketData) => ticket.status === "در انتظار پاسخ اپراتور"
  );

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
    <div className="w-full h-full flex flex-col items-center space-y-12 py-12 px-8">
      <BreadCrumbComponent page={"داشبورد"} />
      <Link
        to="/add-ticket"
        className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-1/2 lg:w-1/5 py-5 rounded-lg text-center"
      >
        ایجاد تیکت جدید
      </Link>
      <span className="text-white font-bold text-2xl">
        تعداد کل تیکت ها : {tickets.length}
      </span>
      <span className="text-white font-bold text-2xl">
        تیکت های در انتظار پاسخ : {pendingTickets.length}
      </span>

      <div className="w-full lg:w-10/12 mx-auto py-10 space-y-10">
        <span className="text-white font-bold text-2xl">
          جدیدترین تیکت های اضافه شده :
        </span>
        <div className="shadow lg:overflow-x-hidden overflow-x-scroll border-b border-gray-200 sm:rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                >
                  موضوع
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                >
                  وضعیت
                </th>
                <th
                  scope="col"
                  className="px-6 py-3 text-right text-xl font-medium text-gray-500 uppercase tracking-wider"
                >
                  تاریخ ایجاد تیکت
                </th>
              </tr>
            </thead>
            {tickets.length === 0 ? (
              <tbody className="bg-white divide-y divide-gray-200">
                <tr className="h-16 flex items-center">
                  <td className="text-gray-900 text-2xl w-full p-5">
                    تیکتی برای نمایش وجود ندارد
                  </td>
                </tr>
              </tbody>
            ) : (
              <tbody className="bg-white divide-y divide-gray-200">
                {tickets.map((ticket: ITicketData) => (
                  <tr
                    key={ticket._id}
                    className="hover:bg-gray-300 cursor-pointer"
                    onClick={() => history.push(`/ticket/${ticket._id}`)}
                  >
                    <td className="px-6 py-4 text-xl whitespace-nowrap">
                      {ticket._id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xl text-gray-900">
                        {ticket.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {ticket.status === "بسته شده" ? (
                        <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-red-100 text-red-700">
                          {ticket.status}
                        </span>
                      ) : ticket.status === "پاسخ داده شد" ? (
                        <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-green-100 text-green-700">
                          {ticket.status}
                        </span>
                      ) : (
                        <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-700">
                          {ticket.status}
                        </span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xl text-gray-500">
                        {ticket.openAt &&
                          new Date(ticket.openAt).toLocaleString("fa-IR")}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};
