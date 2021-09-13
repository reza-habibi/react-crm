import React, { ChangeEvent } from "react";
import { useEffect } from "react";
import { FormEvent } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../api/userApi";
import { getUserProfile } from "../../pages/Dashboard/userActions";
import { RootState } from "../../store";
import { loginPending, loginSuccess, loginFail } from "./loginSlice";
export const LoginComponents = () => {
  const [email, setEmail] = useState("e1@e.com");
  const [password, setPassword] = useState("Password2");
  const history = useHistory();
  const dispatch = useDispatch();
  const login = useSelector((state: RootState) => state.Login);
  const { isLoading, isAuth, error } = login;

  useEffect(() => {
    sessionStorage.getItem("accessJWT") && history.push("/dashboard");
  }, [history, isAuth]);

  const handleOnSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(loginPending());

    try {
      const isAuth = await userLogin({ email, password });

      if (isAuth.status === "error") {
        return dispatch(loginFail(isAuth.message));
      }

      dispatch(loginSuccess());
      dispatch(getUserProfile());
      history.push("/dashboard");
    } catch (error) {
      dispatch(loginFail(error));
    }
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    switch (name) {
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full h-88vh flex justify-center items-center align-middle	">
      <form
        className="w-full lg:w-1/2 lg:mx-auto bg-white rounded-lg flex flex-col space-y-12 py-10 px-10 lg:px-5 mx-5  "
        onSubmit={handleOnSubmit}
      >
        <h2 className="text-pelorous-600 text-4xl lg:w-2/3 text-center  lg:mx-auto pb-5 border-b border-gray-300">
          ورود مشتریان
        </h2>
        {error !== "" && (
          <span className="bg-red-200 text-red-700 lg:w-2/3 lg:mx-auto text-2xl p-4 rounded-lg">
            {error}
          </span>
        )}
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
        {isLoading && (
          <div className="flex justify-center items-center h-32">
            <div className="bg-red-600 p-2 w-4 h-4 rounded-full animate-bounce400 green-circle mr-1"></div>
            <div className="bg-green-600 p-2 w-4 h-4 rounded-full animate-bounce200 red-circle mr-1"></div>
            <div className="bg-blue-600 p-2 w-4 h-4 rounded-full animate-bounce blue-circle mr-1"></div>
          </div>
        )}
        <Link
          to="/reset-password"
          className="text-blue-500 text-xl lg:w-2/3 lg:mx-auto py-5 border-t border-gray-300"
        >
          رمز عبور خود را فراموش کرده اید ؟
        </Link>
      </form>
    </div>
  );
};
