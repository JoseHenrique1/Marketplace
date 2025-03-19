import { RequestHandler } from "express";
import { prisma } from "../../database/prisma.ts";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const signup: RequestHandler = async (req, res) => {
	const { name, email, password, whatsapp, city, state } = req.body;

  const passwordHash = await bcrypt.hash(password, 10);
	const user = await prisma.user.create({
		data: {
			name,
			email,
			password: passwordHash,
			whatsapp,
			city,
			state,
		},
	});
	res.status(201).json({user});
	return;
};

const signin: RequestHandler = async (req, res) => {
  const { email } = req.body;

  const token =  jwt.sign({ email }, "secret", {
    expiresIn: "1d",
  });

	res.status(200).json({token});
	return;
};

export const controllerAuth = {
	signup,
	signin,
};
