// components/auth/sign-in.tsx
"use client";

import { useRouter } from "next/navigation";

import SigninSchema from "@/helpers/zod/signin-schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { toast } from "sonner";
import { z } from "zod";

import { signIn } from "@/lib/auth-client";
import { useAuthState } from "@/hooks/use-auth-state";
import { PasswordInput } from "@/components/ui/password-input";

import CardWrapper from "../card-wrapper";
import FormError from "../form-error";
import { FormSuccess } from "../form-success";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import SocialButton from "./social-button";

// TODO: Add mobile-friendly input method/type for form fields

const SignIn = () => {
  const router = useRouter();
  const { error, success, loading, setSuccess, setError, setLoading, resetState } =
    useAuthState();

  const form = useForm<z.infer<typeof SigninSchema>>({
    resolver: zodResolver(SigninSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (values: z.infer<typeof SigninSchema>) => {
    try {
      await signIn.email(
        {
          email: values.email,
          password: values.password,
        },
        {
          onResponse: () => {
            setLoading(false);
          },
          onRequest: () => {
            resetState();
            setLoading(true);
          },
          onSuccess: () => {
            setSuccess("LoggedIn successfully");
            router.replace("/dashboard");
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
    <CardWrapper
      cardTitle="Sign In"
      cardDescription="Enter your email below to login to your account"
      cardFooterDescription="Don't have an account?"
      cardFooterLink="/signup"
      cardFooterLinkTitle="Sign up"
    >
      <Form {...form}>
        <form
          className="space-y-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    type="email"
                    placeholder="example@gmail.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput
                    disabled={loading}
                    placeholder="********"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormError message={error} />
          <FormSuccess message={success} />
          <div className="mx-auto flex w-full flex-col items-center justify-between gap-2">
            <Button
              disabled={loading}
              type="submit"
              variant="secondary"
              className="mx-auto block px-4"
            >
              Login
            </Button>
            <div className="text-muted-foreground mx-auto block text-sm">or</div>

            <SocialButton
              provider="google"
              icon={<FcGoogle />}
              label="Sign in with Google"
            />
          </div>
        </form>
      </Form>
    </CardWrapper>
  );
};

export default SignIn;
