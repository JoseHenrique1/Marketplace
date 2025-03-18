import express from "express";
import "express-async-errors";
import { router } from "./modules/index.ts";
import { errorHandler } from "./handler-error.ts";

const app = express();

app.use(express.json());

app.use("/", router);

app.use(errorHandler);

app.listen(3333, () => console.log("Server is running on port 3333"));
