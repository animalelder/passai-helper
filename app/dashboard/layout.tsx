// src/app/dashboard/layout.tsx
import React from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

import { auth } from "@/lib/auth";
import type { Session } from "@/lib/auth-types";
import Sidebar from "@/components/dashboard/sidebar";
import TopHeaderBar from "@/components/dashboard/top-header-bar";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session: Session | null = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    throw redirect("/signin");
  }

  return (
    <div className="flex min-h-screen w-screen bg-gradient-to-br from-amber-50 to-emerald-700">
      {/* Sidebar fixed width */}
      <Sidebar />

      {/* Main content grows */}

      <div className="flex flex-1 flex-col bg-white">
        {/* Top Header Bar */}
        <TopHeaderBar userName={session.user.name} />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
