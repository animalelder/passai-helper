//helpers/zod/signup-schema.ts
// This validates the signup form data
// It uses the zod library to create a schema for the signup form data
// The schema is then used to validate the form data before it is submitted
// This ensures that the form data is in the correct format before it is sent to the server
// This helps to prevent errors and improve the overall user experience
// The schema defines the shape of the form data and the validation rules that apply to each field
// The schema is then used to create a validation function that can be called to validate the form data
// If the form data is valid, the function returns true
// If the form data is invalid, the function returns false

import { z } from "zod";

export const SignupSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Minimum 2 characters are required" })
    .max(20, { message: "Maximum of 20 characters are allowed" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .min(1, { message: "Email is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 6 characters long" })
    .max(20, { message: "Password must be at most 20 characters long" }),
});
