"use client";

import Link from "next/link";

export default function SvgComponentAlt() {
  return (
    <button>
      <div className="flex justify-center">
        <Link href="/">
          <div className="h-16 w-16">
            <svg
              fill="none"
              viewBox="0 0 60 60"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M60 30c0 16.569-13.431 30-30 30C13.431 60 0 46.569 0 30 0 13.431 13.431 0 30 0c16.569 0 30 13.431 30 30z"
                fill="#FCAA2F"
              />
              <path
                d="M51.974 26.13l-1.628-10.794a1.554 1.554 0 00-.448-.883L35.826 35.544h8.02c.694 0 1.353-.304 1.81-.832l5.736-6.597a2.468 2.468 0 00.581-1.985zm-2.806-12.081c.055-.094-3.971-.019-4.068-.042a1.237 1.237 0 00-.822.31l-5.72 5.074a.298.298 0 01-.083.06L35.86 33.995 49.168 14.05zm-11.49 5.165l-3.686-2.07a2.423 2.423 0 00-1.18-.31h-5.877a2.4 2.4 0 00-1.104.269l-3.72 1.943 2.998 16.498h9.638l2.93-16.33zm-16.43-.016l-5.529-4.88c-.228-.2-.52-.31-.822-.311h-3.354a1.485 1.485 0 00-.846.26L24.02 34.215c-.057-.034-2.629-15.057-2.773-15.017zm-11.224-3.913L8.04 26.205a2.49 2.49 0 00.548 2.054l5.53 6.444a2.4 2.4 0 001.817.841h7.978L10.14 14.924s-.095.236-.116.361zm19.883 34.082c.389.557 1.145.802 1.818.8h4.317a2.09 2.09 0 001.627-.8l3.18-4.08-13.933-.166 2.99 4.246zm13.59-7.933l-6.077 3.012h4.085l2.175-2.785a.15.15 0 00.003-.191.145.145 0 00-.186-.036zm-8.907-5.048h-9.324l1.403 7.757c.022.102.05.203.084.303h6.384l1.453-8.06z"
                fill="#587882"
              />
            </svg>
          </div>
        </Link>
      </div>
    </button>
  );
}
