"use client";

import { useRouter } from "next/navigation";

export default function SignUpRoleSelection() {
  const router = useRouter();

  const handleSelect = (role: "parent" | "school-admin") => {
    localStorage.setItem("selectedRole", role);
    router.push("/register/email-entry");
  };

  return (
    <div className="flex flex-col items-center justify-between px-4 py-6">
      {/* Top: Logo and title */}
      <div className="flex flex-col items-center gap-4 pt-6">
        <h1 className="text-darkblue-104 text-xl font-bold">Sign up as</h1>
      </div>

      {/* Buttons */}
      <div className="mt-8 flex gap-6">
        <button
          onClick={() => handleSelect("parent")}
          className="border-darkblue-104 text-darkblue-104 cursor-pointer rounded-[0.25rem] border-2 px-6 py-2 text-sm font-semibold"
        >
          Parent
        </button>
        <button
          onClick={() => handleSelect("school-admin")}
          className="border-paleyellow-101 text-darkblue-104 cursor-pointer rounded-[0.25rem] border-2 px-6 py-2 text-sm font-semibold"
        >
          School Admin
        </button>
      </div>
    </div>
  );
}
