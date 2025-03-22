// src/app/(auth)/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="to flex min-h-screen w-screen items-start justify-center bg-emerald-700 bg-gradient-to-br from-amber-50">
      {children}
    </div>
  );
}
