import React from "react";
import {  useParams } from "react-router-dom";
import { BreadCrumbComponent } from "../components/BreadCrumb/BreadCrumbComponent";
import { MessageHistoryComponent } from "../components/MessageHistory/MessageHistoryComponent";
import { fakeTicketData } from "../fakeData";

export const TicketPage = () => {
  const { tid } = useParams<{ tid: string }>();
  const ticket = fakeTicketData[parseInt(tid) - 1];
  return (
    <>
      <BreadCrumbComponent page={"تیکت"} />
      <div className="lg:container bg-white space-y-10 rounded-2xl mb-20 mx-5 px-5 divide-y divide-gray-300">
        <div className="top w-full p-10 flex flex-col lg:flex-row justify-between items-start">
          <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-80 py-5 rounded-lg">
            بستن تیکت
          </button>

          <div className="flex flex-col lg:w-1/3 space-y-6 mt-5">
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
        <MessageHistoryComponent msgHistory={ticket.history} />
        <div className="w-full flex flex-col py-5">
          <h3 className="text-gray-900 text-2xl mb-5">پاسخ دادن</h3>
          <div className=" relative lg:w-2/3 lg:mx-auto ">
            <textarea
              name="details"
              className="form-textarea border resize-y text-xl outline-none w-full p-3 h-56 rounded-lg"
              placeholder="پاسخ خود را بنویسید..."
              autoComplete="off"
              rows={5}
            />
          </div>
          <div className="lg:w-2/3 lg:mx-auto">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white text-2xl  py-5 rounded-lg w-full"
            >
              پاسخ دادن
            </button>
          </div>
        </div>
      </div>

      

    </>
  );
};
