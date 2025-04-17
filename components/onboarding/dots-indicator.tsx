// components/DotsIndicator.tsx
export default function DotsIndicator({ current }: { current: number }) {
  return (
    <div className="my-4 flex justify-center">
      <div className="flex gap-2">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className={`h-2 w-2 rounded-full ${
              i === current ? "bg-darkblue-104" : "bg-darkblue-101"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
