import { z } from "zod";

export const addProductFormSchema = z.object({
  name: z.string().nonempty("O nome do produto é obrigatório!"),
  price: z.string().nonempty("O preço do produto é obrigatório!"),
  description: z.string().nonempty("A descrição do produto é obrigatório!"),
  image: z.string().nonempty("O link da imagem do produto é obrigatório!"),
});

export type TAddProductForm = z.infer<typeof addProductFormSchema>;
