import { Router } from "express";
import { authentication } from "../share/share.middleware.ts";
import { interestController } from "./interest.controller.ts";
export const interestRouter = Router();

interestRouter.post("/interests", authentication, interestController.postInterest);
interestRouter.delete("/interests/:productId", authentication, interestController.postInterest);
interestRouter.patch("/products/:productId/interests/:userId", authentication, interestController.postInterest);
interestRouter.get("/users/:userId/interests", authentication, interestController.getInterestPerUser);
interestRouter.get("/products/:productId/interests", authentication, interestController.getInterestPerProduct);


