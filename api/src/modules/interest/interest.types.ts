import {z} from "zod"
import { validatorInterest } from "./interest.validators.ts";

export type InterestType = z.infer<typeof validatorInterest.interestSchema>