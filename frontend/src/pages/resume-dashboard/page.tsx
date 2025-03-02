import  AppSidebar  from "@/pages/resume-dashboard/ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "./ui/app-header";
import AppContent from "./ui/app-content";

export default function Page() {
    

  return (
    <SidebarProvider>
      <AppSidebar setGetSidebarTitle={function (): void {
        throw new Error("Function not implemented.");
      } } />
      <SidebarInset >
        <AppHeader />
        <AppContent />
      </SidebarInset>
    </SidebarProvider>
  );
}
