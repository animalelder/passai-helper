"use client";

import React, { useState } from "react";

import SignUpRoleSelection from "@/components/onboarding/auth/sign-up-role-selection";
import AppFooter from "@/components/onboarding/footers/app-footer";
import Logo from "@/components/onboarding/logo";
import PageWrapper from "@/components/onboarding/page-wrapper";

export default function SignUpPage() {
  return (
    <PageWrapper>
      {/* Logo at the top */}
      <Logo />
      <SignUpRoleSelection />

      {/* Footer links (e.g. Terms, Privacy) */}
      <AppFooter />
    </PageWrapper>
  );
}
