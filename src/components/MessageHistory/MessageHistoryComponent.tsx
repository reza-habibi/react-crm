import React from "react";
import { ITicketHistory } from "../../types.ds";

export const MessageHistoryComponent: React.FC<{
  msgHistory: ITicketHistory[] | undefined;
}> = ({ msgHistory }) => {
  return (
    <div className="w-full space-y-10 py-10">
      {msgHistory?.map((item: ITicketHistory, index: number) => (
        <div
          key={index}
          className={`w-full flex flex-col lg:grid grid-cols-4 grid-flow-row p-10  border rounded-lg  ${
            item.sender === "اپراتور" ? "border-pelorous" : "border-blue-500"
          }`}
        >
          <div
            className={`col-span-1 flex lg:flex-col mb-5 lg:mb-0 ${
              item.sender === "اپراتور"
                ? "items-start lg:items-end"
                : "items-start"
            }`}
          >
            <figure className="w-1/3">
              <img
                className={`border-2 rounded-full h-auto w-36   ${
                  item.sender === "اپراتور"
                    ? "border-pelorous "
                    : "border-blue-500"
                }`}
                src="/images/avatar.jpg"
                alt="avatar"
              />
            </figure>
            <div
              className={`flex flex-col space-y-3 w-2/3 h-full my-auto mr-2 ${
                item.sender === "اپراتور"
                  ? "items-start lg:items-end"
                  : "items-start"
              }`}
            >
              <span className="text-gray-900 text-2xl ">
                فرستنده :{" "}
                <span
                  className={`text-2xl  ${
                    item.sender === "اپراتور"
                      ? "text-pelorous"
                      : "text-blue-500"
                  }`}
                >
                  {item.sender}
                </span>
              </span>
              <span className="text-gray-900 text-2xl ">
                تاریخ :{" "}
                <span className="text-gray-600 text-xl">{item.msgAt}</span>
              </span>
            </div>
          </div>
          <div
            className={`col-span-3 border border-gray-500-bg-white p-5 rounded-xl shadow-xl bg-gray-100 lg:${
              item.sender === "اپراتور" && "order-first "
            }
`}
          >
            <p className="text-gray-700 text-2xl leading-loose">
              {item.message}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};
