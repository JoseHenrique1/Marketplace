import { Router } from "express";
import { authentication } from "../share/share.middleware.ts";
import { interestController } from "./interest.controller.ts";
export const interestRouter = Router();

interestRouter.post("/interests", authentication, interestController);
interestRouter.delete("/interests/:productId", authentication, interestController);
interestRouter.patch("/products/:productId/interests/:userId", authentication, interestController);
interestRouter.get("/users/:userId/interests", authentication, interestController);
interestRouter.get("/products/:productId/interests", authentication, interestController);


