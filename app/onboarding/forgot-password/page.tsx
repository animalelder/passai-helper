"use client";

import ForgotPasswordForm from "@/components/onboarding/auth/forgot-password-form";
import AppFooter from "@/components/onboarding/footers/app-footer";
import Logo from "@/components/onboarding/logo";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignInPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      <ForgotPasswordForm />

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
