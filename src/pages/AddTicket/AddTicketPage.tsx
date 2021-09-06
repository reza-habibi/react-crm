import React from "react";
import { BreadCrumbComponent } from "../../components/BreadCrumb/BreadCrumbComponent";
import { TicketFormComponent } from "../../components/TicketForm/TicketFormComponent";

export const AddTicketPage = () => {
  return (
    <div className="w-full flex flex-col container space-y-10" >
      <BreadCrumbComponent page={"تیکت جدید"} />
      <TicketFormComponent />
    </div>
  );
};
