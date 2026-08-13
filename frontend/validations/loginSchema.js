import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .min(1, "Email obligatoire")
    .email("Email invalide"),

  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères"),
});