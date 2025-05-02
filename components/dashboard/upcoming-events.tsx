import Image from "next/image";

import weeklyCalendar from "@/assets/dashboard/weekly-cal.png";

export default function UpcomingEvents() {
  return (
    <div className="h-[500px] w-[500px]">
      <h2 className="mb-4 text-xl font-bold text-darkblue-104">Upcoming Events</h2>

      <div className="mx-auto h-[275px] w-[480px]">
        <div className="flex h-full w-full items-center justify-center pt-24">
          <Image
            src={weeklyCalendar}
            alt="Weekly Calendar"
            className="mx-auto"
          />
        </div>
      </div>
    </div>
  );
}
