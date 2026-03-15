import DashboardHeader from "@/components/Dashboard/ui/DashboardHeader";
import {
  Sidebar,
  SidebarProvider,
} from "@/components/Dashboard/ui/Sidebar";
import { PropsWithChildren } from "react";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <SidebarProvider>
      <Sidebar />
      <main className="peer-data-[state=expanded]/sidebar:ml-[var(--sidebar-width)] bg-[#F6F8FA] transition-all duration-200 ease-linear w-full">
        <DashboardHeader></DashboardHeader>
        {children}
      </main>
      <TwScreenSize />
    </SidebarProvider>
  );
}

function isDevEnv() {
  return process.env.NODE_ENV === "development";
}

const TwScreenSize = () => {
  if (!isDevEnv()) {
    return null;
  }

  return (
    <div className="fixed right-3 bottom-3 grid h-8 w-8 place-items-center rounded-sm bg-red-500 text-white">
      <p style={{ fontSize: "16px" }}>
        <span className="sm:hidden">xs</span>
        <span className="hidden sm:block md:hidden">sm</span>
        <span className="hidden md:block lg:hidden">md</span>
        <span className="hidden lg:block xl:hidden">lg</span>
        <span className="hidden xl:block 2xl:hidden">xl</span>
        <span className="hidden 2xl:block">2xl</span>
      </p>
    </div>
  );
};
