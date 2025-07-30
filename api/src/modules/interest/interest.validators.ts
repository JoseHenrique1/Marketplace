import { z } from 'zod';

const idValidator = z.object({
  id: z.string().uuid(),
});

const interestStatusEnum = z.enum(['PENDING', 'ACCEPTED', 'REJECTED']);

const interestSchema = z.object({
  userId: z.string().uuid(),
  productId: z.string().uuid(),
  status: interestStatusEnum
});

export const validatorInterest = {
  interestSchema,
  idValidator
};