import { RequestHandler } from "express";
import { serviceProduct } from "./product.service.ts";
import { validatorProduct } from "./product.validators.ts";
import path from "path";

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
  const isAvailable = req.body.isAvailable === "true" ? true : false;
  const data = {
    ...req.body,
    isAvailable 
  }

  validatorProduct.productPostAndPutSchema.parse(data);

  if (!req.file) {
    res.status(400).json({ msg: "Nenhum arquivo enviado." });
    return;
  }

  const filePath = path.join("/upload", req.file.filename);

  const newData = {
    ...data,
    image: filePath
  };

  const product = await serviceProduct.postProduct(req.user.id, newData);
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
