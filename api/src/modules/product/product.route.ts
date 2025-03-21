import { Router } from "express";
import { controllerProduct } from "./product.controller.ts";
import { authentication } from "../share/share.middleware.ts";

export const routerProduct = Router();

routerProduct.get("/", authentication, controllerProduct.getProducts);
routerProduct.get("/:id", authentication, controllerProduct.getProduct);
routerProduct.post("/", authentication, controllerProduct.postProduct);
routerProduct.put("/:id", authentication, controllerProduct.putProduct);
routerProduct.delete("/:id", authentication, controllerProduct.deleteProduct);
