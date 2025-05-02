import Image from "next/image";

import { Badge } from "@/components/ui/badge";
import QuickActions from "@/components/dashboard/quick-actions";
import UpcomingEvents from "@/components/dashboard/upcoming-events";

import alexAvatar from "@/assets/dashboard/alex-avatar.png";
import benAvatar from "@/assets/dashboard/ben-avatar.png";
import johnAvatar from "@/assets/dashboard/john-avatar.png";

// I wrote all of this without running the dev server, so there might be some errors.

export default function DashboardPage() {
  return (
    <main className="flex min-h-full flex-col items-start justify-start border-1 border-alert-102 bg-white pt-6">
      <div className="mx-auto h-72">
        <h3 className="text-2xl font-bold text-darkblue">Overview</h3>
        <div className="my-4 flex max-w-lg items-center justify-evenly">
          <FilterBadge>All</FilterBadge>
          <FilterBadge>Ben</FilterBadge>
          <FilterBadge>Alex</FilterBadge>
          <FilterBadge>John</FilterBadge>
          <FilterBadge>Mom</FilterBadge>
          <FilterBadge>Dad</FilterBadge>
        </div>
        <div className="flex items-center justify-evenly gap-3">
          <ChildCard>
            <p className="inline-flex text-xl font-bold text-darkblue-104">
              <Image
                src={benAvatar}
                alt="Child Avatar"
              />
              &nbsp;&nbsp;Ben
            </p>
            <ul className="mt-4 text-sm text-black">
              <li className="text-sm text-black">7:30 Medicine time</li>
              <li className="text-sm text-black">6pm Soccer practice</li>
              <li className="text-sm text-black">
                8pm Math Homework-Algebra exercise
              </li>
            </ul>
          </ChildCard>
          <ChildCard>
            <p className="inline-flex text-xl font-bold text-darkblue-104">
              <Image
                src={alexAvatar}
                alt="Child Avatar"
              />
              &nbsp;&nbsp;Alex
            </p>
            <ul className="mt-4 text-sm text-black">
              <li className="text-sm text-black">Science Project Due Tomorrow</li>
              <li className="text-sm text-black">
                Trip to Crawford Lake - Pay fees
              </li>
            </ul>
            <ChevronButton />
          </ChildCard>
          <ChildCard>
            <p className="inline-flex text-xl font-bold text-darkblue-104">
              <Image
                src={johnAvatar}
                alt="Child Avatar"
              />
              &nbsp;&nbsp;John
            </p>
            <ul className="mt-4 text-sm text-black">
              <li className="text-sm text-black">5pm Coding class-online</li>
            </ul>
          </ChildCard>
        </div>
      </div>
      <div className="mx-auto flex h-[600px] w-[1100px] items-start justify-around outline-1 outline-alert-105">
        <QuickActions />
        <UpcomingEvents />
      </div>
    </main>
  );
}

const FilterBadge = ({ children }) => {
  return (
    <Badge className="bg-offwhite-300 text-darkblue-102 outline-1 outline-darkblue-104">
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
