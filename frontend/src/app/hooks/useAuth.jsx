"use client";

import React, { useEffect, useRef, useState } from "react";
import keycloak from "keycloak-js";
const UseAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const [userData, setUserData] = useState({});
  const isRun = useRef();

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const client = new keycloak({
      url: process.env.NEXT_PUBLIC__KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC__KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC__KEYCLOAK_CLIENT,
    });
    client.init({ onLoad: "login-required" }).then((res) => {
      if (res) {
        console.log(res);
        console.log(client.tokenParsed.email, client.tokenParsed.name);
        console.log(client.refreshToken);
        console.log(client);
        let User_Credentials ={
          user_id:client.tokenParsed?.sub,
          email:client.tokenParsed.email,
          full_name:client.tokenParsed.given_name,
          keycloak_id:client.tokenParsed?.sub
        }
        console.log(User_Credentials)
        setUserData(User_Credentials)
      }
      setLogin(res);
    });
  }, []);
  return isLogin;
};

export default UseAuth;
