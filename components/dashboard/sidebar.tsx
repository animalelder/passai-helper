"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { signOut } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LogoAlt from "@/components/logo-alt";

import navTabAsh from "@/assets/dashboard/nav-tab-ash.png";

import {
  Account,
  Calendar,
  ChildAccount,
  LogOut,
  Overview,
  Settings,
  Updates,
} from "./icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = React.useState(true);
  const pathname = usePathname();

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const menuItems = [
    {
      icon: Overview,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: Calendar,
      label: "Family Calendar",
      href: "/dashboard/calendar",
    },
    {
      icon: Updates,
      label: "My Updates",
      href: "/dashboard/updates",
    },
    {
      icon: Settings,
      label: "Settings",
      href: "/dashboard/settings",
    },
    {
      heading: "Account",
      icon: Account,
      label: "My Profile",
      href: "/dashboard/account",
    },
    {
      icon: ChildAccount,
      label: "Kids Profile",
      href: "/dashboard/account/kids",
    },
  ];

  return (
    <div
      className={`flex min-h-dvh flex-col bg-darkblue-103 font-heading text-white duration-200 ease-in-out *:transition-discrete **:transition **:duration-200 **:ease-in-out ${isOpen ? "w-[250px]" : "w-[110px]"} relative`}
    >
      <div className="mt-4 mb-20 flex items-center justify-center">
        <div className="flex items-center gap-2">
          <LogoAlt />
          <p
            className={`flex justify-center font-logo text-xl font-bold tracking-wide text-paleyellow-101 transition-all ${isOpen ? "block opacity-100 duration-1000" : "hidden w-0 opacity-0 duration-200"}`}
          >
            PASS.AI
          </p>
        </div>
      </div>

      <div className="flex flex-1 flex-col space-y-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div
              className={cn(
                "flex min-h-12 flex-col items-center justify-center space-y-2",

                isActive && isOpen && "bg-darkblue-102 has-[h3]:pb-2"
              )}
              key={index}
            >
              {item.heading && (
                <h3
                  className={`w-full bg-darkblue-103 px-4 py-2 pl-5 text-left indent-2 font-heading text-2xl font-extrabold text-white ${
                    isOpen ? "block pb-4" : "hidden"
                  }`}
                >
                  {item.heading}
                </h3>
              )}
              <Link
                key={index}
                href={item.href}
                className={cn(
                  "group mx-auto flex w-fit flex-col items-center justify-center gap-y-2 text-shadow-amber-50",
                  isOpen &&
                    "ml-2 flex-row justify-start justify-items-start gap-x-2 justify-self-start"
                )}
              >
                <span
                  className={`rounded-xl px-3 py-1 ${
                    isActive
                      ? "bg-darkblue-102 font-extrabold group-hover:bg-darkblue"
                      : "group-hover:bg-darkblue-101"
                  }`}
                >
                  <item.icon
                    className={`mx-auto size-7 group-hover:stroke-white/50`}
                  />
                </span>
                {isOpen ? (
                  <span className={`${isActive ? "font-bold" : "font-semibold"}`}>
                    {item.label}
                  </span>
                ) : (
                  <span
                    className={`text-xs font-stretch-condensed ${isActive ? "font-bold" : "font-semibold"}`}
                  >
                    {item.label}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
        <div className="mt-56 flex flex-col gap-y-5">
          <Image
            src={navTabAsh}
            alt="nav-tab-ash"
            unoptimized
            className={`mx-auto h-auto w-[120px] cursor-pointer hover:scale-95`}
          />

          <LogOutButton className="inline-flex justify-center gap-3 font-heading text-xl font-bold text-offwhite">
            <LogOut /> Logout
          </LogOutButton>
        </div>
      </div>

      <button
        onClick={toggleSidebar}
        type="button"
        aria-label="Toggle Sidebar"
        className={`absolute top-4 -right-10 size-6 cursor-pointer`}
      >
        <SidebarButton open={isOpen} />
      </button>
    </div>
  );
}

type SidebarButtonProps = {
  open: boolean;
};

function SidebarButton(props: SidebarButtonProps) {
  const { open } = props;
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className={`size-7 transition duration-700 ease-in-out ${!open ? "rotate-180" : ""} stroke-darkblue-104 stroke-2 text-darkblue-104 hover:fill-darkblue-102/40 hover:stroke-[2.5] hover:text-darkblue-103`}
    >
      <path
        d="M9 3v18M3 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1z"
        stroke="currentColor"
        strokeLinecap="round"
      />
      <path
        d="M17.917 12h-5.833M15 14.917l-2.916-2.916 2.917-2.917"
        stroke="currentColor"
        strokeLinecap="round"
      />
    </svg>
  );
}
function LogOutButton({ className, ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant="ghost"
      size="lg"
      className={cn(
        "group mx-auto inline-flex justify-center gap-2 font-heading text-xl font-bold text-offwhite hover:stroke-darkgreen-105 hover:text-darkblue-106",
        className
      )}
      onClick={() => signOut()}
      {...props}
    >
      <LogOut /> Logout
    </Button>
  );
}