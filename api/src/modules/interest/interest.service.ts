import { InterestStatus } from "@prisma/client";
import { prisma } from "../../database/prisma.ts";
import { InterestType } from "./interest.types.ts";

const postInterest = async (data: InterestType) => {
    const interest = await prisma.interest.create({ data });
    return interest;
}

const getInterestPerUser = async (userId: string) => {
    const interests = await prisma.interest.findMany({
        where: {
            userId
        },
        include: {
          product: true,
          user: true
        }
    });
    return interests;
}

const getInterestPerProduct = async (productId: string) => {
    const interests = await prisma.interest.findMany({
        where: {
            productId
        },
        include: {
          product: true,
          user: true
        }
    });
    return interests;
}

const deleteInterest = async (productId: string, userId: string) => {
    const interest = await prisma.interest.delete({
        where: {
            userId_productId: {
                userId,
                productId
            }
        }
    });
    return interest;
}

const patchInterest = async (data: InterestType) => {
    
    const interest = await prisma.interest.update({
        where: {
            userId_productId: {
                userId: data.userId,
                productId: data.productId
            }
        },
        data: {
            status: data.status
        }
    });
    return interest;
};

export const interestService = {
    postInterest,
    getInterestPerUser,
    getInterestPerProduct,
    deleteInterest,
    patchInterest
};