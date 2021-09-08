import React, { FormEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { replyOnTicket } from "../../pages/TicketList/ticketsActions";
import { RootState } from "../../store";

export const ReplyComponent = (props: { _id: string }) => {
  const [message, setMessage] = useState("");
  const { user } = useSelector((state: RootState) => state.User);

  const dispatch = useDispatch();
  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const msgObj = {
      message,
      sender: user.name,
    };

    dispatch(replyOnTicket(props._id, msgObj));
  };

  return (
    <form className="w-full flex flex-col py-5" onSubmit={handleOnSubmit}>
      <h3 className="text-gray-900 text-2xl mb-5">پاسخ دادن</h3>
      <div className=" relative lg:w-2/3 lg:mx-auto ">
        <textarea
          name="details"
          className="form-textarea border resize-y text-xl outline-none w-full p-3 h-56 rounded-lg"
          placeholder="پاسخ خود را بنویسید..."
          autoComplete="off"
          rows={5}
          onChange={(e) => setMessage(e.target.value)}
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
    </form>
  );
};
