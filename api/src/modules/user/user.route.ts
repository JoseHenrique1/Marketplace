import { Router } from "express";
import { controllerUser } from "./user.controller.ts";
import { authentication } from "../share/share.middleware.ts";
import { upload } from "../share/multer.config.ts";
export const routerUser = Router();

routerUser.get("/:email", controllerUser.getUser);
routerUser.put("/:id", authentication, controllerUser.putUser);
routerUser.delete("/:id", authentication, controllerUser.deleteUser);
routerUser.patch("/:id/image", authentication, upload.single("image"), controllerUser.patchImageUser);

//recebe um query params owner("others" ou "me")
//se for "me" retorna apenas os produtos do usuário com :id da rota
//se for "others" retorna apenas os produtos de outros usuários, exceto o usuário com :id da rota
routerUser.get("/:id/products", authentication, controllerUser.getProductsUser);
