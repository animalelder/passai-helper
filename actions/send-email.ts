"use server";
import nodemailer from "nodemailer";
export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const message = {
    to: to.toLowerCase().trim(),
    from: process.env.EMAIL_USER!,
    subject: subject.trim(),
    text: text.trim(),
  };

  try {
    const html = `
      <h1 style="color: #333; text-align: center; font-size: 24px; margin-top: 30px; margin-bottom: 10px;">30 Mighty Men - Clean Program</h1>
      <p style="color: #666; font-size: 16px; line-height: 1.5; margin: 10px;">${text}</p>
    `;
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER!,
        pass: process.env.EMAIL_PASS!,
      },
    });

    const info = await transporter.sendMail({
      from: "Clean Program <aarondantley@gmail.com>",
      to: message.to,
      subject: message.subject,
      html: html,
      text: message.text,
    });

    console.log(info);
    return {
      success: true,
      messageId: info.messageId,
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      success: false,
      message: "Failed to send email. Please try again later.",
    };
  }
}
