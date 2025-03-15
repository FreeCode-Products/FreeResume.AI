"use client";

import Image from "next/image";
import React from "react";
import steps from "../../assests/steps.jpg"

const features = [
  {
    name: "AI Resume Builder",
    description:
      "Effortlessly create a polished, professional resume using our advanced AI that tailors your content to your career goals.",
  },
  {
    name: "ATS Score Checker",
    description:
      "Optimize your resume by checking how well it meets Applicant Tracking System standards, ensuring it gets noticed by recruiters.",
  },
  {
    name: "Cover Letter Generator",
    description:
      "Generate compelling cover letters that perfectly complement your resume and effectively showcase your strengths.",
  },
  {
    name: "Career Insights & Recommendations",
    description:
      "Receive personalized tips and industry insights to refine your application and boost your job search success.",
  },
];

export default function StepsSection() {
  return (
    <div className="overflow-hidden  py-24 sm:pt-40 sm:pb-10">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <h2 className="text-base/7 font-semibold text-indigo-600">
                Empower Your Application
              </h2>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                Services Tailored for Your Success
              </p>
              <p className="mt-6 text-lg/8 text-gray-600">
                At Free Resume.AI, we offer a suite of innovative tools to help you build, optimize, and refine your career documents. Let our technology work for you!
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative ">
                    <dt className="inline font-semibold text-gray-900">
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Free Resume.AI Services"
            src={steps}
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
          />
        </div>
      </div>
    </div>
  );
}
