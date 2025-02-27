"use client"

import React from 'react'
import UseAuth from '../hooks/useAuth'
import Public from "../../app/components/Public"
import Protected from "../../app/components/Protected";
import Page from '../dashboard/page';
import "../../app/globals.css"
import ResumeDashboard from '../dashboard/ResumeDashboard';

const GoogleAuth = () => {

  const isLogin = UseAuth();
  
  return (
    isLogin ? <ResumeDashboard/>:  <Public /> 
  )
}

export default GoogleAuth