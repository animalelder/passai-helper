;

// src/app/dashboard/layout.tsx
import type { ReactNode } from "react";



import Sidebar from "@/components/dashboard/sidebar";
import TopHeaderBar from "@/components/dashboard/top-header-bar";





;













;













;













;












export default async function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-1 h-full">
      {/* Sidebar fixed width */}
      <Sidebar />

      {/* Main content grows */}

      <div className="flex-1">
        {/* Top Header Bar */}
        <TopHeaderBar userName={"Ashley Vee"} />

        <section className="flex flex-col flex-1 h-[calc(100%-101px)] overflow-y-clip">
          {children}
        </section>
      </div>
    </div>
  );
}