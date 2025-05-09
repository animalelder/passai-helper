"use client";

import React from "react";
import Image, { type StaticImageData } from "next/image";

import { cn } from "@/lib/utils";
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
import monthButton from "@/assets/calendar/month-button.png";
import monthFallback from "@/assets/calendar/month-fallback.png";
import johnMonth from "@/assets/calendar/month-john.png";
import robertMonth from "@/assets/calendar/month-rob.png";
import plusButton from "@/assets/calendar/plus-button.png";
import alexaWeek from "@/assets/calendar/week-alexa.png";
import allWeek from "@/assets/calendar/week-all.png";
import ashleyWeek from "@/assets/calendar/week-ashley.png";
import benWeek from "@/assets/calendar/week-ben.png";
import weekButton from "@/assets/calendar/week-button.png";
import weekFallback from "@/assets/calendar/week-fallback.png";
import johnWeek from "@/assets/calendar/week-john.png";
import robertWeek from "@/assets/calendar/week-rob.png";

type TFamMember = {
  name: TName;
  icon: StaticImageData;
  week?: StaticImageData;
  month?: StaticImageData;
  activePerson?: boolean;
  border?: string;
};
type TName = "All" | "Ben" | "Alexa" | "John" | "Ashley" | "Robert";

type TMember = Omit<TFamMember, "week" & "month">;

// type TActivePerson = keyof TName;

