import type { NextPage } from "next";
import { headers } from "next/headers";
import Image from "next/image";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import type { Session } from "@/lib/auth-types";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import SignOut from "@/components/auth/sign-out";
import { DashboardSidebar } from "@/components/dashboard-sidebar";

import alexAvatar from "@/assets/dashboard/alex-avatar.png";
import ashleyAvatar from "@/assets/dashboard/ashley-avatar.png";
import benAvatar from "@/assets/dashboard/ben-avatar.png";
import johnAvatar from "@/assets/dashboard/john-avatar.png";

// TODO: So much to be done here, it is just a placeholder for now

const DashboardPage: NextPage = async () => {
  const session: Session | null = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw redirect("/signin");
  }

  return (
    <SidebarProvider>
      <DashboardSidebar />
      <SidebarInset>
        <header className="transition-height transition-width flex h-28 shrink-0 items-center gap-2 bg-lightblue ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
          </div>
          <div className="flex h-full w-fit flex-col">
            <h4 className="text-3xl text-darkblue-104">Good morning, Ashley Vee</h4>
            <h5 className="text-2xl text-lightblue-103 underline underline-offset-2">
              Today is Sunday, April 27, 2025
            </h5>
          </div>
          <Avatar className="ml-auto justify-self-end-safe">
            <AvatarImage
              className="object-cover"
              src={ashleyAvatar.src}
            />
            <AvatarFallback className="border-spacing-1 border-2 border-solid border-darkblue-102 bg-darkblue-104 font-bold text-offwhite-300">
              {session.user.name[0].toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </header>
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
                  <li className="text-sm text-black">
                    Science Project Due Tomorrow
                  </li>
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
      </SidebarInset>

      <div className="mt-4 hidden">
        <SignOut />
      </div>
    </SidebarProvider>
  );
};

const FilterBadge = ({ children }) => {
  return (
    <Badge className="bg-offwhite-300 text-darkblue-102 outline-darkblue-104">
      {children}
    </Badge>
  );
};

const ChildCard = ({ children }) => {
  return <div className="flex h-36 w-80 flex-col bg-grey-200">{children}</div>;
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

export default DashboardPage;
