import { Router } from "express";
import { controllerAuth } from "./auth.controller.ts";

export const routerAuth = Router();

routerAuth.post("/signup", controllerAuth.signup);
routerAuth.post("/signin", controllerAuth.signin);
