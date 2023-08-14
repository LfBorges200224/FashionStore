import { z } from "zod";

export const loginFormSchema = z.object({
  email: z
    .string()
    .min(1, { message: "E-mail é inválido" })
    .email({ message: "Formato de e-mail inválido" }),
  password: z.string().min(8, { message: "A senha é inválida" }),
});

export type TLoginFormValues = z.infer<typeof loginFormSchema>;
