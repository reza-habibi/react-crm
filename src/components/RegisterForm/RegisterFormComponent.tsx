import React, { ChangeEvent, FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { INewUser, IPassError } from "../../types";

const initialState: INewUser = {
  name: "",
  phone: "",
  email: "",
  company: "",
  address: "",
  password: "",
  confirmPass: "",
};

const passVerificationError: IPassError = {
  isLengthy: false,
  isUpper: false,
  isLower: false,
  hasNumber: false,
  hasSpclChr: false,
  confirmPass: false,
};

export const RegisterFormComponent = () => {
  const [newUser, setNewUser] = useState(initialState);
  const [errorPass, setErrorPass] = useState(passVerificationError);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });

    if (name === "password") {
      const isLengthy = value.length >= 8;
      const isUpper = /[A-Z]/.test(value);
      const isLower = /[a-z]/.test(value);
      const hasNumber = /[0-9]/.test(value);
      const hasSpclChr = /[!,@,#,$,%,^,&,*,(,),_,+,=,?,:,;,<,>,.,~]/.test(
        value
      );

      setErrorPass({
        ...errorPass,
        isLengthy,
        isUpper,
        isLower,
        hasNumber,
        hasSpclChr,
      });
    }

    if (name === "confirmPass") {
      setErrorPass({ ...errorPass, confirmPass: newUser.password === value });
    }
  };

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(newUser);
  };

  return (
    <div className="w-full my-auto flex justify-center items-center align-middle	">
      <form
        className="w-full lg:w-1/2 lg:mx-auto bg-white rounded-lg flex flex-col space-y-10 pt-10 px-10 lg:px-5 mx-5  "
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-pelorous-600 text-4xl lg:w-2/3 text-center  lg:mx-auto pb-5 border-b border-gray-300">
          ثبت نام کاربر
        </h2>
        {/* {error !== "" && (
          <span className="bg-red-200 text-red-700 lg:w-2/3 lg:mx-auto text-2xl p-4 rounded-lg">
            {error}
          </span>
        )} */}
        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="text"
            id="name"
            name="name"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.name}
            onChange={handleOnChange}
          />
          <label
            htmlFor="name"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            نام و نام خانوادگی
          </label>
        </div>
        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="text"
            id="phone"
            name="phone"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.phone}
            onChange={handleOnChange}
          />
          <label
            htmlFor="phone"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            تلفن همراه
          </label>
        </div>
        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="email"
            id="email"
            name="email"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.email}
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
            type="text"
            id="company"
            name="company"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.company}
            onChange={handleOnChange}
          />
          <label
            htmlFor="company"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            شرکت
          </label>
        </div>
        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="text"
            id="address"
            name="address"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.address}
            onChange={handleOnChange}
          />
          <label
            htmlFor="address"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            آدرس
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
            value={newUser.password}
            onChange={handleOnChange}
          />
          <label
            htmlFor="password"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            رمز عبور
          </label>
        </div>

        <div className="floating-input relative lg:w-2/3 lg:mx-auto ">
          <input
            type="password"
            id="confirmPass"
            name="confirmPass"
            className=" border border-gray-300 text-xl outline-none focus:border-gray-800 focus:shadow-sm w-full p-3 h-16 rounded-lg"
            placeholder=" "
            autoComplete="off"
            value={newUser.confirmPass}
            onChange={handleOnChange}
          />
          <label
            htmlFor="confirmPass"
            className="absolute top-0 right-0 px-4 py-5 h-full pointer-events-none transform origin-right transition-all duration-100 ease-in-out text-2xl"
          >
            تکرار رمز عبور
          </label>
        </div>
        <div className="lg:w-2/3 lg:mx-auto rounded-lg shadow">
          <small
            className={`${
              errorPass.confirmPass ? "hidden" : "block"
            } text-lg mb-5 text-red-500`}
          >
            رمز وارد شده مطابقت ندارد
          </small>
          <ul className="divide-y-2 divide-gray-100 text-2xl text-white">
            <li
              className={`${
                errorPass.isLengthy ? "bg-green-500" : "bg-red-500"
              } p-3 `}
            >
              رمز عبور دارای حداقل 8 نویسه
            </li>
            <li
              className={`${
                errorPass.isUpper ? "bg-green-500" : "bg-red-500"
              } p-3 `}
            >
              حداقل یک حرف بزرگ
            </li>
            <li
              className={`${
                errorPass.isLower ? "bg-green-500" : "bg-red-500"
              } p-3 `}
            >
              حداقل یک حرف کوچک
            </li>
            <li
              className={`${
                errorPass.hasNumber ? "bg-green-500" : "bg-red-500"
              } p-3 `}
            >
              حداقل یک عدد
            </li>
            <li
              className={`${
                errorPass.hasSpclChr ? "bg-green-500" : "bg-red-500"
              } p-3 `}
            >
              حداقل یک کاراکتر ویژه ، مثال : @ ، #، ! ، ?
            </li>
          </ul>
        </div>

        {Object.values(errorPass).includes(false) ? (
          <button
            className="bg-blue-500 text-white text-2xl lg:w-2/3 lg:mx-auto py-5 rounded-lg disabled:opacity-75 cursor-not-allowed"
            disabled={true}
          >
            ثبت نام
          </button>
        ) : (
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white text-2xl lg:w-2/3 lg:mx-auto py-5 rounded-lg disabled:opacity-75"
            disabled={false}
          >
            ثبت نام
          </button>
        )}

        {/* {isLoading && (
          <div className="flex justify-center items-center h-32">
            <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
            <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
            <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
          </div>
        )*/}
        <Link
          to="/"
          className="text-blue-500 text-xl lg:w-2/3 lg:mx-auto py-5 border-t border-gray-300"
        >
          قبلا عضو شده‌اید؟ رفتن به صفحه ورود
        </Link>
      </form>
    </div>
  );
};
