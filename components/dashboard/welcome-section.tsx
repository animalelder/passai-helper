// components/dashboard/WelcomeSection.tsx
"use client";

import Link from "next/link";

import NextStepButton from "./next-step-button";
import ProgressCircles from "./progress-circles";

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

      <Link href="/dashboard/add-children">
        <NextStepButton />
      </Link>
      <ProgressCircles index={0} />
    </div>
  );
}
