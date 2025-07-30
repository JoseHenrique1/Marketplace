import { Router } from "express";
import { routerAuth } from "./auth/auth.route.ts";
import { routerProduct } from "./product/product.route.ts";

export const router = Router();

router.use("/auth", routerAuth);import { routerUser } from "./user/user.route.ts";
import { interestRouter } from "./interest/interest.route.ts";
router.use("/users", routerUser);
router.use("/products", routerProduct);
router.use("/interests", interestRouter);
