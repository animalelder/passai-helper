// components/dashboard/TopHeaderBar.tsx
"use client";

interface TopHeaderBarProps {
  userName: string;
}

export default function TopHeaderBar({ userName }: TopHeaderBarProps) {
  return (
    <div className="flex w-full justify-between bg-lightblue-101 pt-2 pl-14 shadow-xl">
      <div>
        <p className="font-heading text-[2rem] font-bold text-darkblue-104">
          Good morning, {userName}
        </p>
        <p className="font-heading text-2xl font-bold text-darkblue-103 underline">
          Today is {new Date().toDateString()}
        </p>
      </div>

      <div className="flex items-center space-x-4">
        <button className="rounded-full p-2 hover:bg-amber-100">
          <span className="text-xl">🏠</span>
        </button>
        {/* Additional header actions can go here */}
      </div>
    </div>
  );
}
