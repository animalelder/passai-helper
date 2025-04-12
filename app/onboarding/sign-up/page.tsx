"use client";

import Logo from "@/components/logo";
import EmailEntryForm from "@/components/onboarding/auth/email-entry-form";
import AppFooter from "@/components/onboarding/footers/app-footer";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignUpPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      <EmailEntryForm />

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
