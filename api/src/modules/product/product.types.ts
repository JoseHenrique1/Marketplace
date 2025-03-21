import {z} from "zod"
import { validatorProduct } from "./product.validators.ts";

export type ProductType = z.infer<typeof validatorProduct.productSchema>