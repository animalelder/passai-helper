"use client";

import React, { useState } from "react";

import CardOnboarding from "@/components/onboarding/card-onboarding";
import LegalFooter from "@/components/onboarding/footers/legal-footer";
import Logo from "@/components/onboarding/logo";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function OnboardingPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />

      {/* Step card content */}
      <CardOnboarding />

      {/* Footer links (e.g. Terms, Privacy) */}
      <LegalFooter />
    </PageWrapper>
  );
}
