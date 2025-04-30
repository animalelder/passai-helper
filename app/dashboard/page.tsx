import Image from "next/image";

import { Badge } from "@/components/ui/badge";

import alexAvatar from "@/assets/dashboard/alex-avatar.png";
import benAvatar from "@/assets/dashboard/ben-avatar.png";
import johnAvatar from "@/assets/dashboard/john-avatar.png";

// I wrote all of this without running the dev server, so there might be some errors.

export default async function DashboardPage() {
  return (
    <main className="flex min-h-screen flex-col items-start justify-evenly bg-white p-4">
      <div className="flex flex-1 flex-col gap-4 bg-white px-4 py-10">
        <div className="mx-auto h-72 w-full max-w-3xl rounded-xl bg-muted/50">
          <h3 className="text-xl text-black">Overview</h3>
          <div className="flex items-center justify-evenly">
            <FilterBadge>All</FilterBadge>
            <FilterBadge>Ben</FilterBadge>
            <FilterBadge>Alex</FilterBadge>
            <FilterBadge>John</FilterBadge>
            <FilterBadge>Parent 1</FilterBadge>
            <FilterBadge>Parent 2</FilterBadge>
          </div>
          <div className="flex items-center justify-evenly">
            <ChildCard>
              <p className="text-xl text-darkblue-104">
                <Image
                  src={benAvatar}
                  alt="Child Avatar"
                />
                &nbsp;&nbsp;Ben
              </p>
              <ul className="text-sm text-black">
                <li className="text-sm text-black">7:30 Medicine time</li>
                <li className="text-sm text-black">6pm Soccer practice</li>
                <li className="text-sm text-black">
                  8pm Math Homework-Algebra exercise
                </li>
              </ul>
            </ChildCard>
            <ChildCard>
              <p className="text-xl text-darkblue-104">
                <Image
                  src={alexAvatar}
                  alt="Child Avatar"
                />
                &nbsp;&nbsp;Alex
              </p>
              <ul className="text-sm text-black">
                <li className="text-sm text-black">Science Project Due Tomorrow</li>
                <li className="text-sm text-black">
                  Trip to Crawford Lake - Pay fees
                </li>
              </ul>
              <ChevronButton />
            </ChildCard>
            <ChildCard>
              <p className="text-xl text-darkblue-104">
                <Image
                  src={johnAvatar}
                  alt="Child Avatar"
                />
                &nbsp;&nbsp;John
              </p>
              <ul className="text-sm text-black">
                <li className="text-sm text-black">5pm Coding class-online</li>
              </ul>
            </ChildCard>
          </div>
        </div>
        <div className="mx-auto min-h-full w-full max-w-3xl rounded-xl bg-muted/50"></div>
      </div>
    </main>
  );
}

const FilterBadge = ({ children }) => {
  return (
    <Badge className="bg-offwhite-300 text-darkblue-102 outline-darkblue-104">
      {children}
    </Badge>
  );
};

const ChildCard = ({ children }) => {
  return <div className="bg-grey-200 flex h-36 w-80 flex-col">{children}</div>;
};

function ChevronButton() {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
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
