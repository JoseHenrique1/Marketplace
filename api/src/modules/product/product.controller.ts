import { RequestHandler } from "express";
import { serviceProduct } from "./product.service.ts";
import { validatorProduct } from "./product.validators.ts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const getProducts: RequestHandler = async (req, res) => {
	const products = await serviceProduct.getProducts();
	res.status(200).json({ products });
	return;
};

const getProduct: RequestHandler = async (req, res) => {
	validatorProduct.idValidator.parse(req.params);
	const { id: productId } = req.params;

	const product = await serviceProduct.getProduct(req.user.id, productId);

	if (!product) {
		res.status(404).json({ message: "Product not found" });
		return;
	}

	res.status(200).json({ product });
	return;
};

const postProduct: RequestHandler = async (req, res) => {
	const isAvailable = req.body.isAvailable === "true" ? true : false;
	const data = {
		...req.body,
		isAvailable,
	};

	const dataIsValid = validatorProduct.productPostAndPutSchema.safeParse(data);
	if (!dataIsValid.success && req.file) {
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);
		const uploadDir = path.resolve(__dirname, "../../../upload");
    
		const oldImagePath = path.join(uploadDir, path.basename(req.file.filename));
		if (fs.existsSync(oldImagePath)) {
			fs.unlinkSync(oldImagePath);
		}
	}

	validatorProduct.productPostAndPutSchema.parse(data);

	if (!req.file) {
		res.status(400).json({ msg: "Nenhum arquivo enviado." });
		return;
	}

	const filePath = path.join("/upload", req.file.filename);

	const newData = {
		...data,
		image: filePath,
	};

	const product = await serviceProduct.postProduct(req.user.id, newData);
	res.status(201).json({ product });
	return;
};

const putProduct: RequestHandler = async (req, res) => {
	validatorProduct.productSchema.parse(req.body);
	const data = req.body;
	validatorProduct.idValidator.parse(req.params);
	const { id: productId } = req.params;
	const product = await serviceProduct.putProduct(req.user.id, productId, data);
	res.status(200).json({ product });
	return;
};

const deleteProduct: RequestHandler = async (req, res) => {
	validatorProduct.idValidator.parse(req.params);
	const { id: productId } = req.params;

	const product = await serviceProduct.deleteProduct(req.user.id, productId);
	res.status(200).json({ product });
	return;
};

export const controllerProduct = {
	getProducts,
	getProduct,
	postProduct,
	putProduct,
	deleteProduct,
};
