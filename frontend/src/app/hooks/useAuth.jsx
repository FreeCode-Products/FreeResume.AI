"use client";

import React, { useEffect, useRef, useState } from "react";
import keycloak from "keycloak-js";
const UseAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const isRun = useRef();

  useEffect(() => {
    if (isRun.current) return;
    isRun.current = true;
    const client = new keycloak({
      url: process.env.NEXT_PUBLIC__KEYCLOAK_URL,
      realm: process.env.NEXT_PUBLIC__KEYCLOAK_REALM,
      clientId: process.env.NEXT_PUBLIC__KEYCLOAK_CLIENT,
    });
    console.log(client);
    client.init({ onLoad: "login-required" }).then((res) => setLogin(res));
  }, []);
  return isLogin;
};

export default UseAuth;
