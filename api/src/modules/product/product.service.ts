import { prisma } from "../../database/prisma.ts";
import { ProductType } from "./product.types.ts";

const getProducts = async (userId: string) => {
  const products = await prisma.product.findMany({
    where: {
      userId
    }
  })
  return products;
};

const getProduct =async (userId: string, productId: string) => {
  const product = await prisma.product.findUnique({
    where: {
      userId,
      id: productId
    }
  })
  return product;
};

const postProduct = async(userId: string, data: ProductType) => {
  return {};
};

const putProduct =async (id: string, data: ProductType) => {
  const product = await prisma.product.create({
    data
  })
  return product;
};

const deleteProduct =async (userId: string, productId: string) => {
  const product = await prisma.product.delete({
    where: {
      userId,
      id: productId
    }
  })
  return product;
};

export const serviceProduct = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
