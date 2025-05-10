import Image from "next/image";



import kidsProfiles from "@/assets/dashboard/kids-profiles.png";





export default function Page() {
  return (
    <div className="h-full w-full px-14 py-5">
      <h1 className="font-heading text-[30px] font-extrabold text-darkgreen-105">
        My Kids&apos; Profiles
      </h1>
      <Image
        src={kidsProfiles}
        alt="Kids Profiles"
        className="mt-5 cursor-pointer"
      />
    </div>
  );
}