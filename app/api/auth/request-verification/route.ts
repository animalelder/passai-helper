// app/api/auth/request-verification/route.ts
import { randomBytes } from "crypto";
import { NextResponse } from "next/server";

import { sendEmail } from "@/actions/send-email";
import prisma from "@/db";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    const token = randomBytes(32).toString("hex");
    const expiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours from now

    await prisma.verification.create({
      data: {
        identifier: email,
        value: token,
        expiresAt,
      },
    });

    //TODO: Update verify URL

    const verifyUrl = `${process.env.NEXT_PUBLIC_APP_URL}/auth/complete-registration?token=${token}`;

    await sendEmail({
      to: email,
      subject: "Complete Your Registration",
      text: `Click the link below to finish creating your account: ${verifyUrl}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[REQUEST_VERIFICATION_ERROR]", error);
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
