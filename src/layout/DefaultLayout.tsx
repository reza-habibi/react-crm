import React from "react";
import { Footer } from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export const DefaultLayout = ({ children }: any) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
