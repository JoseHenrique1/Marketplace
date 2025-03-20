import { z } from "zod";

const IdValidator = z.object({
  id: z.string().uuid(),
});

export const UserPutValidator = z.object({
  name: z.string().min(1, "Name is required").optional(),
  whatsapp: z
    .string()
    .regex(/^\+\d{2}\s\d{2}\s\d{5}-\d{4}$/, "Invalid WhatsApp number")
    .optional(),
  city: z.string().min(1, "City is required").optional(),
  state: z.string().min(2).max(2, "State must be a valid abbreviation (e.g., SP)").optional(),
});

export const UserSigninValidator = z.object({
  email: z.string().email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters long")
});

export const validatorUser = {
  IdValidator,
  UserPutValidator
};