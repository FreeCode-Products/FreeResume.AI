"use client"
import React, { useEffect, useState } from "react";
import HomePage from "../pages/HomePage";
import Banner from "./components/Banner";
import GoogleAuth from "../pages/auth/GoogleAuth"
import "./globals.css";
import MasterNavbar from "./components/navbar/MasterNavbar";
import Footer from "./components/Footer";

const page = () => {

  const [userLoggedIn,setUserLoggedIn] =useState(false)

  useEffect(() => {
    const authenticationCredentials = localStorage.getItem("auth");
    if (authenticationCredentials) {
      console.log(JSON.parse(authenticationCredentials), "in the homepage");
      setUserLoggedIn(true)
    } else {
      console.log("not there");
    }
  }, []);
  return (
    <>
     <MasterNavbar userLoggedIn={userLoggedIn}/>
      <HomePage />
      <Footer/>
    </>
  );
};

export default page;
