import Image from "next/image";

import accountAsh1 from "@/assets/dashboard/account-ash-1.png";
import accountAsh2 from "@/assets/dashboard/account-ash-2.png";
import accountAsh3 from "@/assets/dashboard/account-ash-3.png";
import accountRob1 from "@/assets/dashboard/account-rob-1.png";
import accountRob2 from "@/assets/dashboard/account-rob-2.png";
import accountRob3 from "@/assets/dashboard/account-rob-3.png";

export default function Page() {
  return (
    <section className="flex h-full w-full flex-row gap-[256px] px-14 py-5">
      <div className="inline-flex w-96 flex-col items-end justify-start gap-5">
        <h1 className="justify-start self-stretch font-heading text-2xl font-bold text-darkgreen-105">
          My Profile
        </h1>
        <Image
          className="h-48 w-96 cursor-pointer"
          src={accountAsh1}
          alt="My Profile 1"
        />
        <Image
          className="h-36 w-96 cursor-pointer"
          src={accountAsh2}
          alt="My Profile 2"
        />
        <Image
          className="h-28 w-96 cursor-pointer"
          src={accountAsh3}
          alt="My Profile 3"
        />
      </div>
      <div className="inline-flex w-96 flex-col items-end justify-start gap-5">
        <h1 className="justify-start self-stretch font-heading text-2xl font-bold text-darkgreen-105">
          Robert’s Profile
        </h1>
        <Image
          className="h-48 w-96 cursor-pointer"
          src={accountRob1}
          alt="Robert's Profile 1"
        />
        <Image
          className="h-36 w-96 cursor-pointer"
          src={accountRob2}
          alt="Robert's Profile 2"
        />
        <Image
          className="h-28 w-96 cursor-pointer"
          src={accountRob3}
          alt="Robert's Profile 3"
        />
      </div>
    </section>
  );
}
