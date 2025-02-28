import React from "react";
import ResumeData from "@/store/ResumeStore";
import { HeaderForm } from "./form/form-template/HeaderForm";

const AppContent = ({}) => {
  const { name } = ResumeData();

  return (
    <div className=" p-2 lg:p-5">
      <p className="font-bold text-xl">{name} Section</p>
      <div className="flex flex-col lg:flex-row justify-between items-start p-2">
        <div className=" w-full p-2 lg:mx-5">
          <HeaderForm />
        </div>
        <div className="py-5 flex  justify-center w-full lg:w-96">
          <div className="lg:w-96 w-72 h-96 lg:h-[500px] rounded-xl bg-black" />
        </div>
      </div>
    </div>
  );
};

export default AppContent;
