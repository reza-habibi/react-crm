import React from "react";
import { useHistory } from "react-router-dom";
import { ITicketData } from "../../types.ds";

export const TicketTableComponent = ({ tickets }: any) => {
  const history = useHistory();
  return (
    <div className="w-full lg:w-10/12 mx-auto py-10 space-y-10">
      <span className="text-gray-900 font-bold text-2xl">لیست تیکت ها :</span>
      <div className="shadow overflow-y-hidden overflow-x-scroll lg:overflow-x-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200 ">
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
            <tbody className="bg-white divide-y divide-gray-200 ">
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
  );
};
