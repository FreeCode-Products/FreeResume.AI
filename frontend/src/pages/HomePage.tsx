"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import logo from "../app/assests/Yellow and Green Modern Logo (1).jpg";
import Image from "next/image";
import CustomButton from "../app/components/CustomButton";
import MiniSection from "../app/components/section/MiniSection";
import CTASection from "../app/components/section/CTASection";
import TemplateScetion from "../app/components/section/TemplateSection";
import TemplateSection from "../app/components/section/TemplateSection";
import StepsSection from "../app/components/section/StepsSection";
import Footer from "../app/components/Footer";
import MasterNavbar from "../app/components/Navbar/index";
import ResumeBuilder from "./ResumeBuilder";

export default function HomePage() {
  const router = useRouter();

  const handleResumeDashboard = () => {
    console.log("sdvjsndvojn");
    router.push("/dashboard/ResumeDashboard");
  };

  return (
    <div className="bg-white">
      <MasterNavbar />
     
      {/* <div className="flex justify-between space-x-4 mt-40 mx-40 hover:bg-gray-100 cursor-pointer transition-all duration-100">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@nextjs</h4>
          <p className="text-sm">
            The React Framework – created and maintained by @vercel.
          </p>
          <div className="flex items-center pt-2">
            <span className="text-xs text-muted-foreground">
              Joined December 2021
            </span>
          </div>
        </div>
      </div>
      <div className="p-20"> */}
      {/* <ResumeBuilder/> */}
      {/* </div> */}

      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-4xl py-20 sm:py-48 lg:pt-32 lg:pb-2">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1  text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Announcing our next round of funding.
              <a href="#" className="font-semibold text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-balance text-gray-900 md:text-7xl">
              AI Resume Builder (Fast, Easy & Free to Use)
            </h1>
            <p className="mt-8 text-md font-medium md:text-lg text-pretty text-gray-500 ">
              Land your next job with one of the best AI resume builders online.
              Work from your computer or phone with dozens of recruiter-approved
              templates and add ready-to-use skills and phrases in one click.
              Millions have trusted our resume maker — and it’s free to use!
            </p>
            <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-5">
              <CustomButton
                name={"Create my Resume"}
                containerClass="master"
                onClick={handleResumeDashboard}
              />
              <CustomButton
                name={"Import your Resume"}
                containerClass="masterlight"
              />
            </div>
          </div>
        </div>
        <MiniSection />
        <TemplateSection />
        <CTASection />
        <StepsSection />
      </div>
      <Footer />
    </div>
  );
}