export default function Page() {
  const famMembers: Array<TFamMember> = [
    {
      name: "All",
      icon: iconAll,
      week: allWeek,
      month: allMonth,
      border: "border-all",
    },
    {
      name: "Ben",
      icon: iconBen,
      week: benWeek,
      month: benMonth,
      border: "border-ben",
    },
    {
      name: "Alexa",
      icon: iconAlexa,
      week: alexaWeek,
      month: alexaMonth,
      border: "border-alexa",
    },
    {
      name: "John",
      icon: iconJohn,
      week: johnWeek,
      month: johnMonth,
      border: "border-john",
    },
    {
      name: "Ashley",
      icon: iconAshley,
      week: ashleyWeek,
      month: ashleyMonth,
      border: "border-ashley",
    },
    {
      name: "Robert",
      icon: iconRob,
      month: robertMonth,
      week: robertWeek,
      border: "border-rob",
    },
  ] as const;

  type FamName = (typeof famMembers)[number]["name"];

  const [activePerson, setActivePerson] = React.useState<TName | FamName>("All");
  // const active = famMembers[activePerson];
  // console.log("active", active);
  const activeOne = famMembers.find((member) => member.name === activePerson)?.name;
  // console.log("activeOne", activeOne);

  const week = famMembers.find((member) => member.name === activePerson)
    ?.week as StaticImageData;
  const month = famMembers.find((member) => member.name === activePerson)
    ?.month as StaticImageData;

  return (
    <div className="flex flex-col mt-4 pt-0.5 w-full min-h-full">
      <div className="mb-4 ml-8 w-full">
        <h1 className="block font-heading font-bold text-darkgreen-105 text-xl">
          My Family Calendar
        </h1>
        <Tabs
          defaultValue="day"
          className="mt-5 w-full"
        >
          <TabsList className="my-2 w-fit">
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
            className="relative min-h-full overflow-y-scroll"
          >
            <div className="flex flex-row justify-between w-[1080px]">
              <div className="flex flex-row gap-0.5">
                {famMembers.map((member: TFamMember) => {
                  return (
                    <FamMemberSelectorCard
                      key={member.name}
                      name={member.name}
                      icon={member.icon}
                      className={cn(
                        `${activeOne === member.name && "border-primary bg-darkgreen-100 *:text-darkgreen-106"}`,
                        activeOne === member.name && `${member.border}`
                      )}
                      onClick={() => {
                        setActivePerson(member.name);
                      }}
                    />
                  );
                })}
              </div>
              <h2 className="mx-auto font-heading font-bold text-darkblue text-2xl">
                Week of 5/4/2025 - 5/10/2025
              </h2>
              <div className="inline-flex justify-center items-center gap-4">
                <Image
                  src={plusButton}
                  alt="Plus Button"
                  role="button"
                  unoptimized
                  className="cursor-pointer"
                />

                <Image
                  src={weekButton}
                  alt="Week Button"
                  role="button"
                  unoptimized
                  className="cursor-pointer"
                />
              </div>
            </div>
            <Image
              src={week || weekFallback}
              alt={`${activePerson} Weekly`}
              placeholder="blur"
              className="w-[1080px] h-auto cursor-pointer"
            />
          </TabsContent>
          <TabsContent
            value="month"
            className="min-h-full overflow-y-scroll"
          >
            <div className="flex justify-between w-[1080px]">
              <div className="flex flex-row gap-0.5">
                {famMembers.map((member: TMember) => {
                  return (
                    <FamMemberSelectorCard
                      key={member.name}
                      name={member.name}
                      icon={member.icon}
                      className={cn(
                        `${activeOne === member.name && "border-primary bg-darkgreen-100 *:text-darkgreen-106"}`,
                        activeOne === member.name && `${member.border}`
                      )}
                      onClick={() => {
                        setActivePerson(member.name);
                      }}
                    />
                  );
                })}
              </div>
              <h2 className="mx-auto font-heading font-bold text-darkblue text-2xl">
                May 2025
              </h2>
              <div className="inline-flex justify-center items-center gap-4">
                <Image
                  src={plusButton}
                  alt="Plus Button"
                  role="button"
                  unoptimized
                  className="cursor-pointer"
                />

                <Image
                  src={monthButton}
                  alt="Week Button"
                  unoptimized
                  role="button"
                  className="cursor-pointer"
                />
              </div>
            </div>
            <Image
              src={month || monthFallback}
              alt={`${activePerson} Monthly`}
              placeholder="blur"
              className="w-[1080px] h-auto cursor-pointer"
            />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

const DayCalendar = () => {
  return (
    <div className="flex flex-col gap-10 ml-4">
      <h2 className="w-full font-heading font-bold text-darkblue-104 text-2xl">
        Kids&apos; Schedules
      </h2>
      <div className="flex flex-row justify-start items-center gap-x-7 h-auto">
        <Image
          src={benCard}
          placeholder="blur"
          blurDataURL={benCard.blurDataURL}
          alt="Ben Card"
          className="w-[425px] cursor-pointer"
        />
        <Image
          src={alexaCard}
          alt="Alexa Card"
          className="w-[425px] cursor-pointer"
        />
        <Image
          src={johnCard}
          alt="John Card"
          className="w-[425px] cursor-pointer"
        />
      </div>
      <h2 className="font-heading font-bold text-darkblue-104 text-2xl">
        Parents&apos; Schedules
      </h2>
      <div className="flex flex-row justify-start items-center gap-7">
        <Image
          src={ashleyCard}
          alt="Ashley Card"
          className="min-w-[336px] cursor-pointer"
        />
        <Image
          src={robertCard}
          alt="Robert Card"
          className="min-w-[336px] cursor-pointer"
        />
      </div>
    </div>
  );
};

function FamMemberSelectorCard({
  name,
  icon,
  className,
  ...buttonProps
}: TFamMember & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <Button
      {...buttonProps}
      variant="selector"
      size="selector"
      data-active="false"
      className={cn(
        "mb-4 h-[65px] max-w-[60px] flex-col items-center justify-center gap-1.5 rounded-[12px] border-2 border-transparent bg-transparent",
        className
      )}
    >
      <Image
        src={icon}
        alt={`${name} Icon`}
        quality={100}
        className="size-7"
      />
      <span className="font-semibold text-darkblue-104 text-xs text-center capitalize tracking-wider">
        {name}
      </span>
    </Button>
  );
}