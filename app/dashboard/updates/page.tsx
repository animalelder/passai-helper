"use client";

import { useState } from "react";
import Image from "next/image";

import updatesDone from "@/assets/dashboard/updates-done.png";
import updatesInitial from "@/assets/dashboard/updates-page.png";

export default function Page() {
  const [image, setImage] = useState(updatesInitial);
  const handleChangeImage = () => {
    setImage((prev) => (prev === updatesInitial ? updatesDone : updatesInitial));
  };

  return (
    <div className="relative min-h-full w-full">
      <section className="absolute inset-0 flex flex-1 flex-col gap-4 overflow-y-scroll p-5 px-14">
        {/* <h1 className="font-heading font-bold text-darkgreen-105 text-2xl">
          Updates and Reminders
        </h1> */}
        <Image
          src={image}
          onClick={handleChangeImage}
          alt="Settings Form"
          className="cursor-pointer bg-white"
        />
      </section>
    </div>
  );
}
