import * as React from "react";

import { VersionSwitcher } from "@/components/version-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
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
import ResumeData from "@/store/ResumeStore";

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
          icon: Home,
          isActive: false,
        },
        {
          title: "Summary",
          url: "#",
          icon: FileText,
          isActive: false,
        },
        {
          title: "Experience",
          url: "#",
          isActive: false,
          icon: Briefcase,
        },
        {
          title: "Education",
          url: "#",
          icon: GraduationCap,
          isActive: false,
        },
        {
          title: "Skills",
          url: "#",
          icon: Star,
          isActive: false,
        },
       
        {
          title: "Additional Details",
          url: "#",
          icon: ListChecks,
          isActive: false,
        },
        {
          title: "Finalize",
          url: "#",
          icon: CheckCircle,
          isActive: false,
        },
        {
          title: "Settings",
          url: "#",
          icon: Settings,
          isActive: false,
        },
      ],
    },
  ],
};

interface AppSidebarProps
  extends Omit<React.ComponentProps<typeof Sidebar>, "ref"> {
  setGetSidebarTitle: (title: string ) => void ;
}

const AppSidebar =({ setGetSidebarTitle : {},  ...props }: AppSidebarProps) => {

  const { setname } = ResumeData();
  const handleSidebarContent = (e : React.MouseEvent<HTMLDivElement>) => {


  //const target = e.target as HTMLElement;
  // console.log(target.innerText);
  // setname(target.innerText);
  // const target = e.target as HTMLElement;
  // if (target instanceof HTMLElement) {
  //   console.log(target.innerText);
  //   setname(target.innerText);
  // }


  console.log(e.currentTarget.innerText,"app_sidebar");

    data.navMain[0].items.map((item) => {
      if(item.title == e.currentTarget.innerText){
        item.isActive = true
      } else{
        item.isActive = false
      }
    })
  setname(e.currentTarget.innerText);

  };


  return (

    <Sidebar
      {...props}
      variant="inset"
      collapsible="icon"
      className="mt-20 absolute "
    >
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((item) => (
          <SidebarGroup key={item.title}>
            <SidebarGroupContent>
              <SidebarMenu>
                {item.items.map((item) => (
                  <SidebarMenuItem key={item.title} className="cursor-pointer py-2 ">
                      <SidebarMenuButton asChild isActive={item.isActive == true && item.isActive} className=" h-14 " >
                    <div className="flex items-center " onClick={handleSidebarContent}>
                      <p className="text-xl font-extrabold ml-2 mr-4 py-5 cursor-pointer">
                        <item.icon />
                      </p>
                        <a href={item.url} className="font-semibold text-lg" >
                          {item.title}
                        </a>
                    </div>
                      </SidebarMenuButton>
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


export default AppSidebar