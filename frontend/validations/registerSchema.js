import { z } from "zod";

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .min(2, "Le nom doit contenir au moins 2 caractères"),

    email: z
      .string()
      .email("Email invalide"),

    password: z
      .string()
      .min(6, "Le mot de passe doit contenir au moins 6 caractères"),

    confirmPassword: z
      .string()
      .min(6, "Confirmez votre mot de passe"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Les mots de passe ne correspondent pas",
    path: ["confirmPassword"],
  });