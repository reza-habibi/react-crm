import React, { ChangeEvent, FormEvent, useState } from "react";
import { toast } from "react-toastify";
import { LoginComponents } from "../components/Login/LoginComponents";
// import { PasswordReset } from "../components/Login/PasswordReset";

export const Entry = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email, password);
    if (!email || !password) {
      toast.error("لطفاً فیلد های ورودی را تکمیل نمایید!", {
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
      });
    }
    setEmail("");
    setPassword("");
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
    <>
      <LoginComponents
        handleOnSubmit={handleOnSubmit}
        handleOnChange={handleOnChange}
        email={email}
        password={password}
      />

      
    </>
  );
};
