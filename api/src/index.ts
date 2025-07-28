import 'dotenv/config'
import express from "express";
import cors from "cors";
import "express-async-errors";
import { router } from "./modules/index.ts";
import { errorHandler } from "./handler-error.ts";

const PORT = process.env.PORT;
const app = express();

app.use(cors())
app.use(express.json());

app.use("/", router);

app.use(errorHandler);

app.listen(PORT, () => console.log(`Server is running. \nhttp://localhost:${PORT}`));
