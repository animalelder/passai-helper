"use client";

import React from "react";

import { toast } from "sonner";

import { signIn } from "@/lib/auth-client";
import { useAuthState } from "@/hooks/use-auth-state";

import { Button } from "../ui/button";

interface SocialButtonProps {
  provider: "google" | "github";
  icon: React.ReactNode;
  label: string;
  callbackURL?: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  provider,
  icon,
  label,
  callbackURL = "/dashboard",
}) => {
  const { setError, setSuccess, loading, setLoading, resetState } = useAuthState();

  const handleSignIn = async () => {
    try {
      await signIn.social(
        { provider, callbackURL },
        {
          onResponse: () => setLoading(false),
          onRequest: () => {
            resetState();
            setLoading(true);
          },
          onSuccess: () => {
            setSuccess("You are logged in successfully");
          },
          onError: (ctx) => {
            setError(ctx.error.message);
            toast.error(ctx.error.message);
          },
        }
      );
    } catch (error) {
      toast.error(error?.message ?? "Something went wrong");
      setError("Something went wrong");
    }
  };

  return (
    <>
      <Button
        variant="default"
        onClick={handleSignIn}
        disabled={loading}
        className="w-20"
      >
        {icon}
        {label}
      </Button>
    </>
  );
};

export default SocialButton;
