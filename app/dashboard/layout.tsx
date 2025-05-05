;
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
    <div className="flex h-full flex-1">
      {/* Sidebar fixed width */}
      <Sidebar />

      {/* Main content grows */}

      <div className="flex-1">
        {/* Top Header Bar */}
        <TopHeaderBar userName={"Ashley Vee"} />

        <section className="flex h-full flex-1 flex-col">{children}</section>
      </div>
    </div>
  );
}