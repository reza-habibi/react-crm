import React, { useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import type { Value } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import InputIcon from "react-multi-date-picker/components/input_icon";

export const TicketFormComponent = () => {
  const [value, setValue] = useState<Value>(new DateObject());
  return (
    <form className="form w-full lg:w-2/3 mx-auto bg-white rounded-lg py-10 space-y-10">
      <h3 className="text-3xl text-gray-900  lg:w-2/3 lg:mx-auto">
        ثبت تیکت جدید :
      </h3>
      <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
        <input
          type="text"
          id="email"
          name="email"
          className="form-input border  text-xl outline-none w-full p-3 h-16 rounded-lg"
          placeholder=" "
          autoComplete="off"
        />
        <label
          htmlFor="email"
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
          render={<InputIcon />}
          calendar={persian}
          locale={persian_fa}
          value={value}
          onChange={setValue}
        />
      </div>
      <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
        <textarea
          name="details"
          className="form-textarea border resize-y text-xl outline-none w-full p-3 h-48 rounded-lg"
          placeholder="توضیحات"
          autoComplete="off"
          rows={5}
        />
      </div>
      <div className="lg:w-2/3 lg:mx-auto">
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl  py-5 rounded-lg w-full">
          ثبت تیکت
        </button>
      </div>
    </form>
  );
};
