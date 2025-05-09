import Image from "next/image";



import { Badge } from "@/components/ui/badge";
import QuickActions from "@/components/dashboard/quick-actions";
import UpcomingEvents from "@/components/dashboard/upcoming-events";

import alexaCard from "@/assets/dashboard/alexa-card.png";
import ashleyCard from "@/assets/dashboard/ashley-card.png";
import benCard from "@/assets/dashboard/ben-card.png";
import johnCard from "@/assets/dashboard/john-card.png";
import robCard from "@/assets/dashboard/rob-card.png";

export default function DashboardPage() {
  return (
    <section className="flex flex-col justify-start items-start bg-white pt-6 h-full">
      <div className="space-y-4 mx-6 w-full h-80">
        <h3 className="mb-5 font-bold text-darkgreen-105 text-3xl">
          Summary of the Day
        </h3>
        <div className="flex justify-evenly items-center opacity-0 my-4 max-w-lg">
          <FilterBadge>All</FilterBadge>
          <FilterBadge>Ben</FilterBadge>
          <FilterBadge>Alex</FilterBadge>
          <FilterBadge>John</FilterBadge>
          <FilterBadge>Ashley</FilterBadge>
          <FilterBadge>Rob</FilterBadge>
        </div>

        <div className="w-full h-fit">
          <div className="flex justify-start items-center gap-3 mt-5 mb-8 overflow-x-scroll">
            <Image
              src={benCard}
              alt="Ben Card"
              className="rounded-lg h-[202px] cursor-pointer"
            />
            <Image
              src={alexaCard}
              alt="Alexa Card"
              className="rounded-lg h-[202px] cursor-pointer"
            />
            <Image
              src={johnCard}
              alt="John Card"
              className="rounded-lg h-[202px]"
            />
            <Image
              src={ashleyCard}
              alt="Ashley Card"
              className="rounded-lg h-[202px]"
            />
            <Image
              src={robCard}
              alt="Rob Card"
              className="rounded-lg h-[202px] cursor-pointer"
            />
          </div>
        </div>
      </div>
      <div className="flex justify-start items-start gap-x-32 mx-10 mt-10 px-10 w-full h-[800px]">
        <QuickActions />
        <UpcomingEvents />
      </div>
    </section>
  );
}

const FilterBadge = ({ children }) => {
  return (
    <Badge className="bg-offwhite-300 outline-1 outline-darkblue-104 w-14 h-6 text-darkblue-102">
      {children}
    </Badge>
  );
};

const ChildCard = ({ children }) => {
  return (
    <div className="flex flex-col bg-gray-300 mx-4 px-3 py-4 rounded-lg w-80 h-36">
      {children}
    </div>
  );
};

function ChevronButton() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        height="23.319"
        width="23.319"
        fill="#FCAA2F"
        rx="11.659"
        x=".391"
        y=".295"
      />
      <path
        d="M10.593 16.326l3.857-3.857a.729.729 0 000-1.03l-3.857-3.857"
        stroke="#3D545B"
        strokeLinecap="round"
        strokeWidth="1.457"
      />
    </svg>
  );
}