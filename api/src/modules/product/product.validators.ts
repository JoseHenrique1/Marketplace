import { z } from 'zod';

const idValidator = z.object({
  id: z.string().uuid(),
});

const productSchema = z.object({
  name: z.string().min(1, 'O nome é obrigatório'),
  price: z.preprocess((val) => (typeof val === 'string' ? parseFloat(val) : val), z.number().positive('O preço deve ser um número positivo')),
  isAvailable: z.boolean().default(false),
  image: z.string().optional(),
  description: z.string().min(1, 'A descrição é obrigatória')
});

const productPostAndPutSchema = productSchema.omit({ image: true });



export const validatorProduct = {
  productSchema,
  idValidator,
  productPostAndPutSchema
};