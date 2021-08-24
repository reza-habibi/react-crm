import React from "react";
import { ITicketHistory } from "../../types.ds";

export const MessageHistoryComponent: React.FC<{
  msgHistory: ITicketHistory[] | undefined;
}> = ({ msgHistory }) => {
  return (
    <div className="w-full space-y-10 py-10">
      {msgHistory?.map((item: ITicketHistory, index: number) => (
        <div key={index} className={`w-full grid grid-cols-4 grid-flow-row p-10  border rounded-lg  ${
            item.messageBy === "اپراتور" ? "border-pelorous" : "border-blue-500"
          }`}>
          <div
            className={`col-span-1 flex flex-col  ${
              item.messageBy === "اپراتور" ? "items-end" : "items-start"
            }`}
          >
            <span className="text-gray-900 text-2xl ">
              فرستنده :{" "}
              <span
                className={`text-2xl  ${
                  item.messageBy === "اپراتور" ? "text-pelorous" : "text-blue-500"
                }`}
              >
                {item.messageBy}
              </span>
            </span>
            <span className="text-gray-900 text-2xl ">
              تاریخ : <span className="text-gray-600 text-xl">{item.date}</span>
            </span>
          </div>
          <div
            className={`col-span-3 border border-gray-500-bg-white p-5 rounded-xl bg-gray-100 ${
              item.messageBy === "اپراتور" && "order-first "
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
