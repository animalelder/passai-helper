"use client";

import React from "react";

import CompleteRegistrationForm from "@/components/onboarding/auth/complete-registration-form";
import AppFooter from "@/components/onboarding/footers/app-footer";
import Logo from "@/components/onboarding/logo";
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
