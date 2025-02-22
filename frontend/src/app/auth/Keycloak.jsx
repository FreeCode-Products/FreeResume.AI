"use client"

import React from 'react'
import UseAuth from '../hooks/useAuth'
import Public from "../components/Public"
import Protected from "../components/Protected";

const GoogleAuth = () => {

  const isLogin = UseAuth();
  
  return (
    isLogin ?  <Protected/> :  <Public /> 
  )
}

export default GoogleAuth