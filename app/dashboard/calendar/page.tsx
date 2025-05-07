"use client";

import React from "react";
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
import alexaMonth from "@/assets/calendar/month-alexa.png";
import allMonth from "@/assets/calendar/month-all.png";
import ashleyMonth from "@/assets/calendar/month-ashley.png";
import benMonth from "@/assets/calendar/month-ben.png";
import monthFallback from "@/assets/calendar/month-fallback.png";
import johnMonth from "@/assets/calendar/month-john.png";
import robertMonth from "@/assets/calendar/month-rob.png";
import alexaWeek from "@/assets/calendar/week-alexa.png";
import allWeek from "@/assets/calendar/week-all.png";
import ashleyWeek from "@/assets/calendar/week-ashley.png";
import benWeek from "@/assets/calendar/week-ben.png";
import weekFallback from "@/assets/calendar/week-fallback.png";
import johnWeek from "@/assets/calendar/week-john.png";
import robertWeek from "@/assets/calendar/week-rob.png";

type TFamMember = {
  name: string;
  icon: StaticImageData;
  week?: StaticImageData;
  month?: StaticImageData;
};

type TMember = Omit<TFamMember, "week" & "month">;

export default function Page() {
  const famMembers: Array<TFamMember> = [
    { name: "All", icon: iconAll, week: allWeek, month: allMonth },
    { name: "Ben", icon: iconBen, week: benWeek, month: benMonth },
    { name: "Alexa", icon: iconAlexa, week: alexaWeek, month: alexaMonth },
    { name: "John", icon: iconJohn, week: johnWeek, month: johnMonth },
    { name: "Ashley", icon: iconAshley, week: ashleyWeek, month: ashleyMonth },
    { name: "Robert", icon: iconRob, month: robertMonth, week: robertWeek },
  ];

  type Name = (typeof famMembers)[number]["name"];
  const [activePerson, setActivePerson] = React.useState<Name>("All");
  const week =
    famMembers!.find((member) => member.name === activePerson)?.week || weekFallback;
  const month =
    famMembers!.find((member) => member.name === activePerson)?.month ||
    monthFallback;

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
              {famMembers.map((member: TMember) => {
                return (
                  <FamMemberSelectorCard
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
            <Image
              src={week || weekFallback}
              alt={`${activePerson} Weekly`}
              placeholder="blur"
              className="w-auto h-auto cursor-pointer"
            />
          </TabsContent>
          <TabsContent
            value="month"
            className="min-h-[calc(100%-50px)]"
          >
            <div className="flex flex-row gap-4">
              {famMembers.map((member: TMember) => {
                return (
                  <FamMemberSelectorCard
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
            <Image
              src={month || monthFallback}
              alt={`${activePerson} Monthly`}
              placeholder="blur"
              className="w-auto h-auto cursor-pointer"
            />
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

function FamMemberSelectorCard({
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
      <span className="font-semibold text-[9px] text-darkblue-104 text-center capitalize">
        {name}
      </span>
    </Button>
  );
}