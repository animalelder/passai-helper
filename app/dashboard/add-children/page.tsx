"use client";

import { useState } from "react";
import Link from "next/link";

import { AiOutlineUpload } from "react-icons/ai";

import NextStepButton from "@/components/dashboard/next-step-button";
import ProgressCircles from "@/components/dashboard/progress-circles";

export default function AddChildrenPage() {
  // Form state
  const [childName, setChildName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  const [schoolEmail, setSchoolEmail] = useState("");

  // Handle profile picture upload and preview
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

      {/* Layout container: form and visual elements */}
      <div className="md:fl ex-row flex flex-col gap-8">
        {/* ================= Form Section ================= */}
        <div className="w-full rounded-md border-2 border-gray-200 bg-white p-5 pb-15 shadow-sm md:w-[37.5rem]">
          <h2 className="mb-4 font-heading text-2xl font-medium text-darkblue-104">
            Add a child profile
          </h2>

          <form className="space-y-4">
            <div>
              {/* Child's Name Field */}
              <div>
                <label className="mb-1 block text-sm font-bold text-darkblue-103">
                  Child&apos;s name
                </label>
                <input
                  type="text"
                  value={childName}
                  onChange={(e) => setChildName(e.target.value)}
                  placeholder="First name"
                  className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103 sm:w-[60%]"
                />
              </div>

              {/* Date of Birth Field with Icon */}
              <div>
                <label className="mb-1 block text-sm font-bold text-darkblue-103">
                  Date of Birth
                </label>
                <div className="relative">
                  <input
                    type="date"
                    value={birthDate}
                    onChange={(e) => setBirthDate(e.target.value)}
                    className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103 sm:w-[50%]"
                  />
                  {/* Calendar Icon inside input */}
                  <div className="absolute top-1/2 right-2 -translate-y-1/2 transform">
                    {/* SVG Calendar Icon */}
                  </div>
                </div>
              </div>

              {/* School Email Field */}
              <div>
                <label className="mb-1 block text-sm font-bold text-darkblue-103">
                  School email address
                </label>
                <input
                  type="text"
                  value={schoolEmail}
                  onChange={(e) => setSchoolEmail(e.target.value)}
                  placeholder="childname@schoolsite.com"
                  className="w-full rounded-lg border-2 px-3 py-1.5 text-sm text-darkblue-103 sm:w-[60%]"
                />
              </div>
            </div>

            {/* Profile Picture Upload & Preview */}
            <div>
              <label className="mb-1 block text-sm font-bold text-darkblue-103">
                Profile Picture
              </label>

              <div className="flex space-x-4">
                <div className="relative h-20 w-20 border border-gray-300 bg-gray-200">
                  {avatarPreview ? (
                    <img
                      src={avatarPreview}
                      alt="Profile preview"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    // Placeholder SVG if no image uploaded
                    <div className="flex h-full w-full items-center justify-center text-gray-400">
                      {/* Avatar icon */}
                    </div>
                  )}
                </div>

                {/* Upload button */}
                <div className="mt-2 flex items-center">
                  <span className="mr-2 text-xs text-gray-500">Upload Pic</span>
                  <button
                    type="button"
                    className="rounded bg-darkblue-103 p-0.5 text-white"
                  >
                    <AiOutlineUpload />
                  </button>
                </div>
              </div>
            </div>

            {/* Save Child Button */}
            <button
              type="button"
              className="inline-flex items-center justify-center rounded bg-paleyellow-101 p-2.5 text-xl font-bold hover:bg-paleyellow-100"
            >
              <span className="mr-2">+</span> Save
            </button>
          </form>
        </div>

        {/* ================= Navigation Buttons ================= */}
        <div className="flex w-[37.5rem] justify-between">
          {/* Add Another Child Button */}
          <button className="inline-flex items-center justify-center rounded bg-darkblue-103 p-2.5 text-xl font-bold text-white hover:bg-darkblue-101">
            <span className="mr-2 text-white">+</span> Add another child
          </button>

          {/* Next Step Button (styled component) */}
          <Link href="/dashboard/add-parent">
            <NextStepButton />
          </Link>
        </div>

        {/* ================= Visuals Section ================= */}
        <ProgressCircles index={1} />
      </div>
    </div>
  );
}
