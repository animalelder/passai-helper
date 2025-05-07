"use client";

import React, { useState } from "react";
import Image, { type StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import alexaCard from "@/assets/calendar/day-alexa.png";
import ashleyCard from "@/assets/calendar/day-ashley.png";
import benCard from "@/assets/calendar/day-ben.png";
import johnCard from "@/assets/calendar/day-john.png";
import robertCard from "@/assets/calendar/day-rob.png";
import iconAlexa from "@/assets/calendar/icon-alexa.png";
import iconAll from "@/assets/calendar/icon-all.png";
import iconAshley from "@/assets/calendar/icon-ashley.png";
import iconBen from "@/assets/calendar/icon-ben.png";
import iconJohn from "@/assets/calendar/icon-john.png";
import iconRob from "@/assets/calendar/icon-rob.png";

export default function Page() {
  const [activePerson, setActivePerson] = useState("All");

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
            <div className="flex flex-row gap-4">
              {famMembers.map((member: TFamMember) => {
                return (
                  <FamMemberCard
                    key={member.name}
                    data-active={activePerson === member.name}
                    name={member.name}
                    icon={member.icon}
                    onClick={() => {
                      setActivePerson(member.name);
                    }}
                  />
                );
              })}
            </div>
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
          className="w-[336px] h-auto cursor-pointer"
        />
        <Image
          src={alexaCard}
          alt="Alexa Card"
          className="w-[336px] h-auto cursor-pointer"
        />
        <Image
          src={johnCard}
          alt="John Card"
          className="w-[336px] h-auto cursor-pointer"
        />
      </div>
      <div className="flex flex-row justify-start items-center gap-7">
        <h2 className="font-heading text-darkblue-104 text-lg">
          Parents&apos; Schedules
        </h2>
        <Image
          src={ashleyCard}
          alt="Ashley Card"
          className="w-[336px] h-auto cursor-pointer"
        />
        <Image
          src={robertCard}
          alt="Robert Card"
          className="w-[336px] h-auto cursor-pointer"
        />
      </div>
    </div>
  );
};

type TFamMember = {
  name: string;
  icon: StaticImageData;
};

const famMembers: Array<TFamMember> = [
  { name: "All", icon: iconAll },
  { name: "Ben", icon: iconBen },
  { name: "Alexa", icon: iconAlexa },
  { name: "John", icon: iconJohn },
  { name: "Ashley", icon: iconAshley },
  { name: "Robert", icon: iconRob },
];

function FamMemberCard({
  name,
  icon,
  ...buttonProps
}: TFamMember & React.ComponentPropsWithRef<"button">) {
  return (
    <Button
      {...buttonProps}
      className="flex-col justify-center items-center gap-1.5 data-[active]:bg-darkgreen-100 px-4 py-3 border-2 data-[active]:border-primary border-transparent rounded-[12px] w-[65px] h-[60px]"
    >
      <Image
        src={icon}
        alt={`${name} Icon`}
        className="w-6 h-6"
      />
      <span className="font-semibold text-[9px] text-darkblue-104 text-center">
        {name}
      </span>
    </Button>
  );
}