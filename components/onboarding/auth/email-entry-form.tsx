"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

import { Button } from "@/components/ui/button";

export default function EmailEntryForm() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage("Verification email sent. Check your inbox.");
      router.push("/register/complete"); // or wait for verification
    } catch (err: any) {
      setMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="font-heading w-full max-w-xs space-y-4 text-center"
      >
        {/* Title */}
        <h1 className="text-darkblue-104 text-2xl font-bold">Sign up</h1>

        {/* Description */}
        <p className="mx-auto w-[15rem] text-sm text-black">
          Start creating your account by entering your email address for verification
        </p>

        {/* Email input */}
        <div className="space-y-2 px-4 text-left">
          <label
            htmlFor="email"
            className="text-darkblue-104 text-xs"
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
            className="placeholder:text-lightblue-102 border-darkblue-102 w-full rounded-md border bg-white px-4 py-2 text-left placeholder:text-sm"
          />
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-md bg-yellow-500 py-2 text-white transition hover:bg-yellow-600"
        >
          {loading ? "Sending..." : "Verify email address"}
        </button>

        {/* Message */}
        {message && <p className="text-sm text-gray-700">{message}</p>}

        {/* OR divider */}
        <div className="flex items-center justify-center gap-2 pt-1 text-sm text-gray-500">
          <div className="h-px w-10 bg-gray-300" />
          OR
          <div className="h-px w-10 bg-gray-300" />
        </div>

        {/* Social logins */}
        <div>
          <p className="text-sm font-medium text-gray-700">
            Use your social account
          </p>
          <div className="text-darkblue-104 mt-2 flex justify-center gap-4 text-2xl">
            <FaGoogle className="cursor-pointer" />
            <FaFacebookF className="cursor-pointer" />
            <FaTwitter className="cursor-pointer" />
            <FaApple className="cursor-pointer" />
          </div>
        </div>
      </form>
    </div>
  );
}
