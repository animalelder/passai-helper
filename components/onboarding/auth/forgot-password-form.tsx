"use client";

import { useState } from "react";

export default function ForgotPasswordForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Replace this with your actual API call
      await new Promise((res) => setTimeout(res, 1000));
      setMessage("Email sent");
    } catch (err) {
      setMessage("Failed to send email.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 text-center"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-darkblue-104">Forgot password</h1>

        {/* Subheading */}
        <p className="text-sm leading-relaxed font-medium text-darkblue-104">
          We will send you a link will be sent to <br /> this address to reset your
          password
        </p>

        {/* Email input */}
        <div className="text-left">
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-darkblue-104"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            required
            placeholder="youremail@anysite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-md border border-blue-300 bg-white px-4 py-2 placeholder:text-sm placeholder:text-lightblue-102 focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-[7.5rem] cursor-pointer rounded-[10px] bg-darkblue-102 py-2 font-heading text-xs font-semibold text-darkblue-106 transition hover:bg-[#5b8891]"
        >
          Send link
        </button>

        {/* Subtext */}
        <p className="text-xs text-grey-203">
          The link will expire after 10 minutes
        </p>

        {/* Optional message feedback */}
        {message && (
          <p className="text-xs font-semibold text-green-600">{message}</p>
        )}
      </form>
    </div>
  );
}
