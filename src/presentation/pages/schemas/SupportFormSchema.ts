import * as z from "zod";

export const SupportFormSchema = z.object({
  email: z
    .string()
    .email()
    .min(5, "Username is required")
    .max(20, "Maximum of  characters"),
  title: z
    .string()
    .min(4, "Title is required")
    .max(15, "Maximum of 12 characters"),
  description: z
    .string()
    .min(10, "Description must be at least 10 characters")
    .max(400, "Description must be maximum 400 characters"),
});
