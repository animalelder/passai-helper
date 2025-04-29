// components/dashboard/WelcomeSection.tsx
"use client";

import NextStepButton from "./next-step-button";

export default function WelcomeSection() {
  return (
    <div className="flex-1 p-10">
      <h1 className="font-heading text-[2rem] font-bold text-darkblue-104">
        Welcome to your PASS.ai Dashboard
      </h1>
      <p className="mb-4 font-heading text-2xl font-bold text-darkblue-103">
        Let&apos;s setup your account!
      </p>

      {/* Setup Steps (Checklist) */}
      <div className="mb-8 space-y-2">
        <p className="text-gray-700">You need to</p>
        <ol className="list-decimal pl-5 font-sans">
          <li>Create your children&apos;s profile</li>
          <li>Add any of your chosen calendars</li>
          <li>Add another parent/guardian (if you wish)</li>
          <li>Connect the children&apos;s school accounts</li>
        </ol>
      </div>

      <NextStepButton />

      {/* Placeholder for visual icons (replace with actual illustrations later) */}
      <div className="mt-10 flex items-center justify-center gap-8">
        <div className="h-32 w-32 rounded-full border-6 border-gray-300"></div>
        <div className="h-32 w-32 rounded-full border-6 border-gray-300"></div>
        <div className="h-32 w-32 rounded-full border-6 border-gray-300"></div>
        <div className="h-32 w-32 rounded-full border-6 border-gray-300"></div>
      </div>
    </div>
  );
}
