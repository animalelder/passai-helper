// src/app/dashboard/layout.tsx
import type { ReactNode } from "react";

import Sidebar from "@/components/dashboard/sidebar";
import TopHeaderBar from "@/components/dashboard/top-header-bar";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-screen">
      {/* Sidebar fixed width */}
      <Sidebar />

      {/* Main content grows */}

      <div className="flex flex-1 flex-col bg-white">
        {/* Top Header Bar */}
        <TopHeaderBar userName={"Ashley Vee"} />

        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}
