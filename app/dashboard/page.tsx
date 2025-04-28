import type { NextPage } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import type { Session } from "@/lib/auth-types";
import Sidebar from "@/components/dashboard/sidebar";

// TODO: So much to be done here, it is just a placeholder for now

const DashboardPage: NextPage = async () => {
  const session: Session | null = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw redirect("/signin");
  }

  return (
    <div className="flex min-h-screen w-full">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-1 flex-col bg-white">
        {/* Top Header Bar */}
        <div className="flex w-full justify-between bg-lightblue-101 pt-2 pl-14 shadow-xl">
          <div>
            <p className="font-heading text-[2rem] font-bold text-darkblue-104">
              Good morning, {session.user.name}
            </p>
            <p className="font-heading text-2xl font-bold text-darkblue-103 underline">
              Today is {new Date().toDateString()}
            </p>
          </div>

          <div className="flex items-center space-x-4">
            <button className="rounded-full p-2 hover:bg-amber-100">
              <span className="text-xl">🏠</span>
            </button>
            {/* Additional header actions can go here */}
          </div>
        </div>
        {/* Welcome Message and Setup Area */}
        <div className="flex-1 p-10">
          <h1 className="font-heading text-[2rem] font-bold text-darkblue-104">
            Welcome to your PASS.ai Dashboard
          </h1>
          <p className="mb-4 font-heading text-2xl font-bold text-darkblue-103 underline">
            Let&apos;s setup your account!
          </p>

          {/* Setup Steps (Checklist) */}
          <div className="mb-8 space-y-2">
            <p className="text-gray-700">You need to:</p>
            <ol className="list-decimal pl-5 text-gray-600">
              <li>Create your children&apos;s profile</li>
              <li>Add any of your chosen calendars</li>
              <li>Add another parent/guardian (if you wish)</li>
              <li>Connect the children&apos;s school accounts</li>
            </ol>
          </div>

          {/* Placeholder for visual icons (you can replace with actual illustrations later) */}
          <div className="mt-10 flex items-center justify-center gap-8">
            <div className="h-32 w-32 rounded-full border-4 border-dashed border-gray-300"></div>
            <div className="h-32 w-32 rounded-full border-4 border-dashed border-gray-300"></div>
            <div className="h-32 w-32 rounded-full border-4 border-dashed border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <main className="flex min-h-screen flex-col items-start justify-evenly bg-white p-4">
  //     <div className="flex items-center gap-4">
  //       <h1 className="text-4xl">Dashboard for {session.user.name}</h1>
  //       <Avatar className="hidden size-12 sm:flex">
  //         <AvatarImage
  //           className="object-cover"
  //           src={session.user.image || undefined}
  //         />
  //         <AvatarFallback className="border-spacing-1 animate-spin border-2 border-amber-950 bg-emerald-900 font-bold text-white">
  //           {session.user.name[0].toUpperCase()}
  //         </AvatarFallback>
  //       </Avatar>
  //     </div>

  //     <div className="mt-4">
  //       <SignOut />
  //     </div>

  //     <p className="mt-4">
  //       This is the dashboard page assigned to{" "}
  //       <span className="font-mono text-lg">{session.user.email}</span>
  //     </p>
  //   </main>
  // );
};

export default DashboardPage;
