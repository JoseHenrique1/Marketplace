import { Router } from "express";
import { controllerAuth } from "./auth.controller.ts";
import { middlewareAuth } from "./auth.middleware.ts";
export const routerAuth = Router();

routerAuth.post("/signup",middlewareAuth.signupMiddleware, controllerAuth.signup);
routerAuth.post("/signin",middlewareAuth.signinMiddleware, controllerAuth.signin);
