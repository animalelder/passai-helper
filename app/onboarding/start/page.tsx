import Image from "next/image";

import { Button } from "@/components/ui/button";
import Logo from "@/components/logo";
import BottomLinks from "@/components/onboarding/footers/legal-footer";
import PageWrapper from "@/components/onboarding/page-wrapper";

import undrawSetupWizard from "@/assets/onboarding/undraw-setup-wizard.png";

export default function StartPage() {
  return (
    <PageWrapper>
      <div>
        <Logo />
        <div className="mt-6 text-center">
          <h1 className="text-alert-104 text-2xl font-bold">
            Smart Parenting... <br />
            <span className="text-black"> Simplified</span>
          </h1>
          <Image
            src={undrawSetupWizard}
            className="mx-auto aspect-auto w-[200px] md:h-auto md:w-[300px] xl:h-[407px] xl:w-[481px]"
            priority
            quality={90}
            alt="setup-wizard"
          />
          <div className="mt-6">
            <Button className="cursor-pointer">Get started</Button>
          </div>
          <div className="mt-25 text-sm">
            <p>Already have an account?</p>
            <p className="font-sans text-xl font-bold">Login</p>
          </div>
        </div>
      </div>
      <BottomLinks />
    </PageWrapper>
  );
}
