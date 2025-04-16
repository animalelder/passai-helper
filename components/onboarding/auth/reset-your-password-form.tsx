"use client";

import { useState } from "react";

import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function ResetYourPasswordForm() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Simulate password reset call
      await new Promise((res) => setTimeout(res, 1000));
      setMessage("Password reset successfully.");
    } catch (err) {
      setMessage("Failed to reset password.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm space-y-6 text-center"
      >
        {/* Title */}
        <h1 className="text-darkblue-104 text-2xl font-bold">Reset your password</h1>

        {/* Subheading */}
        <p className="text-darkblue-104 text-sm">Enter your new password</p>

        {/* New password input */}
        <div className="text-left">
          <label
            htmlFor="newPassword"
            className="text-darkblue-104 mb-1 block text-sm font-medium"
          >
            New password
          </label>
          <div className="relative">
            <input
              type={showNewPassword ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              placeholder="new password"
              className="placeholder:text-lightblue-102 w-full rounded-md border border-blue-300 bg-white px-4 py-2 pr-10 placeholder:text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute top-2.5 right-3 text-gray-500"
            >
              {showNewPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            * Must contain letters, numbers and special characters
          </p>
        </div>

        {/* Confirm password input */}
        <div className="text-left">
          <label
            htmlFor="confirmPassword"
            className="text-darkblue-104 mb-1 block text-sm font-medium"
          >
            Confirm new password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              placeholder="confirm new password"
              className="placeholder:text-lightblue-102 w-full rounded-md border border-blue-300 bg-white px-4 py-2 pr-10 placeholder:text-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute top-2.5 right-3 text-gray-500"
            >
              {showConfirmPassword ? (
                <EyeOffIcon size={18} />
              ) : (
                <EyeIcon size={18} />
              )}
            </button>
          </div>
          <p className="mt-1 text-xs text-gray-500">
            * Must contain letters, numbers and special characters
          </p>
        </div>

        {/* Submit button */}
        <button
          type="submit"
          disabled={loading}
          className="bg-darkblue-102 font-heading text-darkblue-106 w-[9rem] cursor-pointer rounded-[10px] py-2 text-xs font-semibold transition hover:bg-[#5b8891]"
        >
          Reset password
        </button>

        {/* Optional feedback message */}
        {message && (
          <p className="text-xs font-semibold text-green-600">{message}</p>
        )}
      </form>
    </div>
  );
}
