import React from "react";
import { MailOpen } from "lucide-react";
import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CustomButtonProps {
  containerClass?: string;
  Icon?: LucideIcon;
  name?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  containerClass,
  Icon,
  name,
}) => {
  const customizecss ={
    master:"px-10 py-8 rounded-full bg-blue-800 font-bold text-xl hover:bg-blue-900",
    masterlight:"px-10 py-8 rounded-full text-black bg-yellow-200 font-bold text-xl hover:bg-yellow-400"
  }
  return (
    <Button className={customizecss[containerClass as keyof typeof customizecss] || ""} >
      {name}
    </Button>
  );
};

export default CustomButton;
