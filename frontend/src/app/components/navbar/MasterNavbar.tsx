"use client";
import React, { useEffect, useState } from "react";
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

interface NavbarPropType {
  userLoggedIn: boolean;
}

const MasterNavbar = ({ userLoggedIn }: NavbarPropType) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userLogged, setUserLogged] = useState(false);
  const router = useRouter();

  const navigation = [
    { name: "Product", href: "#adjfndfjnd" },
    { name: "Features", href: "dffadfdfdfddadfd" },
    { name: "Marketplace", href: "#" },
    { name: "Company", href: "adfadfd" },
  ];

  const handleAuthentication = () => {
    router.push("/auth/GoogleAuth");
  };

  return (
    <div>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-2 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                alt=""
                src={logo}
                className="h-20 w-40 object-cover rounded-xl"
                onClick={() => {
                  router.push("/");
                  console.log("sdovbsdkjvbd");
                }}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <Navbar/>
            {/* <Navbar navigation={navigation} /> */}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            {userLoggedIn ? (
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

export default MasterNavbar;
