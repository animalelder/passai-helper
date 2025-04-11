import Image from "next/image";

import logo from "@/assets/landing/passai-logo.svg";

// components/Logo.tsx
export default function Logo() {
  return (
    <Image
      width={73}
      height={96}
      className="h-auto w-10"
      src={logo}
      alt="passailogo"
    />
  );
}
