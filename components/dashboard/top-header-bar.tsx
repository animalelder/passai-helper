// components/dashboard/TopHeaderBar.tsx
"use client";

import { Bell } from "@/components/dashboard/icons";





interface TopHeaderBarProps {
  userName: string;
}

const date = new Date().toString();
const day = new Date().getDay();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const splitDate = date.split(" ").slice(1, 4);
const finalDate =
  days[day] + ", " + splitDate[0] + splitDate[1] + ", " + splitDate[2];

export default function TopHeaderBar({ userName }: TopHeaderBarProps) {
  return (
    <div className="flex justify-between bg-lightblue-101 shadow-md pt-2 pr-4 pb-2 pl-14 w-full h-[101px]">
      <div className="space-y-2">
        <p className="font-heading font-bold text-darkblue-104 text-3xl">
          Good morning, {userName}!
        </p>
        <p className="font-heading font-bold text-darkblue-103 text-2xl underline underline-offset-4">
          Today is Thursday, May 8, 2025
        </p>
        <span className="sr-only">{finalDate}</span>
      </div>

      <div className="block self-center mr-6">
        <button className="group relative hover:brightness-75 hover:saturate-50 border-2 border-darkblue-103 hover:border-darkblue-102 rounded-full size-12 transition-all duration-500 ease-linear">
          <Bell className="group-hover:brightness-75 m-auto rounded-full size-6 duration-300" />
          <div className="group-hover:hidden top-[-4px] right-[-4px] absolute bg-alert-102 rounded-full size-4 animate-blink-slow"></div>
        </button>
        {/* Additional header actions can go here */}
      </div>
    </div>
  );
}