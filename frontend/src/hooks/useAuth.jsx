import React, { useEffect, useRef, useState } from "react";
import keycloak from "keycloak-js";
const UseAuth = () => {
  const [isLogin, setLogin] = useState(false);
  const isRun = useRef();

  useEffect(() => {
    
    if (isRun.current) return;
    isRun.current = true;
    const client = new keycloak({
      url: import.meta.env.VITE_KEYCLOAK_URL,
      realm: import.meta.env.VITE_KEYCLOAK_REALM,
      clientId: import.meta.env.VITE_KEYCLOAK_CLIENT,
    });
    console.log(client);
    client.init({ onLoad: "login-required" }).then((res) => setLogin(res));
  }, []);
  return isLogin;
};

export default UseAuth;
