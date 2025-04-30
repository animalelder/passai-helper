"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

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
      className={`flex flex-col bg-[#5e8189] text-white transition-all duration-200 ${isOpen ? "w-100" : "w-20"} relative h-screen`}
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

      <div className="flex-1 space-y-4">
        {menuItems.map((item, index) => {
          const isActive = pathname === item.href;

          return (
            <>
              {item.heading && (
                <h3
                  className={`px-4 py-2 font-heading text-base font-bold ${
                    isOpen ? "text-white" : "hidden"
                  }`}
                >
                  {item.heading}
                </h3>
              )}
              <Link
                key={index}
                href={item.href}
                className={`flex items-center gap-4 px-4 py-2 transition-colors ${
                  isActive ? "bg-[#3d5055] font-bold" : "hover:bg-[#4a656b]"
                }`}
              >
                <item.icon />
                {isOpen && <span className="text-sm font-[600]">{item.label}</span>}
              </Link>
            </>
          );
        })}
      </div>

      <button
        onClick={toggleSidebar}
        type="button"
        aria-label="Toggle Sidebar"
        className="absolute top-6 -right-10 rounded-full bg-yellow-400 p-1 text-black"
      >
        {isOpen ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={20} />}
      </button>
    </div>
  );
}
