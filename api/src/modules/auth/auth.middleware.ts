import { RequestHandler } from "express";
import { UserValidator, UserSigninValidator } from "./auth.validators.ts";
import { prisma } from "../../database/prisma.ts";
import bcrypt from "bcrypt";

const signupMiddleware: RequestHandler = async (req, res, next) => {
  const { email, whatsapp } = req.body;
  UserValidator.parse(req.body);
  
  const userExists = await prisma.user.findFirst({
    where: {
      OR: [{ email }, { whatsapp }]
    },
  });

  if (userExists) {
    res.status(409).json({ message: "User already exists" });
    return;
  }

  next();
  return;
};


const signinMiddleware: RequestHandler = async (req, res, next) => {
  const { email, password } = req.body;
  UserSigninValidator.parse(req.body);
  
  const userExists = await prisma.user.findFirst({
    where: {
      email
    },
  });

  if (!userExists) {
    res.status(404).json({ message: "User not found" });
    return;
  }

  if (!await bcrypt.compare(password, userExists.password)) {
    res.status(401).json({ message: "Invalid password" });
    return;
  }

  next();
  return;
};

