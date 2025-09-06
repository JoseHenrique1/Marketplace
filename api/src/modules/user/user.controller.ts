import { RequestHandler } from "express";
import { serviceUser } from "./user.service.ts";
import { validatorUser } from "./user.validators.ts";
import path from "path";
import fs from "fs";
import { log } from "console";
import { UPLOAD_DIR } from "../share/multer.config.ts";

const getUser: RequestHandler = async (req, res) => {
	const user = await serviceUser.getUserByEmail(req.params.email);
	validatorUser.EmailValidator.parse(req.params);
  user?.image && (user.image = `http://localhost:${process.env.PORT}${user.image}`);
	res.status(200).json({user});
	return;
};

const putUser: RequestHandler = async (req, res) => {
	validatorUser.IdValidator.parse(req.params);
	const user = await serviceUser.getUserById(req.params.id);

	if (!user) {
		res.status(404).json({ message: "User not found" });
		return;
	}

	validatorUser.UserPutValidator.parse(req.body);
	const { name, whatsapp, city, state } = req.body;

	const userUpdated = await serviceUser.putUser(user.id, {
		name,
		whatsapp,
		city,
		state,
	});

	res.status(200).json({ user: userUpdated });
	return;
};

const deleteUser: RequestHandler = async (req, res) => {
	validatorUser.IdValidator.parse(req.params);
	const user = await serviceUser.deleteUser(req.params.id);
	if (!user) {
		res.status(404).json({ message: "User not found" });
		return;
	}

	const userDeleted = await serviceUser.deleteUser(req.params.id);
	res.status(200).json({ user: userDeleted });
	return;
};

const patchImageUser: RequestHandler = async (req, res) => {
  log(req.file  );
	if (!req.file) {
		res.status(400).json({ msg: "Nenhum arquivo enviado." });
		return;
	}

	const user = await serviceUser.getUserById(req.params.id);

	if (user?.image) {
		const oldImagePath = path.join(UPLOAD_DIR, path.basename(user.image));
		if (fs.existsSync(oldImagePath)) {
			fs.unlinkSync(oldImagePath);
		}
	}

	const filePath = path.join("/upload", req.file.filename);

	const userUpdated = await serviceUser.patchImageUser(req.params.id, filePath);
  const userUpdatedWithImage = {
    ...userUpdated,
    image: `http://localhost:${process.env.PORT}${userUpdated.image}`
  };
  

	res.status(200).json({ msg: "Imagem alterada com sucesso", user: userUpdatedWithImage });
	return;
};

const getProductsUser: RequestHandler = async (req, res) => {
	const owner = req.params.owner as "me" | "others" | undefined;
	const userId = req.params.id;
	const products = serviceUser.getProductUser(userId, owner);
	res.status(200).json(products);
	return;
};

export const controllerUser = {
	getUser,
	putUser,
	deleteUser,
	patchImageUser,
	getProductsUser,
};
