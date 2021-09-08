import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BreadCrumbComponent } from "../../components/BreadCrumb/BreadCrumbComponent";
import { Loading } from "../../components/Loading/Loading";
import { MessageHistoryComponent } from "../../components/MessageHistory/MessageHistoryComponent";
import { ReplyComponent } from "../../components/Reply/ReplyComponent";
import { RootState } from "../../store";
import { closeTicket, fetchSingleTicket } from "../TicketList/ticketsActions";
import { resetResponseMsg } from "../TicketList/TicketSlice";

export const TicketPage = () => {
  const { tid } = useParams<{ tid: string }>();
  const { selectedTicket, isLoading, error, replyTicketError, replyMsg } =
    useSelector((state: RootState) => state.Tickets);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSingleTicket(tid));
    return () => {
      (replyMsg || replyTicketError) && dispatch(resetResponseMsg());
    };
  }, [dispatch, replyMsg, replyTicketError, tid]);

  if (error) {
    console.log("Error");
  }
  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <BreadCrumbComponent page={"تیکت"} />
          <div className="lg:container bg-white space-y-10 rounded-2xl mb-20 mx-5 px-5 divide-y divide-gray-300">
            {error !== "" && (
              <span className="bg-red-200 text-red-700 text-2xl p-4 rounded-lg">
                {error}
              </span>
            )}
            {replyTicketError !== "" && (
              <span className="bg-red-200 text-red-700 text-2xl p-4 rounded-lg">
                {replyTicketError}
              </span>
            )}
            {replyMsg !== "" && (
              <span className="bg-green-200 text-green-700 text-2xl p-4 rounded-lg">
                {replyMsg}
              </span>
            )}
            <div className="top w-full p-10 flex flex-col lg:flex-row justify-between items-start">
              {selectedTicket.status === "بسته شده" ? (
                <button
                  className="bg-blue-500 opacity-75 cursor-not-allowed text-white text-2xl w-80 py-5 rounded-lg"
                  disabled={true}
                >
                  بستن تیکت
                </button>
              ) : (
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white text-2xl w-80 py-5 rounded-lg"
                  onClick={() => dispatch(closeTicket(tid))}
                >
                  بستن تیکت
                </button>
              )}

              <div className="flex flex-col lg:w-1/3 space-y-6 mt-5">
                <span className="text-gray-900 font-bold text-2xl">
                  موضوع :{" "}
                  <span className="text-gray-400">
                    {selectedTicket.subject}
                  </span>
                </span>
                <span className="text-gray-900 font-bold text-2xl">
                  تاریخ ایجاد تیکت :
                  <span className="text-gray-400">
                    {selectedTicket.openAt &&
                      new Date(selectedTicket.openAt).toLocaleString("fa-IR")}
                  </span>
                </span>

                <span className="text-gray-900 font-bold text-2xl">
                  وضعیت :{" "}
                  <span className="text-gray-400">{selectedTicket.status}</span>
                </span>
              </div>
            </div>
            <MessageHistoryComponent
              msgHistory={selectedTicket.conversations}
            />
            {selectedTicket.status === "بسته شده" ? null : (
              <ReplyComponent _id={tid} />
            )}
          </div>
        </>
      )}
    </>
  );
};
