"use client";

interface ProgressCirclesProps {
  index: number; // how many circles should be filled (0–4)
}

export default function ProgressCircles({ index }: ProgressCirclesProps) {
  const totalSteps = 4;

  return (
    <div className="mt-10 flex items-center justify-center gap-8">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-32 w-32 rounded-full border-6 ${
            i < index ? "border-amber-500 bg-amber-300" : "border-gray-300"
          }`}
        />
      ))}
    </div>
  );
}
