"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";

export default function CompleteRegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();
  // TODO: implement local storage
  const email = "useremail@anysite.com"; // later: use localStorage, query param, context, etc.

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const res = await fetch("/api/register-user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      setMessage("A confirmation message will be sent to your email");
      router.push("/dashboard");
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
        className="w-full max-w-xs space-y-4 text-center font-heading"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-darkblue-104">Email Verified</h1>

        {/* Description */}
        <p className="mx-auto w-[18rem] text-sm text-black">
          Thank you <span className="font-bold">{email}</span> for verifying your
          address.
          <br />
          One more step to complete registration
        </p>

        {/* Name fields */}
        <div className="space-y-2 text-left">
          <label
            htmlFor="firstName"
            className="text-xs text-darkblue-104"
          >
            First name
          </label>
          <input
            type="text"
            id="firstName"
            required
            placeholder="Your first name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 placeholder:text-sm placeholder:text-lightblue-102"
          />

          <label
            htmlFor="lastName"
            className="mt-4 text-xs text-darkblue-104"
          >
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            required
            placeholder="Your last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="w-full rounded-md border border-gray-300 bg-white px-4 py-2 placeholder:text-sm placeholder:text-lightblue-102"
          />
        </div>

        {/* Submit button */}
        <Button
          disabled={loading}
          type="submit"
          variant="secondary"
          className="mx-auto block"
        >
          <p className="font-heading text-xs font-semibold text-darkblue-106">
            Register
          </p>
        </Button>

        {/* Message */}
        <p className="text-xs text-gray-700">
          A confirmation message will be sent to your email
        </p>
      </form>
    </div>
  );
}
