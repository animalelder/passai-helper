"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";
import { toast } from "sonner";

import { signIn } from "@/lib/auth-client";
import { useAuthState } from "@/hooks/use-auth-state";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [saveDetails, setSaveDetails] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const { setError, setSuccess, loading, setLoading, resetState } = useAuthState();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await signIn.email(
        { email, password, callbackURL: "/dashboard" },
        {
          onRequest: () => {
            resetState();
            setLoading(true);
            setErrorMessage("");
            setSuccessMessage("");
          },
          onResponse: () => {
            setLoading(false);
          },
          onSuccess: () => {
            setSuccessMessage("Login successful");
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setErrorMessage(ctx.error.message);
            setLoading(false);
            throw new Error(ctx.error.message);
          },
        }
      );
    } catch (err: any) {
      setErrorMessage(err.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  const socialSignIn = async (
    provider: "google" | "github" | "facebook",
    callbackURL: string
  ) => {
    try {
      await signIn.social(
        { provider, callbackURL },
        {
          onRequest: () => {
            resetState();
            setErrorMessage("");
            setSuccessMessage("");
            setLoading(true);
          },
          onResponse: () => setLoading(false),
          onSuccess: () => {
            setSuccess("You are logged in successfully");
            router.push(callbackURL);
          },
          onError: (ctx) => {
            setError(ctx.error.message);
            setErrorMessage(ctx.error.message);
            toast.error(ctx.error.message);
          },
        }
      );
    } catch (error: any) {
      toast.error(error?.message ?? "Something went wrong");
      setError("Something went wrong");
      setErrorMessage("Something went wrong");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-xs space-y-5 text-center font-heading"
      >
        <h1 className="font-heading text-2xl font-bold text-darkblue-104">Login</h1>
        <div className="space-y-2 text-left">
          <label
            htmlFor="email"
            className="text-xs text-darkblue-104"
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
            className={`w-full rounded-md border placeholder:text-lightblue-102 ${
              errorMessage ? "border-red-500 focus:ring-red-500" : "border-gray-300"
            } bg-white px-4 py-2 placeholder:text-sm focus:ring-1 focus:outline-none`}
          />

          <label
            htmlFor="password"
            className="text-xs text-darkblue-104"
          >
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              required
              placeholder="your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full rounded-md border placeholder:text-lightblue-102 ${
                errorMessage
                  ? "border-red-500 focus:ring-red-500"
                  : "border-gray-300"
              } bg-white px-4 py-2 pr-10 placeholder:text-sm focus:ring-1 focus:outline-none`}
            />
            <span
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute top-2 right-3 cursor-pointer text-sm text-gray-500"
            >
              {showPassword ? (
                <EyeIcon
                  className="mt-[0.3rem] size-4"
                  aria-hidden="true"
                />
              ) : (
                <EyeOffIcon
                  className="mt-[0.3rem] size-4"
                  aria-hidden="true"
                />
              )}
            </span>
          </div>

          {errorMessage && <p className="text-xs text-red-500">{errorMessage}</p>}
          {successMessage && (
            <p className="text-xs text-green-500">{successMessage}</p>
          )}

          <label className="mt-2 flex items-center gap-2 text-sm">
            <input
              type="checkbox"
              checked={saveDetails}
              onChange={() => setSaveDetails(!saveDetails)}
            />
            Save my details
          </label>
        </div>
        <div className="mx-auto flex w-fit flex-col items-center justify-between">
          <p className="cursor-pointer font-heading text-xs text-black underline">
            Forgot your password?
          </p>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-yellow-500 py-2 text-white hover:bg-yellow-600"
          >
            {loading ? "Logging in..." : "Login"}
          </Button>
        </div>
        <div className="text-sm text-darkblue-104">– OR –</div>
        <div>
          <p className="text-sm font-semibold text-black">Use your social account</p>
          <div className="mt-2 flex justify-center gap-6 text-xl text-darkblue-104">
            <button
              type="button"
              onClick={() => socialSignIn("google", "/dashboard")}
            >
              <FaGoogle className="cursor-pointer" />
            </button>
            <button
              type="button"
              onClick={() => socialSignIn("facebook", "/dashboard")}
            >
              <FaFacebookF className="cursor-pointer" />
            </button>
            <button type="button">
              <FaTwitter className="cursor-pointer" />
            </button>
            <button type="button">
              <FaApple className="cursor-pointer" />
            </button>
          </div>
        </div>

        <p>
          Don&apos;t have an account?{" "}
          <Link
            href="/onboarding/sign-up"
            className="text-blue-500 underline hover:text-blue-700"
          >
            Sign up
          </Link>
        </p>
      </form>
    </div>
  );
}
