import z from "zod"
import { validatorUser } from "./user.validators.ts"

export type UserPutType = z.infer<typeof validatorUser.UserPutValidator>