"use client";

import AppFooter from "@/components/onboarding/footers/app-footer";
import Logo from "@/components/onboarding/logo";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignInPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      {/* <SignInForm /> */}

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
