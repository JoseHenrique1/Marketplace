import { RequestHandler } from "express";
import { serviceUser } from "./user.service.ts";
import { validatorUser } from "./user.validators.ts";
import path from "path";

const getUser: RequestHandler = async (req, res) => {
	const user = await serviceUser.getUserById(req.params.id);
	validatorUser.IdValidator.parse(req.params);
	res.status(200).json(user);
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

	res.status(200).json({user: userUpdated});
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
	res.status(200).json({user: userDeleted});
	return;
};

const patchImageUser: RequestHandler = async (req, res) => {
  if (!req.file) {
    res.status(400).json({ msg: "Nenhum arquivo enviado." });
    return;
  }

  const filePath = path.join("/upload", req.file.filename);

  const user = await serviceUser.patchImageUser(req.params.id, filePath);

	res.status(200).json({msg: "Imagem alterada com sucesso", user});
	return;
};

export const controllerUser = {
	getUser,
	putUser,
	deleteUser,
  patchImageUser
};
