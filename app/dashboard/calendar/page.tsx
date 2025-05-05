import Image from "next/image";

import alexaCard from "@/assets/calendar/alexa-card.png";
import ashleyCard from "@/assets/calendar/ashley-card.png";
import benCard from "@/assets/calendar/ben-card.png";
import johnCard from "@/assets/calendar/john-card.png";
import robertCard from "@/assets/calendar/robert-card.png";

export default function Page() {
  return (
    <div className="flex min-h-full w-full flex-wrap pt-6">
      <div className="mb-4 w-full">
        <h1 className="block font-heading text-3xl font-semibold text-[#233237]">
          Calendar Page
        </h1>
      </div>
      <Image
        src={benCard}
        alt="Ben Card"
        className="h-[201px] w-[447px] cursor-pointer"
      />
      <Image
        src={alexaCard}
        alt="Alexa Card"
        className="h-[201px] w-[447px] cursor-pointer"
      />
      <Image
        src={johnCard}
        alt="John Card"
        className="h-[201px] w-[447px] cursor-pointer"
      />
      <Image
        src={ashleyCard}
        alt="Ashley Card"
        className="h-[201px] w-[447px] cursor-pointer"
      />
      <Image
        src={robertCard}
        alt="Robert Card"
        className="h-[201px] w-[447px] cursor-pointer"
      />
    </div>
  );
}
