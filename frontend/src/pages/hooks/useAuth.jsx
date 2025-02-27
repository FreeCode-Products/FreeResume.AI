"use client";

import React, { useEffect, useRef, useState } from "react";
import keycloak from "keycloak-js";
import axios from "axios";
const UseAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const isRun = useRef();

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    handleAuthentication();
  }, []);

  const handleAuthentication =  () => {
    const client = new keycloak({
      url: process.env.NEXT_PUBLIC__KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC__KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC__KEYCLOAK_CLIENT,
    });
    client.init({ onLoad: "login-required" }).then((res) => {
      if (res) {
        let User_Credentials = {
          user_id: client.tokenParsed?.sub,
          email: client.tokenParsed.email,
          full_name: client.tokenParsed.given_name,
        };
        axios.post("/api/controllers/auth", User_Credentials, {
          headers: {
            Authorization: `Bearer ${client.refreshToken}`,
            "Content-Type": "application/json",
          },
        }).then((response) => {
          if(response.data) {
            const data = [response.data, { LoggedIn:true} ]
            console.log(data)
            localStorage.setItem("auth", JSON.stringify(data))
          }    
        }).catch((error) => {
          console.log(error)
        })
        setUserData(User_Credentials);
      }
     
      setLogin(res);
    })
  };
  
  return isLogin;
};


export default UseAuth;
