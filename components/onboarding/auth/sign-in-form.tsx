"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { EyeIcon, EyeOffIcon } from "lucide-react";
import { FaApple, FaFacebookF, FaGoogle, FaTwitter } from "react-icons/fa";

import { signIn } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [saveDetails, setSaveDetails] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // These are set in the onRequest callback below
    // setLoading(true);
    // setMessage("");

    try {
      await signIn.email(
        { email, password, callbackURL: "/dashboard" },
        {
          onResponse: () => {
            setLoading(false);
            setMessage("Login successful");
          },
          onRequest: () => {
            setLoading(true);
            setMessage("");
          },
          onSuccess: () => {
            router.push("/dashboard");
          },
          onError: (ctx) => {
            setLoading(false);
            setMessage(ctx.error.message);
            throw new Error(ctx.error.message);
          },
        }
      );
      // Your previous code
      // const res = await fetch("/api/logins/ss/s", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({ email, password }),
      // });

      // const data = await res.json();
      // if (!res.ok) throw new Error(data.message || "Login failed");

      // router.push("/dashboard");
    } catch (err) {
      setMessage(err.message || "Something went wrong.");
    } finally {
      // finally is good, but it is already covered in onResponse, which is for success and error cases
      setLoading(false);
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
              message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
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
                message ? "border-red-500 focus:ring-red-500" : "border-gray-300"
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

          {message && <p className="text-xs text-red-500">{message}</p>}

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
