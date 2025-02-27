"use client";

import React from "react";
import "../../app/globals.css";
import Page from "./page";
import Footer from "../../app/components/Footer";
import MasterPage from "../master-template/MasterPage";

const ResumeDashboard = () => {
  return (
    <MasterPage>
      <div className="mt-20">
        <Page />
      </div>
    </MasterPage>
  );
};

export default ResumeDashboard;
