import type { SVGProps } from "react";





function Overview(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-6"
      {...props}
    >
      <path
        d="M6.2 20h11.6a.5.5 0 00.5-.5V9.6l-5.968-5.304a.5.5 0 00-.664 0L5.7 9.601v9.9a.5.5 0 00.5.5z"
        fill="none"
      />
      <path
        d="M21 12l-2.7-2.4m0 0l-5.968-5.304a.5.5 0 00-.664 0L5.7 9.601m12.6 0v9.9a.5.5 0 01-.5.5H6.2a.5.5 0 01-.5-.5V9.6m0 0L3 12"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}
function Bell(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      className="size-4"
      {...props}
    >
      <path
        d="M12 4a6 6 0 016 6v5c0 3 2 4 2 4H4s2-1 2-4v-5a6 6 0 016-6z"
        fill="#587882"
        fillRule="evenodd"
        stroke="#587882"
        strokeWidth="2"
      />
      <path
        d="M12 4V3"
        stroke="#587882"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M10 19a2 2 0 104 0"
        stroke="#587882"
        strokeWidth="2"
      />
    </svg>
  );
}

function Calendar(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M18.222 5H5.778C4.796 5 4 5.796 4 6.778v12.444C4 20.204 4.796 21 5.778 21h12.444c.982 0 1.778-.796 1.778-1.778V6.778C20 5.796 19.204 5 18.222 5z"
        fill="#FEFCF7"
        stroke="#FEFCF7"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M16 3v4M8 3v4M4 10h16"
        stroke="#587882"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function Updates(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="#D4EAF1"
      viewBox="0 0 19 18"
      {...props}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.25 3a4.5 4.5 0 014.5 4.5v3.75c0 2.25 1.5 3 1.5 3h-12s1.5-.75 1.5-3V7.5A4.5 4.5 0 019.25 3v0z"
        fillRule="evenodd"
        stroke="#FEFCF7"
        strokeWidth="1.5"
      />
      <path
        d="M9.25 3v-.75"
        stroke="#FEFCF7"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
      <path
        d="M7.75 14.25a1.5 1.5 0 003 0"
        stroke="#FEFCF7"
        strokeWidth="1.5"
      />

    </svg>
  );
}

function Settings(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 22 22"
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.283 2.29a2 2 0 00-1.897 1.367L8.97 4.902a.519.519 0 01-.268.3c-.327.16-.641.341-.94.544a.519.519 0 01-.395.082l-1.287-.263a2 2 0 00-2.133.959l-.716 1.24a2 2 0 00.235 2.328l.873.983a.519.519 0 01.126.382 7.656 7.656 0 000 1.085.519.519 0 01-.126.382l-.873.984a2 2 0 00-.235 2.327l.716 1.24a2 2 0 002.133.96l1.287-.264a.52.52 0 01.395.082c.299.203.613.385.94.544a.519.519 0 01.268.3l.415 1.246a2 2 0 001.897 1.367h1.433a2 2 0 001.897-1.367l.415-1.245a.519.519 0 01.268-.301 7.54 7.54 0 00.94-.544.519.519 0 01.395-.082l1.287.264a2 2 0 002.133-.96l.716-1.24a2 2 0 00-.235-2.327l-.872-.984a.519.519 0 01-.127-.382 7.677 7.677 0 000-1.085.519.519 0 01.127-.382l.872-.983a2 2 0 00.235-2.327l-.716-1.241a2 2 0 00-2.133-.96l-1.287.264a.52.52 0 01-.395-.082 7.544 7.544 0 00-.94-.544.52.52 0 01-.268-.3l-.415-1.245a2 2 0 00-1.897-1.368h-1.433z"
        stroke="#FEFCF7"
        strokeWidth="2"
      />
      <path
        d="M12 15a3 3 0 100-6 3 3 0 000 6z"
        fillRule="evenodd"
        stroke="#FEFCF7"
        strokeWidth="2"
      />
    </svg>
  );
}

function Account(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      viewBox="0 0 24 24"
      className="size-6"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M7 18c1.154-.74 2.692-1.111 3.461-1.852.77-.74-1.538-.74-1.538-4.444C8.923 8 12 8 12 8s3.077 0 3.077 3.704c0 3.703-2.308 3.703-1.538 4.444.769.74 2.307 1.111 3.461 1.852"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M12 21a9 9 0 100-18 9 9 0 000 18z"
        fillRule="evenodd"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

function ChildAccount(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      className="size-6"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 18c0-2.25 3-2.25 4.5-3.75.75-.75-1.5-.75-1.5-4.5C4 7.25 5 6 7 6s3 1.25 3 3.75c0 3.75-2.25 3.75-1.5 4.5C10 15.75 13 15.75 13 18"
        stroke="#FEFCF7"
        strokeLinecap="round"
        strokeWidth="2"
      />
      <path
        d="M12 16c.567-.39.803-.429 1.507-.768.551-.265 1.082-.566 1.498-.982.75-.75-1.5-.75-1.5-4.5 0-2.5 1-3.75 3-3.75s3 1.25 3 3.75c0 3.75-2.25 3.75-1.5 4.5 1.5 1.5 4.5 1.5 4.5 3.75"
        stroke="#FEFCF7"
        strokeLinecap="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function LogOut(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      className="stroke-offwhite group-hover:stroke-darkgreen-105 rounded-full outline-darkblue-106 group-hover:outline-2 outline-offset-4 size-5"
      viewBox="0 0 19 19"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.5 16H4c-.332 0-.65-.158-.884-.44a1.665 1.665 0 01-.366-1.06V4c0-.398.132-.78.366-1.06.235-.282.552-.44.884-.44h2.5m6 10.5l3.75-3.75m0 0L12.5 5.5m3.75 3.75h-9"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
      />
    </svg>
  );
}

export { Account, Bell, Calendar, ChildAccount, LogOut, Overview, Settings, Updates };