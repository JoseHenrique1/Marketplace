import { Router } from "express";
import { routerAuth } from "./auth/auth.route.ts";

export const router = Router();

router.use("/auth", routerAuth);import { routerUser } from "./user/user.route.ts";
router.use("/users", routerUser);
