import Image from "next/image";
import Link from "next/link";

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
            <Button className="cursor-pointer">
              <Link href="/onboarding/steps">Get Started</Link>
            </Button>
          </div>
          <div className="mt-6 text-center text-sm">
            <p className="mb-1">Already have an account?</p>
            <Link
              href="\onboarding\sign-in\"
              className="hover:text-darkblue-102 cursor-pointer font-sans text-xl font-bold text-black transition-colors"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
      <BottomLinks />
    </PageWrapper>
  );
}
