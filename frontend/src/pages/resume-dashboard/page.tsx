import { AppSidebar } from "@/pages/resume-dashboard/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./ui/app-header";
import AppContent from "./ui/app-content";
import { ClassAttributes, ForwardRefExoticComponent, HTMLAttributes, ReactNode, RefAttributes, useState } from "react";
import ResumeData from "@/store/ResumeStore";

export default function Page() {
  const [getSideBarTitle,setGetSidebarTitle] =useState("")
    

  return (
    <SidebarProvider>
      <AppSidebar setGetSidebarTitle={setGetSidebarTitle} />
      <SidebarInset >
        <AppHeader />
        <AppContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
