"use client";
import React, { useState ,useEffect} from "react";
import Image from "next/image";
import logo from "../../assests/Yellow and Green Modern Logo (1).jpg";
import CustomButton from "../CustomButton";
import { useRouter } from "next/navigation";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Navbar } from "./Navbar";
import { Button } from "@/components/ui/button";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import dynamic from 'next/dynamic'



interface NavbarPropType {
  userLoggedIn: boolean;
}

const MasterNavbar = ({ userLoggedIn }: NavbarPropType) => {
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsClient(true); // Ensure hydration consistency
  }, []);

  const handleAuthentication = () => {
    router.push("/auth/GoogleAuth");
  };

  return (
    <div>
      <header className="fixed inset-x-0 top-0 z-50 bg-white/70  ">
        <nav
          aria-label="Global"
          className="flex items-center justify-between lg:px-8"
        >
          <div className="flex lg:flex-1 p-4">
              <span className="sr-only">Free Resume.AI</span>
              <Image
                alt=""
                src={logo}
                className=" h-12  w-28 md:h-16 md:w-44  object-cover rounded-xl"
                onClick={() => {
                  router.push("/");
                  console.log("sdovbsdkjvbd");
                }}
              />
          </div>
          <div className="flex lg:hidden ">
            <div className="grid grid-cols-2 lg:hidden">
              <Sheet>
                <SheetTrigger>
                  <Button variant="outline">
                    <Menu />
                  </Button>
                </SheetTrigger>
                <SheetContent side={"top"}>
                  <SheetHeader>
                    <SheetTitle>
                      <div className="flex lg:hidden flex-1 ">
                        { isClient &&  userLoggedIn ? (
                          <Avatar>
                            <AvatarImage src="https://github.com/shadcn.png" />
                            <AvatarFallback>Hi!</AvatarFallback>
                          </Avatar>
                        ) : (
                          <CustomButton
                            name="Get Started"
                            containerClass="default"
                            onClick={handleAuthentication}
                          />
                        )}
                      </div>
                    </SheetTitle>
                    <SheetDescription className="py-4">
                      Welcome to FreeResume.AI
                    </SheetDescription>
                  </SheetHeader>

                  <div className="w-full py-5  flex  justify-center ">
                    <Navbar />
                  </div>
                  <SheetFooter className="fixed bottom-0 px-4  ">
                    <p className="text-[10px] pr-16 py-2">
                      Crafted by FreeCode Software Solutions.{" "}
                    </p>
                  </SheetFooter>
                </SheetContent>
              </Sheet>
            </div>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Navbar />
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {isClient && userLoggedIn ? (
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>Hi!</AvatarFallback>
              </Avatar>
            ) : (
              <CustomButton
                name="Get Started"
                containerClass="default"
                onClick={handleAuthentication}
              />
            )}
          </div>
        </nav>
      </header>
    </div>
  );
};


export default dynamic (() => Promise.resolve(MasterNavbar), {ssr: false})