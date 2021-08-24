import React from "react";
import { BreadCrumbComponent } from "../components/BreadCrumb/BreadCrumbComponent";
import { MessageHistoryComponent } from "../components/MessageHistory/MessageHistoryComponent";
import { fakeTicketData } from "../fakeData";

export const TicketPage = () => {
  const ticket = fakeTicketData[0];
  return (
    <>
      <BreadCrumbComponent page={"تیکت"} />
      <div className="container bg-white space-y-10 rounded-2xl">
        <div className="top w-full p-10 flex justify-between items-start border-b border-gray-300">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-80 py-5 rounded-lg">
            بستن تیکت
          </button>

          <div className="flex flex-col w-1/3 space-y-6">
            <span className="text-gray-900 font-bold text-2xl">
              موضوع : <span className="text-gray-400">{ticket.subject}</span>
            </span>
            <span className="text-gray-900 font-bold text-2xl">
              تاریخ ایجاد تیکت :
              <span className="text-gray-400">{ticket.createdAt}</span>
            </span>

            <span className="text-gray-900 font-bold text-2xl">
              وضعیت : <span className="text-gray-400">{ticket.status}</span>
            </span>
          </div>
        </div>
        <MessageHistoryComponent msgHistory={ticket.history}/>
      </div>
    </>
  );
};
