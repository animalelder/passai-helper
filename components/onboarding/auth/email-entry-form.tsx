"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";
import { z } from "zod";

import { useAuthState } from "@/hooks/use-auth-state";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  email: z.string().email(),
});

export default function EmailEntryForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const { setError, setSuccess, resetState } = useAuthState();

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    resetState();

    try {
      const res = await fetch("/api/auth/request-verification", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: values.email }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess("Verification email sent.");
        toast.success("Verification email sent.");
        reset(); // clear form input
      } else {
        setError(data.error);
        toast.error(data.error);
      }
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong");
      setError("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center px-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-xs space-y-4 text-center font-heading"
      >
        {/* Title */}
        <h1 className="text-2xl font-bold text-darkblue-104">Sign up</h1>

        {/* Description */}
        <p className="mx-auto w-[15rem] text-sm text-black">
          Start creating your account by entering your email address for verification
        </p>

        {/* Email input */}
        <div className="space-y-2 px-4 text-left">
          <label
            htmlFor="email"
            className="text-xs text-darkblue-104"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            placeholder="youremail@anysite.com"
            className="w-full rounded-md border border-darkblue-102 bg-white px-4 py-2 text-left placeholder:text-sm placeholder:text-lightblue-102"
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600">{errors.email.message}</p>
          )}
        </div>

        {/* Submit button */}
        <Button
          disabled={loading}
          type="submit"
          variant="secondary"
          className="mx-auto block px-2"
        >
          <p className="font-heading text-xs font-semibold text-darkblue-106">
            Verify email address
          </p>
        </Button>

        {/* OR divider */}
        <div className="font-heading text-sm font-semibold text-darkblue-104">
          - OR -
        </div>

        {/* Social logins */}
        <div>
          <p className="text-sm font-semibold text-black">Use your social account</p>
          <div className="mt-2 flex justify-center gap-9 text-2xl text-darkblue-104">
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
