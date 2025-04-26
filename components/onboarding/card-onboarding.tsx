import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import onboarding1 from "@/assets/onboarding/onboarding-block-1.png";
import onboarding2 from "@/assets/onboarding/onboarding-block-2.png";
import onboarding3 from "@/assets/onboarding/onboarding-block-3.png";

import DotsIndicator from "./dots-indicator";

export default function CardOnboarding() {
  const [index, setIndex] = useState(1); // Tracks the current onboarding step (1-based)

  // Advances to the next step
  const goToNext = () => setIndex((prev) => prev + 1);
  const goBack = () => setIndex((prev) => prev - 1);

  // Onboarding step data
  const steps = [
    {
      step: "Welcome to your School Support Agent, ",
      description:
        "To get started, create an account or Login using your existing account",
      extra: "PASS.ai",
      image: onboarding1,
    },
    {
      step: "Controlled by you, Powered by AI",
      description:
        "You can connect any school related apps and our smart  AI engine will do the rest",
      extra: "",
      image: onboarding2,
    },

    {
      step: "All communications in one place, ",
      description:
        "Never worry about missed class parties or conflict in appointments",
      extra: "PASS.ai",
      image: onboarding3,
    },
  ];

  // Arrow visibility logic
  const showLeft = index > 1;
  const showRight = index < 3;

  return (
    <div className="flex flex-col items-center gap-4 py-6">
      {/* Image */}
      <Image
        src={steps[index - 1].image}
        alt="onboarding"
        width={368}
        height={368}
        className="h-[23rem] w-[23rem] object-cover"
      />

      {/* Title */}
      <h2 className="mx-auto w-[16rem] text-center font-heading text-base font-bold text-black">
        {steps[index - 1].step}
        {steps[index - 1].extra && (
          <span className="text-darkblue-104"> {steps[index - 1].extra}</span>
        )}
      </h2>

      {/* Description */}
      <p className="font-openSans mx-auto w-[18rem] text-center text-[0.875rem] font-normal text-black">
        {steps[index - 1].description}
      </p>

      {/* Navigation arrows */}
      <div className="mt-2 flex w-[18rem] justify-between px-4">
        <ArrowLeft
          onClick={goBack}
          className={cn(
            "h-5 w-5 cursor-pointer text-black",
            !showLeft && "invisible"
          )}
        />
        <ArrowRight
          onClick={goToNext}
          className={cn(
            "h-5 w-5 cursor-pointer text-black",
            !showRight && "invisible"
          )}
        />
      </div>

      {/* Dots */}
      <DotsIndicator current={index} />

      {/* Get Started Button */}
      <Button className="mt-2 w-[10rem] bg-[#FF7043] text-white hover:bg-[#e95f37]">
        <Link
          href="\onboarding\sign-up-as"
          className="w-full text-center font-sans text-[0.75rem] font-semibold"
        >
          Get Started
        </Link>
      </Button>

      {/* Account link */}
      <Link
        href="\onboarding\sign-in\"
        className="mt-1 text-center text-[0.875rem] font-bold text-darkblue-102 underline"
      >
        I already have an account
      </Link>
    </div>
  );
}
