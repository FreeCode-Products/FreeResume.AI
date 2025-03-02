import React from "react";
import ResumeData from "@/store/ResumeStore";
import  HeaderForm from "./form/form-template/HeaderForm";
import  SummaryForm from "./form/form-template/SummaryForm";
import  EducationForm from "./form/form-template/EducationForm";
import  ExperienceForm from "./form/form-template/ExperienceForm";
import  SkillsForm from "./form/form-template/SkillsForm";
import  CustomSection from "./form/form-template/CustomSection";

const formComponents: Record<string, React.FC> = {
  Header: HeaderForm,
  Summary: SummaryForm,
  Education: EducationForm,
  Experience: ExperienceForm,
  Skills: SkillsForm,
  "Additional Details": CustomSection,
};
const AppContent = ({}) => {
  const { name } = ResumeData();

  console.log(name);
  const FormComponent = formComponents[name] || null;
  return (
    <div className=" p-2 lg:p-5">
      <p className="font-bold text-xl">{name} Section</p>
      <div className="flex flex-col lg:flex-row justify-between items-start p-2">
        <div className=" w-full p-2 lg:mx-5">
          {FormComponent ? 
          <FormComponent /> :
           <p>Form not found</p>}
          {/* <HeaderForm /> */}
          {/* <SummaryForm/> */}
          {/* <EducationForm/> */}
          {/* <ExperienceForm/> */}
          {/* <SkillsForm/> */}
          {/* <CustomSection/> */}
        </div>
        <div className="py-5 flex  justify-center w-full lg:w-96">
          <div className="lg:w-96 w-72 h-96 lg:h-[500px] rounded-xl bg-black" />
        </div>
      </div>
    </div>
  );
};

export default AppContent;
