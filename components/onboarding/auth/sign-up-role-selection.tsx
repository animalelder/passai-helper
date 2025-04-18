"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import parentIcon from "@/assets/onboarding/parent-icon.svg";
import schoolAdminIcon from "@/assets/onboarding/school-admin-icon.svg";

export default function SignUpRoleSelection() {
  const [selectedRole, setSelectedRole] = useState<"parent" | "school-admin" | null>(
    null
  );

  const handleSelect = (role: "parent" | "school-admin") => {
    localStorage.setItem("selectedRole", role);
    setSelectedRole(role);
  };

  return (
    <div className="flex flex-col items-center justify-between px-4 py-6">
      {/* Title */}
      <div className="flex flex-col items-center gap-4 pt-6">
        <h1 className="text-darkblue-104 text-xl font-bold">Sign up as</h1>
      </div>

      {/* Role Selection */}
      <div className="text-darkblue-104 font-openSans mt-8 flex flex-col gap-6 text-center leading-[0.9rem]">
        <button
          type="button"
          onClick={() => handleSelect("parent")}
          className={`border-darkblue-102 inline-flex cursor-pointer flex-col items-center justify-end gap-[0.625rem] rounded border px-12 py-4 text-sm font-semibold transition-shadow ${
            selectedRole === "parent"
              ? "shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
              : ""
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src={parentIcon}
              alt="parent icon"
              width={64}
              height={64}
            />
            <p className="text-lg">Parent</p>
          </div>
        </button>

        <button
          type="button"
          onClick={() => handleSelect("school-admin")}
          className={`inline-flex cursor-pointer flex-col items-center justify-end gap-[0.625rem] rounded border border-yellow-500 px-12 py-4 text-sm font-semibold transition-shadow ${
            selectedRole === "school-admin"
              ? "shadow-[inset_0_4px_4px_rgba(0,0,0,0.25)]"
              : ""
          }`}
        >
          <div className="flex flex-col items-center gap-2">
            <Image
              src={schoolAdminIcon}
              alt="school admin icon"
              className="text-yellow-500"
              width={64}
              height={64}
            />
            <p className="text-lg">School Admin</p>
          </div>
        </button>
      </div>

      {/* Spacer for button with smooth appearance */}
      <div className="mt-10 h-10">
        {selectedRole && (
          <>
            {selectedRole === "parent" ? (
              <Link
                href="\onboarding\sign-up"
                className="inline-block rounded bg-yellow-500 px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-yellow-600"
              >
                Next
              </Link>
            ) : (
              <button
                type="button"
                disabled
                className="inline-block cursor-not-allowed rounded bg-gray-300 px-6 py-2 text-sm font-semibold text-white"
              >
                Coming Soon
              </button>
            )}
          </>
        )}
      </div>
    </div>
  );
}
