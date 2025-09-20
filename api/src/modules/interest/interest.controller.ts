import { RequestHandler } from "express";
import { interestService } from "./interest.service.ts";
import { validatorInterest } from "./interest.validators.ts";

const postInterest: RequestHandler = async (req, res) => {
  const data = {
    ...req.body,
  };
  console.log("\n", data);

  const interest = await interestService.postInterest(data);
  res.status(201).json({ interest });
  return;
};

const getInterests: RequestHandler = async (req, res) => {
  const userId = req.user.id;
  const interests = await interestService.getInterests(userId);
  res.status(200).json({ interests });
  return;
}

const getInterestPerProduct: RequestHandler = async (req, res) => {
  validatorInterest.idValidator.parse(req.params);
  const { id: productId } = req.params;
  const interests = await interestService.getInterestPerProduct(productId);
  res.status(200).json({ interests });
  return;
}

const getInterestPerUser: RequestHandler = async (req, res) => {
  validatorInterest.idValidator.parse(req.params);
  const { id: userId } = req.params;
  const interests = await interestService.getInterestPerUser(userId);
  res.status(200).json({ interests });
  return;
}

const deleteInterest: RequestHandler = async (req, res) => {
  validatorInterest.idValidator.parse(req.params);
  const { userId, productId } = req.params;
  //const userId = req.user.id;
  const interest = await interestService.deleteInterest(productId, userId);
  res.status(200).json({ interest });
  return;
}

const patchInterest: RequestHandler = async (req, res) => {
  validatorInterest.idUserValidator.parse(req.params);
  const { productId: productId, userId: userId } = req.params;
  const data = {
    productId,
    userId,
    ...req.body,
  };
  validatorInterest.interestSchema.parse(data);

  const interest = await interestService.patchInterest(data);
  res.status(200).json({ interest });
  return;


}


export const interestController = {
  postInterest,
  getInterests,
  getInterestPerProduct,
  getInterestPerUser,
  deleteInterest,
  patchInterest
}