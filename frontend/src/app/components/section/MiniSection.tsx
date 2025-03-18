import React from "react";

export default function MiniSection() {
  return (
    <div className=" lg:mt-20 mt-0 sm:pt-20 pb-5  ">
      <div className="mx-auto  px-2 lg:px-8">
        <h2 className="text-center text-2xl lg:text-4xl font-bold text-gray-900">
          Take your job search to the next level
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <div className="col-span-2  w-full  lg:col-span-1  text-center">
            <p className=" py-4 text-4xl lg:text-6xl">📝</p>
            <p className="  lg:font-bold text-lg">
              Step 1: Fill in Your Details
            </p>
            <p className="text-sm hidden lg:flex ">
              Enter your personal information, work experience, skills, and
              education in the resume section to get started.{" "}
            </p>
          </div>
          <div className="col-span-2  w-full  lg:col-span-1  text-center">
            <p className=" py-4 text-4xl lg:text-6xl">🤖</p>
            <p className="  lg:font-bold text-lg">Step 2: Enhance with AI</p>
            <p className="text-sm hidden lg:flex">
              Enter your personal information, work experience, skills, and
              education in the resume section to get started.{" "}
            </p>
          </div>
          <div className="col-span-2  w-full  lg:col-span-1  text-center">
            <p className=" py-4 text-4xl lg:text-6xl">✅</p>
            <p className="  lg:font-bold text-lg">
              Step 3: Check Your ATS Score
            </p>
            <p className="text-sm hidden lg:flex">
              Enter your personal information, work experience, skills, and
              education in the resume section to get started.{" "}
            </p>
          </div>
          <div className="col-span-2  w-full  lg:col-span-1  text-center">
            <p className=" py-4 text-4xl lg:text-6xl">👀 </p>
            <p className="  lg:font-bold text-lg">Step 4: Generate & Preview</p>
            <p className="text-sm hidden lg:flex">
              Enter your personal information, work experience, skills, and
              education in the resume section to get started.{" "}
            </p>
          </div>
          <div className="col-span-2  w-full  lg:col-span-1  text-center">
            <p className=" py-4 text-4xl lg:text-6xl">📥</p>
            <p className="  lg:font-bold text-lg">
              Step 5: Download Your Resume
            </p>
            <p className="text-sm hidden lg:flex">
              Enter your personal information, work experience, skills, and
              education in the resume section to get started.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
