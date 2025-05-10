// components/dashboard/TopHeaderBar.tsx
"use client";

import { Fragment, useState } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Bell } from "@/components/dashboard/icons";

import calendarBg from "@/assets/calendar/calendar-bg.png";
import alert1 from "@/assets/dashboard/alert-1.png";
import alert2 from "@/assets/dashboard/alert-2.png";
import alert3 from "@/assets/dashboard/alert-3.png";

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
  days[day] + ", " + splitDate[0] + " " + splitDate[1] + ", " + splitDate[2];

export default function TopHeaderBar({ userName }: TopHeaderBarProps) {
  const [notifications, setNotifications] = useState([alert1, alert2, alert3]);

  return (
    <div className="flex h-[101px] w-full justify-between bg-lightblue-101 pt-2 pr-4 pb-2 pl-14 shadow-md">
      <div className="space-y-2">
        <p className="font-heading text-3xl font-bold text-darkblue-104">
          Good morning, {userName}!
        </p>
        <p
          className="font-heading text-2xl font-bold text-darkblue-103 underline underline-offset-4"
          role="button"
          onClick={() => {
            setNotifications([alert1, alert2, alert3]);
          }}
        >
          Today is Saturday, May 10th, 2025
          <span className="sr-only">{finalDate}</span>
        </p>
      </div>

      <div className="mr-6 block self-center">
        <Popover>
          <PopoverTrigger asChild>
            <button className="group relative size-12 rounded-full border-2 border-darkblue-103 transition-all duration-500 ease-linear hover:border-darkblue-102 hover:brightness-75 hover:saturate-50">
              <Bell className="m-auto size-6 rounded-full duration-300 group-hover:brightness-75" />
              {notifications.length !== 0 && (
                <div className="absolute top-[-4px] right-[-4px] size-4 animate-blink-slow rounded-full bg-alert-102 group-hover:hidden"></div>
              )}
            </button>
          </PopoverTrigger>
          <PopoverContent
            align="end"
            className={cn(
              "relative flex w-[456px] flex-col overflow-hidden rounded-lg bg-white shadow-xl outline-1 outline-zinc-400",
              notifications.length === 0 && "h-[400px] w-[350px] rounded-xl"
            )}
          >
            <div className="relative w-full justify-center text-center font-heading text-base font-semibold text-black">
              {notifications.length === 0 ? (
                <span className="text-lg font-bold tracking-wider text-red-700">
                  There are no new notifications!
                </span>
              ) : (
                "Notifications for Ashley"
              )}

              <span className="absolute right-2 text-darkblue-106">X</span>
            </div>
            <Separator className="my-2 h-1 bg-darkgrey" />
            {notifications.map((notification, index) => (
              <Fragment key={index}>
                <Image
                  src={notification}
                  alt={`Alert ${index + 1}`}
                  onClick={() => {
                    setNotifications((prev) => prev.filter((_, i) => i !== index));
                  }}
                  className="w-full hover:bg-darkblue-101/40"
                />
                <Separator className="bg-darkblue-103 last-of-type:hidden" />
              </Fragment>
            ))}
            {notifications.length === 0 && (
              <>
                <h2 className="mt-5 bg-transparent/15 px-4 text-center font-heading text-2xl font-black text-pretty text-darkblue-106 backdrop-blur-[1.5px] ease-out">
                  <div className="font-sans text-5xl text-green-900">
                    Nice!
                    <br />
                    <br />
                    <span className="text-3xl leading-14">
                      You can relax
                      <br />a little bit
                      <br /> for now!
                    </span>
                  </div>
                </h2>
                <Image
                  src={calendarBg}
                  alt="Calendar Background"
                  className="absolute right-2 bottom-0 -z-10 w-1/2 bg-white object-scale-down"
                />
              </>
            )}
          </PopoverContent>
        </Popover>
        {/* Additional header actions can go here */}
      </div>
    </div>
  );
}