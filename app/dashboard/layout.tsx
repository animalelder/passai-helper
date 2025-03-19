// src/app/(auth)/layout.tsx
import React from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="grid min-h-screen w-screen items-center justify-center">
      {children}
    </div>
  );
}
