import { prisma } from "../../database/prisma.ts";
import { UserPutType } from "./user.types.ts";

const getUserById = async (id: string) => {
	const user = await prisma.user.findUnique({
		where: {
			id,
		},
	});
	return user;
};

const putUser = async (id: string, data: UserPutType) => {
	const user = await prisma.user.update({
		where: {
			id,
		},
		data,
	});

	return user;
};

const deleteUser = async (id: string) => {
	const user = await prisma.user.delete({
		where: {
			id,
		},
	});
	return user;
};

const patchImageUser = async (id: string, filePath: string) => {
	const user = await prisma.user.update({
		where: {
			id,
		},
		data: {
			image: filePath,
		},
	});
	return user;
};

const getProductUser = async (userId: string, owner: "me" | "others" | undefined) => {
	const optionOthers = { where: { userId: { not: userId } } };
	const optionMe = { where: { userId } };
	const optionSelected: Parameters<typeof prisma.product.findMany>[0] = owner === "others" ? optionOthers : optionMe;
	const products = await prisma.product.findMany(optionSelected);
	return products;
};

export const serviceUser = {
	getUserById,
	putUser,
	deleteUser,
	patchImageUser,
	getProductUser,
};
