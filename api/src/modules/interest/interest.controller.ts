import { RequestHandler } from "express";
import { interestService } from "./interest.service.ts";
import { validatorInterest } from "./interest.validators.ts";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";

const postInterest: RequestHandler = async (req, res) => {
    const data = {
        ...req.body,
    };
    const interest = await interestService.postInterest(data);
    res.status(201).json({ interest });
    return;
};

const getInterestPerProduct: RequestHandler = async (req, res) => {
    validatorInterest.idValidator.parse(req.params);
    const { id: productId } = req.params;
    const interests = await interestService.getInterestPerProduct(productId);
    res.status(200).json({interests});
}

const getInterestPerUser: RequestHandler = async (req, res) => {
    validatorInterest.idValidator.parse(req.params);
    const { id: userId } = req.params;
    const interests = await interestService.getInterestPerUser(userId);
    res.status(200).json({interests});
}

export const interestController = {
    postInterest,
    getInterestPerProduct, 
    getInterestPerUser
}