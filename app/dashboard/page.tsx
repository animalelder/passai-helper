import type { NextPage } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignOut from "@/components/auth/sign-out";

const DashboardPage: NextPage = async () => {
  const session = await auth.api.getSession({ headers: await headers() });

  if (!session) {
    throw redirect("/signin");
  }
  const user = session.user;

  return (
    <main className="flex min-h-screen flex-col items-start justify-evenly bg-white p-4">
      <h1 className="text-4xl">Dashboard for {user.name}</h1>
      <div className="mt-4">
        <SignOut />
      </div>

      <p className="mt-4">
        This is the dashboard page assigned to{" "}
        <span className="font-mono text-lg">{user.email}</span>
      </p>
    </main>
  );
};

export default DashboardPage;
