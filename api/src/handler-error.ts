import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";

export const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    res.status(400).json({ error: err.format() });
    return;
  }

  console.error(err);
  res.status(500).json({
    message: "Erro interno no servidor",
  });
  return;
};
