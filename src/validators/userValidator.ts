import { z } from 'zod';

export const createUserSchema = z.object({
  body: z.object({
    nome: z.string()
      .min(1, { message: 'O nome é obrigatório.' })
      .min(3, { message: 'O nome deve ter no mínimo 3 caracteres.' }),

    email: z.string()
      .min(1, { message: 'O email é obrigatório.' })
      .email({ message: 'Formato de email inválido.' }),

    senha: z.string()
      .min(1, { message: 'A senha é obrigatória.' })
      .min(6, { message: 'A senha deve ter no mínimo 6 caracteres.' }),
  }),
});