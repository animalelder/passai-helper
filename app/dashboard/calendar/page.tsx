"use client";

import { type ReactNode } from "react";
import Image from "next/image";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import alexaCard from "@/assets/calendar/day-alexa.png";
import ashleyCard from "@/assets/calendar/day-ashley.png";
import benCard from "@/assets/calendar/day-ben.png";
import johnCard from "@/assets/calendar/day-john.png";
import robertCard from "@/assets/calendar/day-rob.png";





export default function Page() {
  return (
    <div className="flex flex-col mt-4 pt-0.5 w-full min-h-full">
      <div className="mb-4 w-full">
        <h1 className="block font-heading font-semibold text-darkgreen-105 text-3xl">
          My Family Calendar
        </h1>
        <Tabs
          defaultValue="day"
          className="mt-5 w-full"
        >
          <TabsList className="mx-auto">
            <TabsTrigger
              value="day"
              className="px-3 py-1 h-6 text-darkgreen-105 text-xs text-center"
            >
              Day
            </TabsTrigger>
            <TabsTrigger
              value="week"
              className="px-3 py-1 h-6 text-darkgreen-105 text-xs text-center"
            >
              Week
            </TabsTrigger>
            <TabsTrigger
              value="month"
              className="px-3 py-1 h-6 text-darkgreen-105 text-xs text-center"
            >
              Month
            </TabsTrigger>
          </TabsList>
          <TabsContent
            value="day"
            className="min-h-[calc(100%-50px)]"
          >
            <DayCalendar />
          </TabsContent>
          <TabsContent
            value="week"
            className="min-h-[calc(100%-50px)]"
          >
            {/* Week View Content */}
          </TabsContent>
          <TabsContent
            value="month"
            className="min-h-[calc(100%-50px)]"
          >
            {/* Month View Content */}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const DayCalendar = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex flex-row justify-start items-center gap-7 overflow-x-scroll">
        <h2 className="font-heading text-darkblue-104 text-lg">
          Kids&apos; Schedules
        </h2>
        <Image
          src={benCard}
          alt="Ben Card"
          className="w-[447px] h-[201px] cursor-pointer"
        />
        <Image
          src={alexaCard}
          alt="Alexa Card"
          className="w-[447px] h-[201px] cursor-pointer"
        />
        <Image
          src={johnCard}
          alt="John Card"
          className="w-[447px] h-[201px] cursor-pointer"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-7">
        <h2 className="font-heading text-darkblue-104 text-lg">
          Parents&apos; Schedules
        </h2>
        <Image
          src={ashleyCard}
          alt="Ashley Card"
          className="w-[447px] h-[201px] cursor-pointer"
        />
        <Image
          src={robertCard}
          alt="Robert Card"
          className="w-[447px] h-[201px] cursor-pointer"
        />
      </div>
    </div>
  );
};

function UserCard({ children }: { children: ReactNode }) {
  return (
    <div className="flex-col justify-center items-center gap-1.5 px-4 py-3 rounded-[12px] w-[65px] h-[60px] font-semibold text-[9px] text-darkblue-104">
      {children}
    </div>
  );
}