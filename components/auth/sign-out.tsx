"use client";

import { useRouter } from "next/navigation";

import { authClient, signOut } from "@/lib/auth-client";

import { Button } from "../ui/button";

const SignOut = () => {
  const router = useRouter();
  const session = authClient.useSession();

  if (!session.data) {
    return (
      <Button
        onClick={() => {
          router.push("/signin");
        }}
      >
        Login
      </Button>
    );
  }

  return (
    <Button
      onClick={async () => {
        await signOut({
          fetchOptions: {
            onSuccess: () => {
              router.push("/");
            },
          },
        });
      }}
    >
      Logout
    </Button>
  );
};

export default SignOut;
