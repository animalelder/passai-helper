import type { NextPage } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import type { Session } from "@/lib/auth-types";
import Sidebar from "@/components/dashboard/sidebar";
import TopHeaderBar from "@/components/dashboard/top-header-bar";
import WelcomeSection from "@/components/dashboard/welcome-section";

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
        <TopHeaderBar userName={session.user.name} />
        {/* Welcome Message and Setup Area */}
        <WelcomeSection />;
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
