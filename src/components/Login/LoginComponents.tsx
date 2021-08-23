import React from "react";
import { Link } from "react-router-dom";
import { ILoginComp } from "../../types.ds";

export const LoginComponents:React.FC<ILoginComp> = ({
  handleOnSubmit,
  handleOnChange,
  email,
  password,
}) => {
  return (
    <div className="w-full h-screen flex justify-center items-center bg-green-400 ">
      <form
        className="w-full lg:w-1/4 lg:mx-auto bg-white rounded-lg flex flex-col space-y-12 py-10 px-10 lg:px-5 mx-5  "
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-pelorous-600 text-4xl lg:w-2/3 text-center  lg:mx-auto pb-5 border-b border-gray-300">
          ورود مشتریان
        </h2>
        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="email"
            id="email"
            name="email"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={email}
            onChange={handleOnChange}
          />
          <label
            htmlFor="email"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            ایمیل
          </label>
        </div>

        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="password"
            id="password"
            name="password"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={password}
            onChange={handleOnChange}
          />
          <label
            htmlFor="password"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            رمز عبور
          </label>
        </div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white text-2xl lg:w-2/3 lg:mx-auto py-5 rounded-lg">
          ورود
        </button>
        <Link
          to="/resetpassword"
          className="text-blue-500 text-xl lg:w-2/3 lg:mx-auto py-5 border-t border-gray-300"
        >
          رمز عبور خود را فراموش کرده اید ؟
        </Link>
      </form>
    </div>
  );
};
