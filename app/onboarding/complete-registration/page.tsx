"use client";

import Logo from "@/components/logo";
import CompleteRegistrationForm from "@/components/onboarding/auth/complete-registration-form";
import AppFooter from "@/components/onboarding/footers/app-footer";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignUpPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      <CompleteRegistrationForm />

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
