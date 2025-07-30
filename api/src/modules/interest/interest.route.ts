import { Router } from "express";
import { authentication } from "../share/share.middleware.ts";
import { interestController } from "./interest.controller.ts";
export const interestRouter = Router();

interestRouter.post("/", authentication, interestController.postInterest);
interestRouter.delete("/:id", authentication, interestController.deleteInterest);
interestRouter.patch("/products/:id/interests/:userId", authentication, interestController.postInterest);
interestRouter.get("/users/:id/interests", authentication, interestController.getInterestPerUser);
interestRouter.get("/products/:id/interests", authentication, interestController.getInterestPerProduct);


