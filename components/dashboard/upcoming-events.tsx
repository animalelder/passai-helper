import Image from "next/image";



import weeklyCalendar from "@/assets/dashboard/upcoming-events-week.png";





export default function UpcomingEvents() {
  return (
    <div className="h-[500px] w-[500px]">
      <h2 className="mb-4 text-xl font-bold text-darkgreen-105">Upcoming Events</h2>

      <div className="mx-auto">
        <div className="flex h-full w-full items-center justify-center">
          <Image
            src={weeklyCalendar}
            alt="Weekly Calendar"
            className="mx-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}