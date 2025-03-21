import { RequestHandler } from "express";
import { serviceProduct } from "./product.service.ts";
import { validatorProduct } from "./product.validators.ts";

const getProducts: RequestHandler = async (req, res) => {
  //Pegando todos os produtos que não são do usuario autenticado
  const products = await serviceProduct.getProducts(req.user.id);
  res.status(200).json({products});
  return;
};

const getProduct: RequestHandler = async (req, res) => {
  validatorProduct.idValidator.parse(req.params);
  const { id: productId } = req.params;
  
  const product = await serviceProduct.getProduct(req.user.id, productId);
  
  res.status(200).json({product});
  return;
};

const postProduct: RequestHandler = async (req, res) => {
  validatorProduct.productSchema.parse(req.body);
  const data = req.body;
  const product = await serviceProduct.postProduct(req.user.id, data);
  res.status(201).json({product});
  return;
};

const putProduct: RequestHandler = async (req, res) => {
  validatorProduct.productSchema.parse(req.body);
  const data = req.body;
  validatorProduct.idValidator.parse(req.params);
  const { id: productId } = req.params;
  const product = await serviceProduct.putProduct(req.user.id, productId, data);
  res.status(200).json({product});
  return;
};

const deleteProduct: RequestHandler = async (req, res) => {
  validatorProduct.idValidator.parse(req.params);
  const { id: productId } = req.params;

  const product = await serviceProduct.deleteProduct(req.user.id, productId);
  res.status(200).json({product});
  return;
};

export const controllerProduct = {
  getProducts,
  getProduct,
  postProduct,
  putProduct,
  deleteProduct,
};
