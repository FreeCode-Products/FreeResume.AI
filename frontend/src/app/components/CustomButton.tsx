"use client"

import React from "react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  containerClass?: string;
  Icon?: LucideIcon;
  name?: string;
  onClick?: () => void;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  containerClass,
  name,
  onClick
}) => {
  const customizecss ={
    master:"px-10 py-8 rounded-full bg-gray-900 shadow-2xl shadow-black/20  font-bold text-xl hover:bg-gray-600 ",
    masterlight:"px-10 py-8 rounded-full text-white bg-gray-500 shadow-2xl shadow-black/20 font-bold text-xl  hover:bg-gray-600",
    default:"bg-blue-800 px-6 py-5  "
  }


  return (
    <Button className={customizecss[containerClass as keyof typeof customizecss] || ""}  onClick= {onClick}>
      {name}
    </Button>
  );
};

export default CustomButton;
