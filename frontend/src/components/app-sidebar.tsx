import * as React from "react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Home,
  Briefcase,
  GraduationCap,
  Star,
  FileText,
  ListChecks,
  CheckCircle,
  Settings,
} from "lucide-react"; // Import relevant icons

const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Start",
      url: "#",
      items: [
        {
          title: "Header",
          url: "#",
          icon: Home, // Home icon for the start page
        },
        {
          title: "Experience",
          url: "#",
          isActive: true,
          icon: Briefcase, // Briefcase icon for work experience
        },
        {
          title: "Education",
          url: "#",
          icon: GraduationCap, // Graduation cap for education section
        },
        {
          title: "Skills",
          url: "#",
          icon: Star, // Star icon to represent skills
        },
        {
          title: "Summary",
          url: "#",
          icon: FileText, // FileText icon for summary/document content
        },
        {
          title: "Additional Details",
          url: "#",
          icon: ListChecks, // ListChecks for extra details
        },
        {
          title: "Finalize",
          url: "#",
          icon: CheckCircle, // CheckCircle to indicate finalization
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings, // Settings icon for configuration
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props} variant="inset" collapsible="icon" className="mt-20 absolute ">
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
        {/* <SearchForm /> */}
      </SidebarHeader>
      <SidebarContent>
        {/* We create a SidebarGroup for each parent. */}
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            {/* <SidebarGroupLabel>{item.title}</SidebarGroupLabel> */}
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <div className="flex items-center">
                      <p className="text-xl font-extrabold ml-2 mr-4 py-5 cursor-pointer">
                        <item.icon />
                      </p>
                      <SidebarMenuButton asChild isActive={item.isActive}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuButton>
                    </div>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
