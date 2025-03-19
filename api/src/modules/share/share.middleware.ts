import { RequestHandler } from "express";
import { prisma } from "../../database/prisma.ts";
import jwt from "jsonwebtoken";

export const authentication: RequestHandler = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    res.status(401).json({ message: "Unauthorized: No token provided" });
    return;
  }

  const token = authorization.split(" ")[1];

  const { email } = jwt.verify(token, "secret") as { email: string };

  const user = await prisma.user.findUnique({
    where: {
      email
    },
  });

  if (!user) {
    res.status(401).json({ message: "Unauthorized: Invalid token" });
    return;
  }

  req.user = user;
  next();
  return;
};