import Image from "next/image";

import logo from "@/assets/onboarding/pass.ai-logo-horizontal.png";

// components/Logo.tsx
export default function Logo() {
  return (
    <div className="mt-4 flex justify-center">
      <Image
        className="h-auto w-20"
        src={logo}
        alt="passailogo"
      />
    </div>
  );
}
