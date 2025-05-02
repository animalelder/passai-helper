// components/dashboard/TopHeaderBar.tsx
"use client";

import Image from "next/image";

import AshleyAvatar from "@/assets/dashboard/ashley-avatar.png";

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
    <div className="flex w-full justify-between bg-lightblue-101 pt-2 pb-2 pl-14 shadow-xl">
      <div>
        <p className="font-heading text-2xl font-bold text-darkblue-104">
          Good morning, {userName}
        </p>
        <p className="font-heading text-lg font-bold text-darkblue-103 underline underline-offset-5">
          Today is {finalDate}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="rounded-full p-2 hover:bg-amber-100">
          <Image
            src={AshleyAvatar}
            width={36}
            height={36}
            alt="User avatar"
            className="size-9 rounded-full border-3 border-secondary"
          />
          <span className="sr-only">User Avatar</span>
        </button>
        {/* Additional header actions can go here */}
      </div>
    </div>
  );
}
