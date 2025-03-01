"use client";

import { useRouter } from "next/navigation";
import CustomButton from "../app/components/CustomButton";
import MiniSection from "../app/components/section/MiniSection";
import CTASection from "../app/components/section/CTASection";
import TemplateSection from "../app/components/section/TemplateSection";
import StepsSection from "../app/components/section/StepsSection";

export default function HomePage() {
  const router = useRouter();

  const handleResumeDashboard = () => {
    router.push("/resume-dashboard/ResumeDashboard");
  };

  return (
    <div className="bg-white">
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
    </div>
  );
}
