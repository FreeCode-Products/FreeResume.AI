"use client";

import React from "react";
import "../../app/globals.css";
import Page from "./page";
import MasterNavbar from "../../app/components/navbar/MasterNavbar";
import Footer from "../../app/components/Footer";

const ResumeDashboard = () => {
  return (
    <div>
      <MasterNavbar />
      <div className="mt-20">
        <Page />
      </div>
      <Footer/>
    </div>
  );
};

export default ResumeDashboard;
