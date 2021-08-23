import React from "react";
import { BreadCrumbComponent } from "../components/BreadCrumb/BreadCrumbComponent";
import { fakeTicketData } from "../fakeData";
import { ITicketData } from "../types.ds";

export const DashboardPage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center space-y-12 py-12 ">
      <BreadCrumbComponent page={"داشبورد"} />
      <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-1/2 lg:w-1/5 py-5 rounded-lg">
        ایجاد تیکت جدید
      </button>
      <span className="text-gray-900 font-bold text-2xl">
        تعداد کل تیکت ها : 256
      </span>
      <span className="text-gray-900 font-bold text-2xl">
        تیکت های در انتظار پاسخ : 15
      </span>

      <div className="w-full lg:w-10/12 mx-auto py-10 space-y-10">
        <span className="text-gray-900 font-bold text-2xl">
          جدیدترین تیکت های اضافه شده :
        </span>
        <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
            {fakeTicketData.length === 0 ? (
              <tr className="h-16 flex items-center">
                <td className="text-gray-900 text-2xl w-full p-5">
                  تیکتی برای نمایش وجود ندارد
                </td>
              </tr>
            ) : (
              <tbody className="bg-white divide-y divide-gray-200">
                {fakeTicketData.map((ticket: ITicketData) => (
                  <tr className="hover:bg-gray-300">
                    <td className="px-6 py-4 text-xl whitespace-nowrap">
                      {ticket.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-xl text-gray-900">
                        {ticket.subject}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="px-6 py-2 inline-flex text-xl leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-700">
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="text-xl text-gray-500">
                        {ticket.createdAt}
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
