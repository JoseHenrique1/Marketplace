import type { Product } from "./product-type";
import type { User } from "./user-type";

export enum InterestStatus {
  PENDING = "PENDING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export interface Interest {
    userId: string;
    productId: string;
    user: User;
    product: Product;
    status: InterestStatus;
}