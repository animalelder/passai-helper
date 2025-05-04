"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import LogoAlt from "@/components/logo-alt";

import {
  Account,
  Calendar,
  ChildAccount,
  Overview,
  Settings,
  Updates,
} from "./icons";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);
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
      className={`flex flex-col bg-darkblue-103 text-white transition-all duration-200 ${isOpen ? "w-[225px]" : "w-20"} relative h-screen`}
    >
      <div className="mt-4 mb-20 flex items-center justify-center">
        {isOpen ? (
          <div className="flex items-center gap-2">
            <LogoAlt />
            <p className="flex justify-center font-logo text-xl font-bold text-paleyellow-101">
              pass.ai
            </p>
          </div>
        ) : (
          <LogoAlt />
        )}
      </div>

      <div className="flex flex-1 flex-col space-y-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <div
              className="flex-flex-col items-center justify-center space-y-2"
              key={index}
            >
              {item.heading && (
                <h3
                  className={`px-4 py-2 indent-3 font-heading text-xl font-semibold text-[#fefcf7] ${
                    isOpen ? "block" : "hidden"
                  }`}
                >
                  {item.heading}
                </h3>
              )}
              <Link
                key={index}
                href={item.href}
                className={`group mx-auto flex w-fit flex-col items-center justify-center gap-y-2 transition-colors text-shadow-amber-50`}
              >
                <span
                  className={`rounded-xl px-3 py-1 ${
                    isActive
                      ? "bg-[#759EAB] font-extrabold hover:bg-darkblue"
                      : "hover:bg-darkblue"
                  }`}
                >
                  <item.icon
                    className={`mx-auto size-7 group-hover:stroke-white/50`}
                  />
                </span>
                {isOpen && (
                  <span className={`${isActive ? "font-bold" : "font-semibold"}`}>
                    {item.label}
                  </span>
                )}
              </Link>
            </div>
          );
        })}
      </div>

      <button
        onClick={toggleSidebar}
        type="button"
        aria-label="Toggle Sidebar"
        className={`absolute top-6 -right-10 size-6 ${isOpen ? "cursor-w-resize" : "cursor-e-resize"}`}
      >
        <SidebarButton />
      </button>
    </div>
  );
}

function SidebarButton() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
    >
      <path
        d="M9 3v18M3 4v16a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H4a1 1 0 00-1 1z"
        stroke="#3D545B"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M17.917 12h-5.833M15 14.917l-2.916-2.916 2.917-2.917"
        stroke="#3D545B"
        strokeLinecap="round"
      />
    </svg>
  );
}
