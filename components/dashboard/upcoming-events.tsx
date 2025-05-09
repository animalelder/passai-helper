"use client";

import { useState } from "react";
import Image from "next/image";

import monthlyCalendar from "@/assets/dashboard/monthly-cal.png";
import weeklyCalendar from "@/assets/dashboard/upcoming-events-week.png";

export default function UpcomingEvents() {
  const [image, setImage] = useState(weeklyCalendar);

  const handleChangeImage = () => {
    setImage((prev) => (prev === weeklyCalendar ? monthlyCalendar : weeklyCalendar));
  };
  return (
    <div className="w-[500px] h-[500px]">
      <h2 className="mb-4 font-bold text-darkgreen-105 text-xl">Upcoming Events</h2>

      <div className="mx-auto">
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={image}
            onClick={() => handleChangeImage()}
            alt="Weekly Calendar"
            className="mx-auto w-[500px] cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
