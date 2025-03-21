import { z } from 'zod';

export const productSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  price: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number().positive('O preço deve ser um número positivo')),
  isAvailable: z.boolean().default(false),
  image: z.string(),
  description: z.string().min(1, 'A descrição é obrigatória'),
  userId: z.string().uuid(),
});


export const validatorProduct = {
  productSchema,
};