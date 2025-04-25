// src/app/(auth)/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-screen items-start justify-center">
      {children}
    </div>
  );
}
