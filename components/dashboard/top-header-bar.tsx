// components/dashboard/TopHeaderBar.tsx
"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

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
    <div className="flex w-full justify-between bg-lightblue-101 pt-2 pr-4 pb-2 pl-14 shadow-xl">
      <div>
        <p className="font-heading text-2xl font-bold text-darkblue-104">
          Good morning, {userName}
        </p>
        <p className="font-heading text-lg font-bold text-darkblue-103 underline underline-offset-5">
          Today is {finalDate}
        </p>
      </div>

      <div className="mr-6 block self-center">
        <Button
          size="icon"
          variant="link"
          className="group max-w-fit rounded-full"
        >
          <Image
            src={AshleyAvatar}
            width={48}
            height={48}
            alt="User avatar"
            className="m-auto size-11 rounded-full border-2 border-secondary transition-all duration-300 ease-in-out group-hover:size-12 group-hover:border-primary"
          />
          <span className="sr-only">User Avatar</span>
        </Button>
        {/* Additional header actions can go here */}
      </div>
    </div>
  );
}
