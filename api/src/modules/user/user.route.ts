import { Router } from "express";
import { controllerUser } from "./user.controller.ts";
import { authentication } from "../share/share.middleware.ts";
export const routerUser = Router();

routerUser.get("/:id", authentication, controllerUser.getUser);
routerUser.put("/:id", authentication, controllerUser.putUser);
routerUser.delete("/:id", authentication, controllerUser.deleteUser);
