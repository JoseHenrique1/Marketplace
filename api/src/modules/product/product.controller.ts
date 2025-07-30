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
	console.log(parseFloat(req.body.price));
	const data = {
		...req.body,
		price: parseFloat(req.body.price),
		isAvailable,
	};
	validatorProduct.productPostAndPutSchema.parse(data);

	if (!req.file) {
		res.status(400).json({ msg: "Nenhum arquivo enviado." });
		return;
	}
	const filePath = path.join("upload", req.file.filename);
	const newData = {
		...data,
		image: filePath,
	};

	const product = await serviceProduct.postProduct(req.user.id, newData);
	res.status(201).json({ product });
	return;
};

const putProduct: RequestHandler = async (req, res) => {
	const isAvailable = req.body.isAvailable === "true" ? true : false;
	const data = {
		...req.body,
		isAvailable,
	};
	validatorProduct.productSchema.parse(data);
	validatorProduct.idValidator.parse(req.params);
	const { id: productId } = req.params;

	const productExists = await serviceProduct.getProduct(req.user.id, productId);
	if (!productExists) {
		res.status(404).json({ message: "Product not found" });
		return;
	}
	
	let newFilePath = productExists.image;
	if (req.file) {
		const __filename = fileURLToPath(import.meta.url);
		const __dirname = path.dirname(__filename);
		const fileDir = path.resolve(__dirname, "../../../", productExists.image);
		
		if (fs.existsSync(fileDir)) {
			fs.unlinkSync(fileDir);
		}
		newFilePath = "upload/" + req.file.filename;
	}

	const newData = {
		...data,
		image: newFilePath,
	};
	const productUpdated = await serviceProduct.putProduct(req.user.id, productId, newData);

	res.status(200).json({ product: productUpdated });
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


//1743188409338-257992445.png

//1743188409338-257992445.png