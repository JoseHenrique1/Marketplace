import { prisma } from "../../database/prisma.ts";
import { ProductType } from "./product.types.ts";

const getProducts = async () => {
	const products = await prisma.product.findMany({
		where: {
			isAvailable: true
		},
	});
	return products;
};

const getProduct = async (productId: string) => {
	const product = await prisma.product.findUnique({
		where: {
			id: productId
		},
	});
	return product;
};

const getProductByUserId = async (userId: string, productId: string) => {
	const product = await prisma.product.findUnique({
		where: {
			userId, //productId, serve para pegar o produto pelo id do usuário logado
			id: productId
		},
	});
	return product;
};

const postProduct = async (userId: string, data: ProductType) => {
	const newData = {
		userId,
		...data,
	};
	const product = await prisma.product.create({
		data: newData,
	});
	return product;
};

const putProduct = async (userId: string, productId: string, data: ProductType) => {
	const product = await prisma.product.update({
		where: {
			userId,
			id: productId,
		},
		data,
	});
	return product;
};

const deleteProduct = async (userId: string, productId: string) => {
	const product = await prisma.product.delete({
		where: {
			userId,
			id: productId,
		},
	});
	return product;
};

export const serviceProduct = {
	getProducts,
	getProduct,
	postProduct,
	putProduct,
	deleteProduct,
  getProductByUserId
};
