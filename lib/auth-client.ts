// src/lib/auth-client.ts
// This is the file where we will define our authentication client.
// We will use the createAuthClient function from the better-auth package to create an authentication client.
// We will also define some utility functions like signIn, signOut, signUp, and useSession to interact with the authentication client.
// The exported functions can be called in client components with "use client" at the top of the file.

import { createAuthClient } from "better-auth/react";

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
});

export const { signIn, signOut, signUp, useSession } = authClient;
