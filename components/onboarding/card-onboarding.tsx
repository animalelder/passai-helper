import { useState } from "react";
import Link from "next/link";

import { ArrowLeft, ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import onboard

import DotsIndicator from "./dots-indicator";

export default function CardOnboarding() {
  const [index, setIndex] = useState(1); // Tracks the current onboarding step (1-based)

  // Advances to the next step
  const goToNext = () => setIndex((prev) => prev + 1);
  const goBack = () => setIndex((prev) => prev - 1);

  // Onboarding step data
  const steps = [
    {
      step: "Welcome to your School Support Agent, PASS.ai",
      description:
        "To get started, create an account or Login using your existing account",
    },
    {
      step: "Controlled by you, Powered by AI",
      description:
        "You can connect any school related apps and our smart  AI engine will do the rest",
    },
    {
      step: "All communications in one place, PASS.ai",
      description:
        "Never worry about missed class parties or conflict in appointments",
    },
  ];

  // Arrow visibility logic
  const showLeft = index > 1;
  const showRight = index < 3;

  return (
    <div className="text-center">
      {/* Add image */}

      {/* Add Header Text */}
      {/* Add sub text */}
     
      {/* Onboarding step card */}
      <div className="bg-darkblue-101 flex h-[20rem] w-[19.5rem] flex-col justify-between rounded-lg p-6 text-center shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
        {/* Step description */}
        <p className="font-heading text-sm font-semibold">
          {steps[index - 1].description}
        </p>

        {/* Step title */}
        <div className="text-center">
          <h3 className="font-sans text-lg text-black">{steps[index - 1].step}</h3>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-between">
          <ArrowLeft
            onClick={goBack}
            className={cn(
              "h-4 w-4 cursor-pointer text-black",
              !showLeft && "invisible"
            )}
          />

          <ArrowRight
            onClick={goToNext}
            className={cn(
              "h-4 w-4 cursor-pointer text-black",
              !showRight && "invisible"
            )}
          />
        </div>
      </div>

      {/* Pagination dots */}
      <DotsIndicator current={index} />

      <Button asChild>
        <Link href="/">{index !== 3 ? "Skip" : "Get Started"}</Link>
      </Button>
    </div>
  );
}
