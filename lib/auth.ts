// auth.ts
// This is the authentication configuration file that sets up the better-auth library
// We use the Prisma database adapter and plugins such as the Next.js cookies plugin.
// The cookies work for server actions
// We currently have email and password authentication enabled with Google OAuth.
// The email verification is disabled for now.
// The auth object is exported to be used in the API routes.

import { sendEmail } from "@/actions/send-email";
import prisma from "@/db";
import { betterAuth, type User } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { nextCookies } from "better-auth/next-js";
import { admin, emailOTP, oAuthProxy, openAPI } from "better-auth/plugins";

export const auth = betterAuth({
  appName: "passai-parent-helper",
  database: prismaAdapter(prisma, {
    provider: "postgresql",
  }),
  trustedOrigins: [
    "https://passai-helper.vercel.app",
    "https://localhost:3000",
    "http://localhost:3000",
    "*.vercel.app",
    `${(process.env.NEXT_PUBLIC_APP_URL as string) ?? ""}`,
  ],
  account: {
    accountLinking: {
      trustedProviders: ["google"],
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    minPasswordLength: 8,
    maxPasswordLength: 20,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }: { user: User; url: string }) => {
      await sendEmail({
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
  },
  emailVerification: {
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    sendVerificationEmail: async ({ user, url }) => {
      await sendEmail({
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email:${url}`,
      });
    },
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID || ("" as string),
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || ("" as string),
    },
  },
  plugins: [
    admin({
      adminUserIds: ["BNrwpk5g53yma8A0KPOvJmfImOU46i15"],
    }),
    emailOTP({
      expiresIn: 600,
      sendVerificationOnSignUp: true,
      sendVerificationOTP: async ({ email, otp, type }) => {
        if (type === "email-verification") {
          await sendEmail({
            to: email,
            subject: "Use this code to verify your email address",
            text: `Your OTP code is: ${otp}`,
          });
        } else {
          await sendEmail({
            to: email,
            subject: "Use this code to reset your password",
            text: `Your OTP code is: ${otp}`,
          });
        }
      },
    }),
    oAuthProxy(),
    openAPI(),
    nextCookies(),
  ],
});
