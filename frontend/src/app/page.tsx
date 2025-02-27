"use client";
import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import Banner from "./components/Banner";
import GoogleAuth from "../pages/auth/GoogleAuth";
import "./globals.css";
import MasterNavbar from "./components/navbar/MasterNavbar";
import Footer from "./components/Footer";
import MasterPage from "../pages/master-template/MasterPage";

const page = () => {
  return (
    <>
      <MasterPage>
        <HomePage />
      </MasterPage>
    </>
  );
};

export default page;
