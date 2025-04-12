"use client";

import Logo from "@/components/logo";
import SignInForm from "@/components/onboarding/auth/sign-in-form";
import AppFooter from "@/components/onboarding/footers/app-footer";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignInPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      <SignInForm />

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
