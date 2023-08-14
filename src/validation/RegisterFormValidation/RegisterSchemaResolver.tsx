import { z } from "zod";

export const registerFormSchema = z
  .object({
    name: z.string().min(3, "O nome é obrigatório"),
    email: z
      .string()
      .min(1, "O e-mail é obrigatório")
      .email("Formato de e-mail inválido"),
    password: z
      .string()
      .min(8, "A senha precisa conter pelo menos 8 caracteres")
      .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
      .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
      .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número")
      .regex(
        /(?=.?[!@#$%^&])/,
        "É necessário pelo menos um caractere especial"
      ),
    confirm: z.string().min(1, "Confirme sua senha"),
  })
  .refine(({ password, confirm }) => confirm === password, {
    message: "As senhas não correspondem",
    path: ["confirm"],
  });

export type TRegisterFormValues = z.infer<typeof registerFormSchema>;
