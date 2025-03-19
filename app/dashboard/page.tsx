import type { NextPage } from "next";

import SignOut from "@/components/auth/sign-out";

const DashboardPage: NextPage = () => {
  return (
    <main className="flex flex-1 flex-col items-start justify-center p-4">
      <div>
        <SignOut />
      </div>
      <h1 className="text-4xl">Dashboard</h1>
      <p className="mt-4">This is the dashboard page</p>
    </main>
  );
};

export default DashboardPage;
