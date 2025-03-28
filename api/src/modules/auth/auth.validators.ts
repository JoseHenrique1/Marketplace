import { z } from "zod";

export const UserValidator = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  whatsapp: z
    .string()
    .regex(/^\+\d{2}\s\d{2}\s\d{5}-\d{4}$/, "Invalid WhatsApp number"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(2).max(2, "State must be a valid abbreviation (e.g., SP)"),
});

export const UserSigninValidator = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

