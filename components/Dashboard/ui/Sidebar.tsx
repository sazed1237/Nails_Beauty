"use client";

import CalendarIcon from "@/components/icons/CalendarIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ScissorsIcon from "@/components/icons/ScissorsIcon";
import StaffIcon from "@/components/icons/StaffIcon";
import UsersIcon from "@/components/icons/UsersIcon";
import { PanelLeftIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import SettingsIcon from "@/components/icons/SettingsIcon";
import FlagIcon from "@/components/icons/FlagIcon";
import HeadphoneIcon2 from "@/components/icons/HeadphoneIcon2";
import SignOutIcon from "@/components/icons/SignOutIcon";
import { cn } from "@/lib/utils";

const SIDEBAR_WIDTH = "236px";
const SIDEBAR_KEYBOARD_SHORTCUT = "b";

const navigationData = {
  navMain: [
    { url: "/dashboard", title: "Dashboard", icon: HomeIcon },
    { url: "/dashboard/customers", title: "Customers", icon: UsersIcon },
    { url: "/dashboard/services", title: "Services", icon: ScissorsIcon },
    { url: "/dashboard/bookings", title: "Bookings", icon: CalendarIcon },
    { url: "/dashboard/staff", title: "Staff", icon: StaffIcon },
    { url: "/dashboard/gallery", title: "Gallery", icon: StaffIcon },
    { url: "/dashboard/blog", title: "Blog", icon: StaffIcon },
    { url: "/dashboard/testimonials", title: "Testimonials", icon: StaffIcon },
  ],
  support: [
    { url: "/dashboard/settings", title: "Settings", icon: SettingsIcon },
    { url: "/dashboard/help", title: "Help", icon: HeadphoneIcon2 },
    { url: "/dashboard/report", title: "Report", icon: FlagIcon },
  ],
};

function Sidebar() {
  const { state } = useSidebar();
  const pathname = usePathname();

  return (
    <div
      data-state={state}
      className="group peer/sidebar overflow-y-auto w-[var(--sidebar-width)] fixed inset-y-0 h-svh bg-white border-r border-[#ECEFF3] data-[state=collapsed]:-translate-x-[var(--sidebar-width)] overflow-hidden transition-all duration-200 ease-linear z-50"
    >
      <div className="p-6 outline flex flex-col h-full">
        <div className="flex items-center justify-center">
          <Image src="/logo.svg" width={120} height={40} alt="lumi-logo" />
        </div>

        <ol className="flex mt-8 flex-col gap-[2px]">
          {navigationData.navMain.map((item) => (
            <li key={item.url}>
              <SidebarMenuButton
                href={item.url}
                isActive={pathname == item.url}
              >
                <item.icon />
                {item.title}
              </SidebarMenuButton>
            </li>
          ))}
        </ol>

        <ol className="flex mt-8 flex-col gap-[2px]">
          <p className="uppercase h-8 flex items-center text-black opacity-30 text-[11px] font-bold">
            support
          </p>
          {navigationData.support.map((item) => (
            <li key={item.url}>
              <SidebarMenuButton
                href={item.url}
                isActive={pathname == item.url}
              >
                <item.icon />
                {item.title}
              </SidebarMenuButton>
            </li>
          ))}
        </ol>

        <div className="mt-auto">
          <SidebarMenuButton
            className="hover:bg-[#B91C1C] hover:text-white"
            href="#"
            isActive={false}
          >
            <SignOutIcon />
            Sign out
          </SidebarMenuButton>
        </div>
      </div>
    </div>
  );
}

interface SidebarMenuButtonProps extends React.ComponentProps<typeof Link> {
  isActive: boolean;
}

function SidebarMenuButton({
  isActive,
  children,
  className,
  ...props
}: SidebarMenuButtonProps) {
  return (
    <Link
      data-active={isActive}
      className={cn(
        "h-10 px-3 flex items-center gap-2 rounded-lg font-bold text-sm text-[#4A4C56] hover:bg-accent data-[active=true]:bg-accent data-[active=true]:text-[#070707] transition-colors",
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}

type SidebarContextProps = {
  state: "expanded" | "collapsed";
  open: boolean;
  setOpen: (open: boolean) => void;
  openMobile: boolean;
  setOpenMobile: (open: boolean) => void;
  isMobile: boolean;
  toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
  const context = React.useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebar must be used within a SidebarProvider.");
  }

  return context;
}

function SidebarProvider({
  defaultOpen = true,
  open: openProp,
  onOpenChange: setOpenProp,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  defaultOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
}) {
  const isMobile = false;
  const [openMobile, setOpenMobile] = React.useState(false);

  // This is the internal state of the sidebar.
  // We use openProp and setOpenProp for control from outside the component.
  const [_open, _setOpen] = React.useState(defaultOpen);
  const open = openProp ?? _open;
  const setOpen = React.useCallback(
    (value: boolean | ((value: boolean) => boolean)) => {
      const openState = typeof value === "function" ? value(open) : value;
      if (setOpenProp) {
        setOpenProp(openState);
      } else {
        _setOpen(openState);
      }
    },
    [setOpenProp, open],
  );

  // Helper to toggle the sidebar.
  const toggleSidebar = React.useCallback(() => {
    return isMobile ? setOpenMobile((open) => !open) : setOpen((open) => !open);
  }, [isMobile, setOpen, setOpenMobile]);

  // Adds a keyboard shortcut to toggle the sidebar.
  React.useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (
        event.key === SIDEBAR_KEYBOARD_SHORTCUT &&
        (event.metaKey || event.ctrlKey)
      ) {
        event.preventDefault();
        toggleSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [toggleSidebar]);

  // We add a state so that we can do data-state="expanded" or "collapsed".
  // This makes it easier to style the sidebar with Tailwind classes.
  const state = open ? "expanded" : "collapsed";

  const contextValue = React.useMemo<SidebarContextProps>(
    () => ({
      state,
      open,
      setOpen,
      isMobile,
      openMobile,
      setOpenMobile,
      toggleSidebar,
    }),
    [state, open, setOpen, isMobile, openMobile, setOpenMobile, toggleSidebar],
  );

  return (
    <SidebarContext.Provider value={contextValue}>
      <div
        data-slot="sidebar-wrapper"
        style={
          {
            "--sidebar-width": SIDEBAR_WIDTH,
            ...style,
          } as React.CSSProperties
        }
        className="group/sidebar-wrapper has-data-[variant=inset]:bg-sidebar flex min-h-svh w-full"
        {...props}
      >
        {children}
      </div>
    </SidebarContext.Provider>
  );
}

function SidebarTrigger({
  className,
  onClick,
  ...props
}: React.ComponentProps<"button">) {
  const { toggleSidebar } = useSidebar();

  return (
    <button
      data-sidebar="trigger"
      data-slot="sidebar-trigger"
      className="size-7 text-[#777980] flex items-center justify-center cursor-pointer mr-3"
      onClick={(event) => {
        onClick?.(event);
        toggleSidebar();
      }}
      {...props}
    >
      <PanelLeftIcon />
      <span className="sr-only">Toggle Sidebar</span>
    </button>
  );
}

export {
  Sidebar,
  SidebarProvider,
  SidebarTrigger,
  SidebarMenuButton,
  useSidebar,
};
