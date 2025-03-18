"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../app/components/CustomButton";
import MiniSection from "../app/components/section/MiniSection";
import CTASection from "../app/components/section/CTASection";
import TemplateSection from "../app/components/section/TemplateSection";
import StepsSection from "../app/components/section/StepsSection";
// import main from "../app/assests/pexels-googledeepmind-17483868.jpg";
// import main from "../app/assests/pexels-googledeepmind-17483873.jpg"
// import main from "../app/assests/ats.jpg"

export default function HomePage() {
  const router = useRouter();

  const handleResumeDashboard = () => {
    router.push("/resume-dashboard/ResumeDashboard");
  };

  return (
    <div>
      {/* <Image src={main} alt="" className="absolute h-full lg:h-max object-fill" /> */}
      <div className="relative isolate px-6 pt-8 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        ></div>
        <div className="mx-auto max-w-7xl py-20 sm:py-48 lg:pt-32 lg:pb-2">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center ">
            <div className="relative rounded-full   flex justify-center items-center px-3 py-1  text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              <p>Big News! We’re Expanding! </p>
              <a href="#" className="font-semibold px-2 text-indigo-600">
                <span aria-hidden="true" className="absolute inset-0" />
                Read more <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center ">
            <h1 className="text-4xl font-bold tracking-tight md:text-8xl bg-gradient-to-t from-black/80 to-gray-400 bg-clip-text text-transparent">
              AI-Powered Resume Builder – Get Noticed Instantly!
            </h1>

            <p className="mt-8 text-md font-semibold md:text-lg lg:text-pretty text-evenly text-black/80  /60 p-4 rounded-2xl  ">
              Build a professional resume effortlessly with AI-driven
              suggestions, expert templates, and one-click customizations. Apply
              faster and smarter with AI-generated resumes, cover letters, and
              tailored job applications. Stand out to recruiters in just a few
              clicks—completely free! 🎯
            </p>
            <div className="mt-10  flex flex-col md:flex-row items-center justify-center gap-x-6 gap-y-5">
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
    </div>
  );
}
