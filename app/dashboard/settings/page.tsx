"use client";

import { useState } from "react";
import Image from "next/image";

import settings1 from "@/assets/dashboard/settings-1.png";
import settings2 from "@/assets/dashboard/settings-2.png";

export default function Page() {
  const [image, setImage] = useState(settings1);
  const handleChangeImage = () => {
    setImage((prev) => (prev === settings1 ? settings2 : settings1));
  };

  return (
    <div className="relative min-h-full w-full">
      <section className="absolute inset-0 flex flex-1 flex-col gap-4 overflow-y-scroll p-5 px-14">
        <h1 className="font-heading text-2xl font-bold text-darkgreen-105">
          Settings
        </h1>
        <Image
          src={image}
          onClick={handleChangeImage}
          alt="Settings Form"
          className="cursor-pointer bg-white"
        />
        <Image
          src={image}
          onClick={handleChangeImage}
          alt="Settings Form"
          className="bg-white opacity-0"
        />
      </section>
    </div>
  );
}
