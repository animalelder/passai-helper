import Image from "next/image";



import { Badge } from "@/components/ui/badge";
import QuickActions from "@/components/dashboard/quick-actions";
import UpcomingEvents from "@/components/dashboard/upcoming-events";

import alexaCard from "@/assets/dashboard/alexa-card.png";
import ashleyCard from "@/assets/dashboard/ashley-card.png";
import benCard from "@/assets/dashboard/ben-card.png";
import johnCard from "@/assets/dashboard/john-card.png";

export default function DashboardPage() {
  return (
    <section className="flex h-full flex-col items-start justify-start bg-white pt-6">
      <div className="mx-6 h-80 w-full space-y-4">
        <h3 className="mb-5 text-2xl font-bold text-darkgreen-105">
          Summary of the Day
        </h3>
        <div className="my-4 flex max-w-lg items-center justify-evenly opacity-0">
          <FilterBadge>All</FilterBadge>
          <FilterBadge>Ben</FilterBadge>
          <FilterBadge>Alex</FilterBadge>
          <FilterBadge>John</FilterBadge>
          <FilterBadge>Mom</FilterBadge>
          <FilterBadge>Dad</FilterBadge>
        </div>

        <div className="mt-5 mb-8 flex items-center justify-start gap-3 overflow-x-scroll">
          <Image
            src={benCard}
            alt="Ben Card"
            className="cursor-pointer rounded-lg"
          />
          <Image
            src={alexaCard}
            alt="Alexa Card"
            className="cursor-pointer rounded-lg"
          />
          <Image
            src={johnCard}
            alt="John Card"
            className="cursor-pointer rounded-lg"
          />
          <Image
            src={ashleyCard}
            alt="Ashley Card"
            className="cursor-pointer rounded-lg"
          />
        </div>
      </div>
      <div className="mx-10 flex h-[600px] w-full items-start gap-x-5">
        <QuickActions />
        <UpcomingEvents />
      </div>
    </section>
  );
}

const FilterBadge = ({ children }) => {
  return (
    <Badge className="bg-offwhite-300 h-6 w-14 text-darkblue-102 outline-1 outline-darkblue-104">
      {children}
    </Badge>
  );
};

const ChildCard = ({ children }) => {
  return (
    <div className="mx-4 flex h-36 w-80 flex-col rounded-lg bg-gray-300 px-3 py-4">
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