import type { NextPage } from "next";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import SignOut from "@/components/auth/sign-out";

const DashboardPage: NextPage = async () => {
  const session = auth.api.getSession({ headers: await headers() });
  if (!session) {
    throw redirect("/signin");
  }

  return (
    <main className="flex flex-1 flex-col items-start justify-center p-4">
      <div>
        <SignOut />
      </div>
      <h1 className="text-4xl">`Dashboard`</h1>
      <pre>${JSON.parse(JSON.stringify(session))}</pre>
      <p className="mt-4">This is the dashboard page</p>
    </main>
  );
};

export default DashboardPage;
