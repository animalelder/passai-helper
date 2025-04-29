"use client";

import { useState } from "react";

import { ChevronRight } from "lucide-react";

export default function AddChildrenPage() {
  const [childName, setChildName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [schoolEmail, setSchoolEmail] = useState("");

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setAvatarFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatarPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="min-h-screen bg-white p-4 pl-10">
      {/* Page Heading */}
      <h1 className="font- mb-6 text-4xl font-bold text-darkblue-103">
        Let&apos;s start adding and creating your children&apos;s profile/s
      </h1>

      <div className="md:fl ex-row flex flex-col gap-8">
        {/* Form Section */}
        <div className="w-full rounded-md border-2 border-gray-200 bg-white p-5 shadow-sm md:w-[37.5rem]">
          <h2 className="mb-4 font-heading text-2xl font-medium text-darkblue-104">
            Add a child profile
          </h2>

          <form className="space-y-4">
            <div>
              <label className="mb-1 block text-sm font-bold text-darkblue-103">
                Child&apos;s name
              </label>
              <input
                type="text"
                value={childName}
                onChange={(e) => setChildName(e.target.value)}
                placeholder="First name"
                className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-darkblue-103">
                Date of Birth
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={birthDate}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="First name"
                  className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103"
                />
                <div className="absolute top-1/2 right-2 -translate-y-1/2 transform">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                  >
                    <rect
                      width="18"
                      height="18"
                      x="3"
                      y="4"
                      rx="2"
                      ry="2"
                    ></rect>
                    <line
                      x1="16"
                      x2="16"
                      y1="2"
                      y2="6"
                    ></line>
                    <line
                      x1="8"
                      x2="8"
                      y1="2"
                      y2="6"
                    ></line>
                    <line
                      x1="3"
                      x2="21"
                      y1="10"
                      y2="10"
                    ></line>
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <label className="mb-1 block text-sm font-bold text-darkblue-103">
                School email address
              </label>
              <input
                type="text"
                value={schoolEmail}
                onChange={(e) => setSchoolEmail(e.target.value)}
                placeholder="childname@schoolsite.com"
                className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103"
              />
            </div>

            <div>
              <label className="mb-1 block text-sm font-bold text-darkblue-103">
                Upload a profile pic
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="w-full rounded border border-gray-300 px-3 py-1.5 text-sm"
              />
            </div>

            {/* Profile Preview */}
            <div>
              <label className="mb-1 block text-xs font-medium text-gray-600">
                Profile Picture
              </label>
              <div className="relative h-16 w-16 border border-gray-300 bg-gray-200">
                {avatarPreview ? (
                  <img
                    src={avatarPreview}
                    alt="Profile preview"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                      <circle
                        cx="12"
                        cy="7"
                        r="4"
                      ></circle>
                    </svg>
                  </div>
                )}
              </div>

              <div className="mt-2 flex items-center">
                <span className="mr-2 text-xs text-gray-500">Upload Pic</span>
                <button
                  type="button"
                  className="rounded bg-teal-600 p-0.5 text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line
                      x1="12"
                      x2="12"
                      y1="3"
                      y2="15"
                    ></line>
                  </svg>
                </button>
              </div>
            </div>

            {/* Save Button */}
            <button
              type="button"
              className="w-full rounded bg-amber-500 py-1.5 text-sm font-medium text-white hover:bg-amber-600"
            >
              Save
            </button>
          </form>

          {/* Add Another Child Button */}
          <button
            type="button"
            className="mt-4 w-full rounded border border-gray-300 bg-white py-1.5 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            + Add another child
          </button>
        </div>

        {/* Progress & Illustration Section */}
        <div className="flex flex-1 flex-col items-center">
          {/* Progress Circles */}
          <div className="mb-8 flex gap-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-500 bg-amber-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-amber-500"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <div className="h-12 w-12 rounded-full border-2 border-gray-200"></div>
            <div className="h-12 w-12 rounded-full border-2 border-gray-200"></div>
            <div className="h-12 w-12 rounded-full border-2 border-gray-200"></div>
          </div>

          {/* Illustration */}
          <div className="relative h-64 w-full max-w-md">
            {/* This is a simplified version of the person illustration */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 transform">
              <svg
                width="160"
                height="220"
                viewBox="0 0 160 220"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Head */}
                <circle
                  cx="80"
                  cy="40"
                  r="20"
                  fill="#9CA3AF"
                />
                {/* Body */}
                <rect
                  x="65"
                  y="60"
                  width="30"
                  height="100"
                  fill="#9CA3AF"
                />
                {/* Arms */}
                <rect
                  x="40"
                  y="70"
                  width="25"
                  height="10"
                  fill="#9CA3AF"
                />
                <rect
                  x="95"
                  y="70"
                  width="25"
                  height="10"
                  fill="#9CA3AF"
                />
                {/* Legs */}
                <rect
                  x="65"
                  y="160"
                  width="10"
                  height="60"
                  fill="#9CA3AF"
                />
                <rect
                  x="85"
                  y="160"
                  width="10"
                  height="60"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>

          {/* Continue Button */}
          <button
            type="button"
            className="mt-6 flex items-center gap-2 rounded border border-gray-300 px-4 py-1.5 text-sm text-gray-700 hover:bg-gray-50"
          >
            Continue to next step
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}
