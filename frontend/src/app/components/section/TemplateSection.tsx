import React from "react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";



export default function TemplateSection() {
  return (
    <div className=" py-10  sm:pt-20 sm:pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 ">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty  text-gray-900 sm:text-5xl">
            Choose your Professional Resume Template
          </h2>
          <p className="mt-2 text-md text-gray-600">
            Select from a variety of modern, recruiter-approved resume templates
            designed to highlight your skills and experience. Whether you're a
            recent graduate or a seasoned professional, find the perfect
            template to make your resume stand out..
          </p>
        </div>
        <div className="mx-auto mt-10 grid  grid-cols-1  gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0  lg:grid-cols-1">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full "
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1 border-2 h-80 border-black rounded-xl lg:h-96 lg:w-80">
                    <p>Resume Template - {index}</p>
                    {/* <Card>
                      <CardContent className="flex aspect-square items-center justify-center p-6">
                        <span className="text-3xl font-semibold">
                          {index + 1}
                        </span>
                      </CardContent>
                    </Card> */}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
