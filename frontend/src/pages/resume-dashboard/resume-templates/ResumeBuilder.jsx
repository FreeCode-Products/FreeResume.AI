import React from "react";
import ResumeTemplate from "./ResumeTemplate";

const ResumeBuilder = () => {
  return (
    <div>
      <ResumeTemplate />

      <div className="bg-gray-100 min-h-screen flex justify-center p-6">
        <div className="max-w-3xl w-full  p-6 shadow-md rounded-lg">
          <header className="text-center border-b pb-4">
            <h1 className="text-2xl font-bold text-red-900">
              ARVIND KUMAR S.D
            </h1>
            <p className="text-gray-600">
              Aspiring MSc Candidate | Commerce Graduate
            </p>
          </header>

          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Academic History
            </h2>
            <p className="text-gray-700">Bachelor of Commerce (B.Com)</p>
            <p className="text-gray-600">
              Arulmigu Kapaleeswarar Arts and Science College, Chennai
              (2021-2024)
            </p>
          </section>

          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Professional Summary
            </h2>
            <p className="text-gray-700">
              A highly motivated commerce graduate with experience in business
              strategy and finance.
            </p>
          </section>

          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Contact
            </h2>
            <p className="text-gray-700">Phone: +91 8939200733</p>
            <p className="text-gray-700">Email: Archeryarvind7@gmail.com</p>
          </section>

          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Skills & Competencies
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Business Strategy</li>
              <li>Financial Management</li>
              <li>Leadership & Team Building</li>
              <li>Microsoft Office Suite</li>
            </ul>
          </section>

          <section className="mt-4">
            <h2 className="text-lg font-semibold text-gray-800 border-b pb-2">
              Awards & Certifications
            </h2>
            <ul className="list-disc list-inside text-gray-700">
              <li>Asia Book of Records - Archery</li>
              <li>Silver Medalist - State Tennis Championship</li>
              <li>Chess Association Tournament - 2nd Place</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ResumeBuilder;
