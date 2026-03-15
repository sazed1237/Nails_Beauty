import { Search } from "lucide-react";
import { SidebarTrigger } from "./Sidebar";
import BellIcon from "@/components/icons/BellIcon";
import React from "react";
import Image from "next/image";

export default function DashboardHeader({
  className,
  children,
  ...props
}: React.ComponentProps<"header">) {
  return (
    <header
      className="flex h-[78px] px-6 bg-white gap-3 items-center w-full sticky top-0 z-50"
      {...props}
    >
      <SidebarTrigger />

      <div
        className="relative w-full max-w-xs mr-auto"
        style={
          {
            "--icon-wrapper": "44px",
          } as React.CSSProperties
        }
      >
        <input
          type="text"
          placeholder="Search...."
          className="peer h-12 w-full pl-[var(--icon-wrapper)] rounded-xl border border-[#E5E5E5] px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#228573]"
        />
        <span className="absolute peer-focus:opacity-100 peer-focus:text-[#070707] opacity-40 left-0 inset-y-0 flex items-center justify-center w-[var(--icon-wrapper)]">
          <Search className="size-5 text-current" />
        </span>
      </div>

      <HeaderButton>
        <BellIcon showBadge={true} />
      </HeaderButton>

      <HeaderButton>
        <div className="size-9 aspect-square rounded-md overflow-hidden ">
          <Image
            className="h-full w-full object-cover "
            src="/Images/dashboard/Tanvir.png"
            width={40}
            height={40}
            alt="user profile image"
          />
        </div>

        <div className="text-left pr-1">
          <p className="text-forground text-sm font-medium truncate max-w-3xs">
            Jerry Helfer
          </p>
          <p className="text-[#777980] text-sm truncate max-w-3xs">Admin</p>
        </div>
      </HeaderButton>

      {children}
    </header>
  );
}

function HeaderButton({ children, ...props }: React.ComponentProps<"button">) {
  return (
    <button
      className="cursor-pointer p-1.5 flex h-12 min-w-12 gap-1.5 items-center justify-center rounded-xl border border-[#E5E5E5] focus:outline-none focus:ring-2 focus:ring-[#228573]"
      {...props}
    >
      {children}
    </button>
  );
}
