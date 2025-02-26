import React from "react";
import HomePage from "../pages/HomePage";
import Banner from "./components/Banner";
import GoogleAuth from "../pages/auth/GoogleAuth"
import "./globals.css";

const page = () => {
  return (
    <>
      {/* <Banner/> */}
      <HomePage />
    </>
  );
};

export default page;
