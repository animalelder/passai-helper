"use client";

import { ChevronRight } from "lucide-react";

export default function NextStepButton() {
  return (
    <button className="group relative inline-flex items-center overflow-hidden rounded-md border-3 border-darkblue-102 px-4 py-2 transition duration-300 ease-in-out hover:text-white focus:outline-none active:scale-95">
      {/* Sliding background */}
      <span className="absolute inset-0 z-0 h-full w-0 bg-darkblue-102 transition-all duration-400 ease-in-out group-hover:w-full group-active:bg-darkblue-103" />

      {/* Content */}
      <span className="relative z-10 flex items-center font-heading text-xl font-bold text-darkblue-102 group-hover:text-white">
        Continue to next step
        <ChevronRight className="ml-2 h-6 w-6" />
      </span>
    </button>
  );
}
