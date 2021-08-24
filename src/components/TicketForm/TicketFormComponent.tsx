import React, { ChangeEvent, FormEvent, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";
import { toast } from "react-toastify";
import { ShortText } from "../../utils/Validation";

export const TicketFormComponent = () => {
  const [dateValue, setDateValue] = useState<Value>(
    new DateObject({ calendar: persian })
  );
  const [formData, setFormData] = useState({
    subject: "",
    date: dateValue?.toLocaleString("fa"),
    details: "",
  });
  const handleOnChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    formData.date = dateValue?.toLocaleString("fa");
  };

  const handleOnSubmit =async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid =await ShortText(formData.subject);
    !formData.subject
      ? toast.error("لطفاً فیلد موضوع را تکمیل نمایید!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontFamily: "iranyekan",
            direction: "rtl",
            fontSize: "1.5rem",
          },
        })
      : !formData.details
      ? toast.error("لطفاً فیلد  جزئیات را تکمیل نمایید!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontFamily: "iranyekan",
            direction: "rtl",
            fontSize: "1.5rem",
          },
        })
      : !isValid
      ? toast.error("موضوع ورودی شما بایستی بین 3 تا 100 کاراکتر باشد!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          style: {
            fontFamily: "iranyekan",
            direction: "rtl",
            fontSize: "1.5rem",
          },
        })
      : console.log(formData);
  };
  return (
    <form
      className="form w-full lg:w-2/3 mx-auto bg-white rounded-lg py-10 space-y-10 px-5 shadow-lg"
      onSubmit={handleOnSubmit}
    >
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
          name="details"
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
      </div>
    </form>
  );
};
