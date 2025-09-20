import { Router } from "express";
import { authentication } from "../share/share.middleware.ts";
import { interestController } from "./interest.controller.ts";
export const interestRouter = Router();

interestRouter.post("/", authentication, interestController.postInterest);
interestRouter.get("/", authentication, interestController.getInterests);
interestRouter.delete("/products/:productId/interests/:userId", authentication, interestController.deleteInterest);
interestRouter.patch("/products/:productId/interests/:userId", authentication, interestController.patchInterest);
interestRouter.get("/users/:id/interests", authentication, interestController.getInterestPerUser);
interestRouter.get("/products/:id/interests", authentication, interestController.getInterestPerProduct);


