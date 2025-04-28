"use client";

import { useState } from "react";

import { FaBell, FaHome, FaUser, FaUserFriends } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

import LogoAlt from "@/components/logo-alt";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { icon: <FaHome size={20} />, label: "Home" },
    { icon: <FaUserFriends size={20} />, label: "My Kids" },
    { icon: <FaBell size={20} />, label: "Alerts" },
    { icon: <FaUser size={20} />, label: "Account" },
  ];

  return (
    <div
      className={`flex flex-col bg-[#5e8189] text-white transition-all duration-200 ${isOpen ? "w-50" : "w-20"} relative h-screen`}
    >
      <div className="mt-4 mb-8 flex items-center justify-center">
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
        {menuItems.map((item, index) => (
          <div
            key={index}
            className="flex cursor-pointer items-center gap-4 px-4 py-2 hover:bg-[#4a656b]"
          >
            {item.icon}
            {isOpen && <span className="text-sm">{item.label}</span>}
          </div>
        ))}
      </div>

      <button
        onClick={toggleSidebar}
        className="absolute top-6 -right-10 rounded-full bg-yellow-400 p-1 text-black"
      >
        {isOpen ? <IoIosArrowBack size={20} /> : <IoIosArrowForward size={20} />}
      </button>
    </div>
  );
}
