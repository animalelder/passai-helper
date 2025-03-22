// hooks/use-auth-state.ts
// This hook store state for authentication related components.
// It returns error, success, loading, setError, setSuccess, setLoading, and resetState functions.
// It must be reset manually before each use by using the resetState function.
// We can replace this with toast notifications using Sonner.

import { useState } from "react";

export const useAuthState = () => {
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);

  const resetState = () => {
    setError("");
    setSuccess("");
    setLoading(false);
  };

  return {
    error,
    setError,
    success,
    setSuccess,
    loading,
    setLoading,
    resetState,
  };
};
