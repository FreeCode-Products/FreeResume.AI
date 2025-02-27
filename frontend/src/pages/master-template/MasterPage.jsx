import Footer from "@/app/components/Footer";
import MasterNavbar from "@/app/components/navbar/MasterNavbar";
import React, { useEffect, useState } from "react";

const MasterPage = ({children}) => {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  useEffect(() => {
    const authenticationCredentials = localStorage.getItem("auth");
    if (authenticationCredentials) {
      console.log(JSON.parse(authenticationCredentials), "in the homepage");
      setUserLoggedIn(true);
    } else {
      console.log("not there");
    }
  }, []);
  return (
    <>
      <MasterNavbar userLoggedIn={userLoggedIn} />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default MasterPage;
