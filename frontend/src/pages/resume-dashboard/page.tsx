import  AppSidebar  from "@/components/resume_ui/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import AppHeader from "../../components/resume_ui/app-header";
import AppContent from "../../components/resume_ui/app-content";

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
