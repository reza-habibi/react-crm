import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { RootState } from "../../store";
import { ShortText } from "../../utils/Validation";
import { restSuccessMSg } from "./addNewTicketSlicer";
import { openNewTicket } from "./newTicketAction";

const initialFrmDt = {
  subject: "",
  message: "",
};
const initialFrmError = {
  subject: false,
  issueDate: false,
  message: false,
};

export const TicketFormComponent = () => {
  const [dateValue, setDateValue] = useState<Value>(
    new DateObject({ calendar: persian })
  );

  const dispatch = useDispatch();

  const {
    user: { name },
  } = useSelector((state: RootState) => state.User);

  const { isLoading, error, successMsg } = useSelector(
    (state: RootState) => state.NewTicket
  );

  const [frmDataError, setFrmDataError] = useState(initialFrmError);
  const [formData, setFormData] = useState(initialFrmDt);

  useEffect(() => {
    return () => {
      successMsg && dispatch(restSuccessMSg());
    };
  }, [dispatch, formData, frmDataError, successMsg]);

  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = await ShortText(formData.subject);

    setFrmDataError({
      ...initialFrmError,
      subject: !isValid,
    });

    dispatch(
      openNewTicket({ ...formData, sender: name, issueDate: dateValue })
    );
  };
  return (
    <form
      className="form w-full lg:w-2/3 mx-auto bg-white rounded-lg py-10 space-y-10 px-5 shadow-lg"
      onSubmit={handleOnSubmit}
    >
      {error && (
        <span className="bg-red-200 text-red-700 lg:w-2/3 lg:mx-auto text-2xl p-4 rounded-lg">
          {error}
        </span>
      )}
      <h3 className="text-3xl text-gray-900  lg:w-2/3 lg:mx-auto">
        ثبت تیکت جدید :
      </h3>
      <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
        <input
          type="text"
          id="subject"
          name="subject"
          className="form-input border  text-xl outline-none w-full p-3 h-16 rounded-lg"
          placeholder=" "
          onChange={handleOnChange}
          autoComplete="off"
        />
        <label
          htmlFor="subject"
          className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-xl"
        >
          موضوع تیکت
        </label>
      </div>
      <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
        <label htmlFor="date" className="ml-5 text-xl text-gray-900">
          تاریخ روی دادن خطا :
        </label>
        <DatePicker
          id="date"
          name="date"
          maxDate={new DateObject({ calendar: persian }).set(
            "day",
            new DateObject({ calendar: persian }).day
          )}
          render={<InputIcon />}
          calendar={persian}
          locale={persian_fa}
          value={dateValue}
          onChange={setDateValue}
        />
      </div>
      <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
        <textarea
          name="message"
          className="form-textarea border resize-y text-xl outline-none w-full p-3 h-48 rounded-lg"
          placeholder="توضیحات"
          autoComplete="off"
          rows={5}
          onChange={handleOnChange}
        />
      </div>
      <div className="lg:w-2/3 lg:mx-auto">
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white text-2xl  py-5 rounded-lg w-full"
        >
          ثبت تیکت
        </button>
        {isLoading && (
          <>
            <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
            <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
            <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>{" "}
          </>
        )}
      </div>
    </form>
  );
};
